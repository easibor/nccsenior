import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NCC - Seniors Hive",
  description: "Nurturing Independence, Fostering Connections: Your Home Away From Home. Join our community of seniors for social programs, support services, and enriching activities.",
  keywords: "senior center, community center, senior services, social programs, senior activities, Springfield IL",
  authors: [{ name: "Seniors Hive Community Center" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    shortcut: '/favicon.ico',
    apple: '/android-chrome-192x192.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "New City Church - Seniors Hive",
    description: "Nurturing Independence, Fostering Connections: Your Home Away From Home",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
