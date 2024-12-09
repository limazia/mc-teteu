import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { ClientOnly } from "@/components/client-only";
import { getChristmasInfo } from "./(home)/actions";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const { daysUntilChristmas } = await getChristmasInfo();

const title = `Faltam ${daysUntilChristmas} dias para o Mc Teteu descongelar!`;
const siteUrl =
  process.env.NEXT_PUBLIC_VERCEL_URL || "https://teteu.site";

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
        url: `/api/og?title=${encodeURIComponent(title)}&t=${Date.now()}`,
        width: 1201,
        height: 675,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MC Teteu no Natal",
    description: "Veja quantos dias faltam para o MC Teteu descongelar!",
    images: [`/api/og?title=${encodeURIComponent(title)}&t=${Date.now()}`],
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
