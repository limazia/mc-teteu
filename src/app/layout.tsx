import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "https://teteu.site";

const ogImageUrl = `/api/og?t=${new Date().toISOString().split("T")[0]}`;

export const metadata: Metadata = {
  title: "MC Teteu no Natal",
  description: "Veja quantos dias faltam para o MC Teteu descongelar!",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "MC Teteu no Natal",
    description: "Veja quantos dias faltam para o MC Teteu descongelar!",
    url: siteUrl,
    siteName: "MC Teteu no Natal",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1201,
        height: 675,
        alt: "MC Teteu Triggered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MC Teteu no Natal",
    description: "Veja quantos dias faltam para o MC Teteu descongelar!",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased flex flex-col justify-center items-center">
        <ClientOnly>{children}</ClientOnly>
        <Analytics />
      </body>
    </html>
  );
}
