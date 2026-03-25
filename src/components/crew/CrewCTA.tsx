export default function CrewCTA() {
  return (
    <div
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 40%, var(--bg-tertiary) 70%, var(--bg-primary) 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          width: "600px",
          height: "600px",
          background: "rgba(var(--accent-rgb), 0.06)",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <h3
          className="text-5xl sm:text-7xl lg:text-8xl mb-6"
          style={{
            color: "var(--accent)",
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
          }}
        >
          Ty?
        </h3>

        <p
          className="text-base sm:text-lg max-w-md mx-auto mb-10"
          style={{
            color: "var(--text-secondary)",
            lineHeight: "1.7",
          }}
        >
          Twoje miejsce w załodze czeka. Zgłoś się — odpowiemy w ciągu 48h.
        </p>

        <a
          href="#formularz"
          className="theme-btn inline-block uppercase"
          style={{
            background: "var(--btn-bg)",
            color: "var(--btn-color)",
            border: "var(--btn-border-width) solid var(--btn-border-color)",
            borderRadius: "var(--btn-radius)",
            padding: "1.25rem 4rem",
            fontSize: "var(--btn-font-size)",
            fontWeight: "var(--btn-weight)",
            letterSpacing: "var(--btn-tracking)",
          }}
        >
          Dołącz do załogi →
        </a>
      </div>
    </div>
  );
}
