import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { notFound } from "next/navigation";
import "../globals.css";

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

const localeMeta = {
  pl: {
    title: "ODDECH i WIATR — Żagle, freediving, oddech · Grecja 2026",
    description:
      "7 dni na Morzu Egejskim. Żagle, freediving i oddech w Zatoce Sarońskiej. 20–27 czerwca 2026 — szukamy załogi, nie pasażerów.",
    ogLocale: "pl_PL",
    siteName: "Oddech i Wiatr",
    keywords: [
      "rejs Grecja 2026",
      "rejs z freedivingiem",
      "freediving Grecja",
      "oddech rejs",
      "żeglarstwo Grecja",
      "wakacje na żaglach",
      "Zatoka Sarońska",
      "Oddech i Wiatr",
      "rejs morze Egejskie",
      "retreat żeglarski",
    ],
    eventName: "Oddech i Wiatr — Rejs Grecja 2026",
    eventLocationName: "Zatoka Sarońska, Grecja",
    ogAlt: "ODDECH i WIATR — żagle, freediving, oddech w Grecji 2026",
  },
  en: {
    title: "BREATH & WIND — Sailing, freediving, breath · Greece 2026",
    description:
      "7 days on the Aegean. Sailing, freediving and conscious breath in the Saronic Gulf. 20–27 June 2026 — we're looking for crew, not passengers.",
    ogLocale: "en_US",
    siteName: "Breath & Wind",
    keywords: [
      "Greece sailing 2026",
      "freediving sailing trip",
      "freediving Greece",
      "breathwork sailing",
      "sailing Greece",
      "sailing holiday",
      "Saronic Gulf",
      "Breath and Wind",
      "Aegean sailing",
      "sailing retreat",
    ],
    eventName: "Breath & Wind — Sailing Voyage Greece 2026",
    eventLocationName: "Saronic Gulf, Greece",
    ogAlt: "BREATH & WIND — sailing, freediving, breath in Greece 2026",
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "pl" && locale !== "en") return {};
  const meta = localeMeta[locale];

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        pl: "/pl",
        en: "/en",
      },
    },
    keywords: [...meta.keywords],
    authors: [{ name: "Arkadiusz Halicki" }],
    creator: "Arkadiusz Halicki",
    publisher: meta.siteName,
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
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: meta.ogLocale,
      url: `${siteUrl}/${locale}`,
      siteName: meta.siteName,
      images: [
        {
          url: "/og-preview.jpg",
          width: 1200,
          height: 630,
          alt: meta.ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-preview.jpg"],
    },
    category: "travel",
  };
}

export const viewport: Viewport = {
  themeColor: "#0c1929",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "pl" && locale !== "en") {
    notFound();
  }
  const meta = localeMeta[locale];

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: meta.eventName,
    startDate: "2026-06-20",
    endDate: "2026-06-27",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: meta.description,
    image: [`${siteUrl}/og-preview.jpg`],
    url: `${siteUrl}/${locale}`,
    location: {
      "@type": "Place",
      name: meta.eventLocationName,
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
      url: `${siteUrl}/${locale}`,
      validFrom: "2026-04-01",
    },
    maximumAttendeeCapacity: 8,
  };

  return (
    <html lang={locale}>
      <head>
        <link
          rel="manifest"
          href="/manifest.webmanifest"
          crossOrigin="use-credentials"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Z4BcOAfFo76iH+UWlI84vg"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
