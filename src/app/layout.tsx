import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
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

const title = "ODDECH i WIATR — Żagle, freediving, breathwork · Grecja 2026";
const description =
  "7 dni na Morzu Egejskim. Żagle, freediving i breathwork w Zatoce Sarońskiej. 20–27 czerwca 2026 — szukamy załogi, nie pasażerów.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "rejs Grecja 2026",
    "rejs z freedivingiem",
    "freediving Grecja",
    "breathwork rejs",
    "żeglarstwo Grecja",
    "wakacje na żaglach",
    "Zatoka Sarońska",
    "Oddech i Wiatr",
    "rejs morze Egejskie",
    "retreat żeglarski",
  ],
  authors: [{ name: "Arkadiusz Halicki" }],
  creator: "Arkadiusz Halicki",
  publisher: "Oddech i Wiatr",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Oddech i Wiatr",
    images: [
      {
        url: "/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "ODDECH i WIATR — żagle, freediving, breathwork w Grecji 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-preview.jpg"],
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#0c1929",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Oddech i Wiatr — Rejs Grecja 2026",
  startDate: "2026-06-20",
  endDate: "2026-06-27",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description,
  image: [`${siteUrl}/og-preview.jpg`],
  url: siteUrl,
  location: {
    "@type": "Place",
    name: "Zatoka Sarońska, Grecja",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GR",
      addressRegion: "Attica",
    },
  },
  organizer: {
    "@type": "Person",
    name: "Arkadiusz Halicki",
    email: "halicki.arkadiusz@gmail.com",
    url: siteUrl,
  },
  offers: {
    "@type": "Offer",
    price: "5900",
    priceCurrency: "PLN",
    availability: "https://schema.org/LimitedAvailability",
    url: siteUrl,
    validFrom: "2026-04-01",
  },
  maximumAttendeeCapacity: 8,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
