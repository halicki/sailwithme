import { forWhomTraits } from "@/data/content";

export default function ForWhom() {
  return (
    <section
      id="dla-kogo"
      className="relative"
      style={{ background: "var(--bg-primary)", padding: "var(--section-py) 0" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <p
          className="uppercase mb-6"
          style={{
            color: "var(--accent)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-tracking)",
            fontWeight: "var(--label-weight)",
          }}
        >
          Na pokładzie
        </p>

        <h2
          className="text-2xl sm:text-4xl mb-10 leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
          }}
        >
          Czego się spodziewać
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {forWhomTraits.map((trait, i) => (
            <div
              key={i}
              className="theme-card"
              style={{
                padding: "var(--card-padding)",
                background: "var(--card-bg)",
                border: "var(--card-border-width) solid var(--border-subtle)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <span
                className="text-xs mb-4 block"
                style={{
                  color: "var(--accent)",
                  letterSpacing: "var(--label-tracking)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="text-sm mb-1"
                style={{
                  color: "var(--text-primary)",
                  fontWeight: "var(--heading-weight)",
                }}
              >
                {trait.title}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-muted)", lineHeight: "var(--body-line-height)" }}
              >
                {trait.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="p-5 text-center"
          style={{
            border: "1px solid var(--border-accent)",
            background: "rgba(var(--accent-rgb), 0.03)",
            borderRadius: "var(--card-radius)",
          }}
        >
          <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
            Do 8 miejsc dla uczestników.
          </span>{" "}
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            Po zgłoszeniu odpisujemy i dogadujemy szczegóły.
          </span>
        </div>
      </div>
    </section>
  );
}
