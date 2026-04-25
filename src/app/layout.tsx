import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  title: "ODDECH i WIATR — Rejs transformacyjny · Grecja 2026",
  description:
    "7 dni na Morzu Egejskim. Żeglowanie, freediving, breathwork. Nie szukamy pasażerów — szukamy załogi. Zatoka Sarońska, 20–27 czerwca 2026.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "ODDECH i WIATR — Rejs transformacyjny",
    description:
      "7 dni na Morzu Egejskim. Żeglowanie, freediving, breathwork. Zatoka Sarońska, czerwiec 2026.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ODDECH i WIATR — Rejs transformacyjny w Grecji 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ODDECH i WIATR — Rejs transformacyjny",
    description:
      "7 dni na Morzu Egejskim. Żeglowanie, freediving, breathwork. Zatoka Sarońska, czerwiec 2026.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
