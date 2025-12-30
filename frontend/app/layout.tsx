import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DockNavigation, SiteLogo } from "@/components/layout";

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Serksa - System Design Concepts Explained Simply",
  description: "Learn core system design concepts through simple analogies, clear diagrams, and mental models that actually stick.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased pb-20`}>
        <SiteLogo />
        <DockNavigation />
        {children}
      </body>
    </html>
  );
}
