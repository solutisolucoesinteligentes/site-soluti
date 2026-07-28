import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host =
    incomingHeaders.get("x-forwarded-host") ??
    incomingHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    incomingHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const socialImageUrl = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title: "SoluTi Tech Store | Assistência Técnica em Araranguá",
    description:
      "Assistência técnica em computadores e notebooks, upgrades, redes, suporte remoto e soluções em tecnologia em Araranguá e região.",
    icons: {
      icon: "/logo-soluti-transparent.png",
      shortcut: "/logo-soluti-transparent.png",
    },
    openGraph: {
      title: "SoluTi Tech Store",
      description: "Tecnologia que resolve. Desempenho que permanece.",
      locale: "pt_BR",
      type: "website",
      images: [{ url: socialImageUrl, width: 1731, height: 909, alt: "SoluTi Tech Store" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "SoluTi Tech Store",
      description: "Assistência técnica e soluções em tecnologia em Araranguá e região.",
      images: [socialImageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
