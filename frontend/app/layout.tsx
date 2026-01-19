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
  metadataBase: new URL('https://serksa.org'),
  title: {
    default: "Serksa - System Design Concepts Explained Simply",
    template: "%s | Serksa"
  },
  description: "Learn core system design, backend architecture, and distributed systems through simple analogies, clear diagrams, and mental models that actually stick.",
  keywords: [
    "System Design",
    "Backend Development",
    "Software Architecture",
    "Distributed Systems",
    "Scalability",
    "Microservices",
    "API Design",
    "Database Management",
    "Computer Science Fundamentals",
    "Software Engineering Tutorials"
  ],
  authors: [{ name: "Serksa Team" }],
  creator: "Serksa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://serksa.org",
    title: "Serksa - System Design Concepts Explained Simply",
    description: "Visual system design tutorials using real-world analogies like Instagram, Netflix, and WhatsApp.",
    siteName: "Serksa",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Serksa - System Design Explained Simply"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Serksa - System Design Concepts Explained Simply",
    description: "Learn core system design concepts through simple analogies and clear diagrams.",
    images: ["/og-image.png"],
    creator: "@serksa"
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://serksa.org'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Serksa",
              "alternateName": "Serksa System Design",
              "url": "https://serksa.org",
              "description": "Learn system design through simple analogies and Diagrams",
              "publisher": {
                "@type": "Organization",
                "name": "Serksa",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://serksa.org/favicon.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://serksa.org/concepts?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <DockNavigation />
        {children}
      </body>
    </html>
  );
}
