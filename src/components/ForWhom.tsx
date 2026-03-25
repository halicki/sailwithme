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
          Czy to jest dla Ciebie?
        </p>

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
              <span className="text-2xl mb-3 block">{trait.icon}</span>
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
            8–10 miejsc.
          </span>{" "}
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            Każda osoba jest wybierana.
          </span>
        </div>
      </div>
    </section>
  );
}
