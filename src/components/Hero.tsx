import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroContent.backgroundVideo} type="video/mp4" />
      </video>

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
          {heroContent.preTitle}
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
            {heroContent.titleTop}
          </span>

          <span
            className="hero-connector block font-light italic"
            style={{
              color: "var(--accent)",
              fontSize: "1rem",
              letterSpacing: "0.3em",
            }}
          >
            i
          </span>

          <span
            className="block uppercase"
            style={{
              fontSize: "var(--hero-title-size)",
              fontWeight: "var(--hero-title-weight)",
              letterSpacing: "var(--hero-title-tracking)",
            }}
          >
            {heroContent.titleBottom}
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
          {heroContent.subtitle}
        </p>

        {/* Tagline */}
        <p
          className="mt-6 max-w-lg mx-auto animate-fade-in-up animate-fade-in-up-d4"
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9375rem",
            lineHeight: "1.7",
            letterSpacing: "0.03em",
          }}
        >
          {heroContent.tagline}
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
          {heroContent.ctaText}
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
