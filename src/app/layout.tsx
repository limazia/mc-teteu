import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { ClientOnly } from "@/components/client-only";
import { getChristmasInfo } from "./(home)/actions";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const host = process.env.NEXT_PUBLIC_VERCEL_URL;

const { daysUntilChristmas } = await getChristmasInfo();

export const metadata: Metadata = {
  title: "MC Teteu no Natal",
  description: "Faltam poucos dias para o MC Teteu descongelar!",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(host!),
  openGraph: {
    title: "MC Teteu no Natal",
    description: "Faltam poucos dias para o MC Teteu descongelar!",
    url: host,
    images: `${host}/api/og?title=Faltam ${daysUntilChristmas} dias para o Mc Teteu descongelar!`,
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
