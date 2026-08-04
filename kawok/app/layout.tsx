import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KAWOK — Honouring the Past. Creating the Future.",
    template: "%s | KAWOK",
  },
  description: site.strapline + " Toledo District, Belize.",
  keywords: [
    "KAWOK",
    "Toledo Temple Trail",
    "Chaos Oasis",
    "Kulcha Fair",
    "Belize",
    "recycled glass bottle architecture",
    "regenerative tourism",
    "Maya heritage",
    "Lubaantun",
  ],
  openGraph: {
    title: "KAWOK — Honouring the Past. Creating the Future.",
    description: site.strapline,
    url: site.url,
    siteName: "KAWOK",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAWOK — Honouring the Past. Creating the Future.",
    description: site.strapline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        {/*
          Fonts are loaded from Google for now. See README — one small change
          moves them onto our own server, which is faster and more private.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..700&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&display=swap"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[99] focus:bg-ink focus:px-4 focus:py-3 focus:text-parchment"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
