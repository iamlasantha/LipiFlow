import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'සිංLipiFlow | Singlish to Sinhala Unicode Converter',
  description: 'Zero-latency phonetic Singlish to Sinhala Unicode transliteration engine with progressive offline capabilities.',
  manifest: '/manifest.json', // We will build this in Phase 4
};

import { Header } from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="si" className="dark h-full">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-50 flex flex-col selection:bg-indigo-500/30`}>
        <Header />
        <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
