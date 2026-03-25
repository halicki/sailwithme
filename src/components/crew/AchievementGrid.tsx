interface Achievement {
  label: string;
  value: string;
}

export default function AchievementGrid({
  achievements,
}: {
  achievements: Achievement[];
}) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
      {achievements.map((a) => (
        <div
          key={a.label}
          className="theme-card text-center"
          style={{
            padding: "1.25rem 0.75rem",
            background: "var(--card-bg)",
            border: "var(--card-border-width) solid var(--border-subtle)",
            borderRadius: "var(--card-radius)",
          }}
        >
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-1"
            style={{ color: "var(--accent)" }}
          >
            {a.label}
          </p>
          <p
            className="text-lg sm:text-xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--heading-weight)",
              color: "var(--text-primary)",
            }}
          >
            {a.value}
          </p>
        </div>
      ))}
    </div>
  );
}
