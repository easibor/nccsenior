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
    icon: '/img/logo-solo-1.png',
    shortcut: '/img/logo-solo-1.png',
    apple: '/img/logo-solo-1.png',
  },
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
