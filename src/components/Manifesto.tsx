import { manifesto } from "@/data/content";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative"
      style={{ background: "var(--bg-secondary)", padding: "var(--section-py) 0" }}
    >
      {/* Themed top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="theme-divider" />
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <p
          className="uppercase mb-6"
          style={{
            color: "var(--accent)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-tracking)",
            fontWeight: "var(--label-weight)",
          }}
        >
          Manifesto
        </p>

        <h2
          className="text-2xl sm:text-4xl mb-8 leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
            textTransform: "var(--heading-transform)" as React.CSSProperties["textTransform"],
          }}
        >
          {manifesto.heading}
        </h2>

        <div
          className="space-y-6 text-sm sm:text-base"
          style={{
            color: "var(--text-muted)",
            lineHeight: "var(--body-line-height)",
          }}
        >
          {manifesto.body.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <p
          className="mt-10 text-base sm:text-lg"
          style={{
            color: "var(--accent)",
            fontWeight: "var(--heading-weight)",
          }}
        >
          {manifesto.closing}
        </p>
      </div>
    </section>
  );
}
