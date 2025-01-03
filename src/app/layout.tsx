import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

  return {
    title: "MC Teteu no Natal",
    description: "Veja quantos dias faltam para o MC Teteu descongelar!",
    openGraph: {
      title: "MC Teteu no Natal",
      description: "Veja quantos dias faltam para o MC Teteu descongelar!",
      url: baseUrl,
      siteName: "MC Teteu no Natal",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "og-image.png",
          width: 1200,
          height: 675,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contagem Regressiva",
      description: "Veja quantos dias faltam!",
      images: ["og-image.png"],
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
