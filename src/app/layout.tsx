import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "MC Teteu",
  description: "Apenas um gerador tranquilo de um cara tranquilo",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://guy-chill.vercel.app"),
  openGraph: {
    title: "MC Teteu",
    description: "Apenas um gerador tranquilo de um cara tranquilo",
    url: "https://guy-chill.vercel.app",
    images: "/og-image.png",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: false,
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
      <body className="antialiased">
        <ClientOnly>
          <main className="w-full min-h-screen h-full py-32 flex flex-col items-center justify-center">
            {children}
          </main>
        </ClientOnly>
      </body>
    </html>
  );
}
