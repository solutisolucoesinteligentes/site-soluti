import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import siteWorker from "../dist/server/index.js";

const root = resolve(import.meta.dirname, "..");
const clientDir = resolve(root, "dist/client");

const response = await siteWorker.fetch(
  new Request("https://example.com/"),
  { ASSETS: { fetch: async () => new Response(null, { status: 404 }) } },
  { waitUntil() {} },
);

if (!response.ok) throw new Error(`Não foi possível renderizar o site: ${response.status}`);

let html = await response.text();
html = html
  .replaceAll('"/assets/', '"assets/')
  .replaceAll('href="/assets/', 'href="assets/')
  .replaceAll('src="/assets/', 'src="assets/')
  .replaceAll('srcSet="/assets/', 'srcSet="assets/')
  .replaceAll('src="/', 'src="')
  .replaceAll('href="/', 'href="');

await rm(resolve(root, "assets"), { recursive: true, force: true });
await cp(resolve(clientDir, "assets"), resolve(root, "assets"), { recursive: true });

for (const entry of await readdir(clientDir, { withFileTypes: true })) {
  if (entry.isFile() && !["_headers", ".assetsignore"].includes(entry.name)) {
    await cp(resolve(clientDir, entry.name), resolve(root, entry.name));
  }
}

await mkdir(root, { recursive: true });
await writeFile(resolve(root, "index.html"), html);
await writeFile(resolve(root, ".nojekyll"), "");

const manifest = JSON.parse(await readFile(resolve(clientDir, ".vite/manifest.json"), "utf8"));
if (!Object.keys(manifest).length) throw new Error("Manifesto de arquivos estático vazio.");
