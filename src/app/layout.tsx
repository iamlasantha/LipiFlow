import type { Metadata } from "next";
import { Inter, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const notoSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala"],
});

export const metadata: Metadata = {
  title: "සිංLipiFlow | Singlish to Sinhala Converter",
  description: "An intelligent, real-time web tool to generate Sinhala Unicode using Phonetic Singlish input with zero latency.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="si"
      className={`${inter.variable} ${notoSinhala.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
