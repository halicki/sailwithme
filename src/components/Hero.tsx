import Link from "next/link";
import type { SiteContent } from "@/data/get-content";
import type { Locale, UIStrings } from "@/data/ui-strings";
import HeroVideoOverlay from "./HeroVideoOverlay";

export default function Hero({
  locale,
  content,
  t,
}: {
  locale: Locale;
  content: SiteContent["heroContent"];
  t: UIStrings["hero"];
}) {
  const otherLocale: Locale = locale === "pl" ? "en" : "pl";
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Language switcher — always visible in hero (top-right) */}
      <Link
        href={`/${otherLocale}`}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 uppercase px-3 py-1.5 rounded"
        style={{
          color: "var(--accent)",
          fontSize: "var(--label-size)",
          letterSpacing: "var(--label-tracking)",
          background: "rgba(12, 25, 41, 0.4)",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(142, 184, 212, 0.2)",
        }}
        aria-label={`Switch to ${otherLocale.toUpperCase()}`}
      >
        {otherLocale.toUpperCase()}
      </Link>

      {/* Video background — Server Component renders this as pure HTML.
          React won't hydrate it, so `muted` stays in the DOM and
          mobile browsers allow autoplay. */}
      <video
        data-hero-video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={content.backgroundVideo} type="video/mp4" />
      </video>

      {/* Poster — covers video until it plays, then removed from DOM */}
      <HeroVideoOverlay />

      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,21,32,0.5) 0%, rgba(12,25,41,0.7) 50%, rgba(12,25,41,0.9) 100%)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          width: "var(--glow-size)",
          height: "var(--glow-size)",
          background: "rgba(var(--accent-rgb), var(--glow-intensity))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p
          className="uppercase mb-8 animate-fade-in-up animate-fade-in-up-d1"
          style={{
            color: "var(--text-muted)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-tracking)",
            fontWeight: "var(--label-weight)",
          }}
        >
          {content.preTitle}
        </p>

        <h1
          className="leading-none animate-fade-in-up animate-fade-in-up-d2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span
            className="block uppercase"
            style={{
              fontSize: "var(--hero-title-size)",
              fontWeight: "var(--hero-title-weight)",
              letterSpacing: "var(--hero-title-tracking)",
            }}
          >
            {content.titleTop}
          </span>

          <span
            className="hero-connector block font-light italic"
            style={{
              color: "var(--accent)",
              fontSize: "1rem",
              letterSpacing: "0.3em",
            }}
          >
            {content.titleConnector}
          </span>

          <span
            className="block uppercase"
            style={{
              fontSize: "var(--hero-title-size)",
              fontWeight: "var(--hero-title-weight)",
              letterSpacing: "var(--hero-title-tracking)",
            }}
          >
            {content.titleBottom}
          </span>
        </h1>

        <p
          className="mt-8 animate-fade-in-up animate-fade-in-up-d3"
          style={{
            color: "var(--text-muted)",
            fontSize: "0.8125rem",
            letterSpacing: "0.15em",
          }}
        >
          {content.subtitle}
        </p>

        {/* Tagline */}
        <p
          className="mt-6 max-w-xl mx-auto animate-fade-in-up animate-fade-in-up-d4"
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9375rem",
            lineHeight: "1.7",
            letterSpacing: "0.03em",
          }}
        >
          {content.tagline}
        </p>

        <a
          href="#formularz"
          className="theme-btn inline-block mt-10 uppercase animate-fade-in-up animate-fade-in-up-d5"
          style={{
            background: "var(--btn-bg)",
            color: "var(--btn-color)",
            border: "var(--btn-border-width) solid var(--btn-border-color)",
            borderRadius: "var(--btn-radius)",
            padding: "var(--btn-py) var(--btn-px)",
            fontSize: "var(--btn-font-size)",
            fontWeight: "var(--btn-weight)",
            letterSpacing: "var(--btn-tracking)",
          }}
        >
          {content.ctaText}
        </a>

        <a
          href="#trasa"
          className="block mt-5 text-xs tracking-wide animate-fade-in-up animate-fade-in-up-d5"
          style={{ color: "var(--text-muted)" }}
        >
          {t.ctaSeeRoute}
        </a>

        {/* Scroll indicator — SVG chevron */}
        <div className="theme-scroll-indicator mt-16 flex flex-col items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            style={{ color: "var(--text-muted)", opacity: 0.5 }}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
