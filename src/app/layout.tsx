import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: "MC Teteu no Natal",
    description: "Veja quantos dias faltam para o MC Teteu descongelar!",
    openGraph: {
      title: "MC Teteu no Natal",
      description: "Veja quantos dias faltam para o MC Teteu descongelar!",
      images: [
        {
          url: `${baseUrl}/api/og`,
          width: 1201,
          height: 675,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "MC Teteu no Natal",
      description: "Veja quantos dias faltam para o MC Teteu descongelar!",
      images: [`${baseUrl}/api/og`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

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
