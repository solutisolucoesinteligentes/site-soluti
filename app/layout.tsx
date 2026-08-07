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
    title: "SoluTi Tech Store | Sites, Vendas Web e Assistência Técnica",
    description:
      "Sites profissionais, catálogos com pedidos pelo WhatsApp, soluções web de vendas e assistência técnica para pequenos negócios.",
    icons: {
      icon: "/logo-soluti-transparent.png",
      shortcut: "/logo-soluti-transparent.png",
    },
    openGraph: {
      title: "SoluTi Tech Store",
      description: "Sites, vendas web e tecnologia sob medida para pequenos negócios.",
      locale: "pt_BR",
      type: "website",
      images: [{ url: socialImageUrl, width: 1731, height: 909, alt: "SoluTi Tech Store" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "SoluTi Tech Store",
      description: "Presença digital, vendas pelo WhatsApp e assistência técnica em Araranguá e região.",
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
