import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "ODDECH i WIATR — Rejs transformacyjny · Grecja 2026",
  description:
    "7 dni na Morzu Egejskim. Żeglowanie, freediving, breathwork. Nie szukamy pasażerów — szukamy załogi. Zatoka Sarońska, 20–27 czerwca 2026.",
  openGraph: {
    title: "ODDECH i WIATR — Rejs transformacyjny",
    description:
      "7 dni na Morzu Egejskim. Żeglowanie, freediving, breathwork. Zatoka Sarońska, czerwiec 2026.",
    type: "website",
    locale: "pl_PL",
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
      </body>
    </html>
  );
}
