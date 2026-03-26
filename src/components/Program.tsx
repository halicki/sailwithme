import { programDays } from "@/data/content";

export default function Program() {
  const opacities = [1, 0.7, 0.5, 0.4, 0.3, 0.5, 1];

  return (
    <section
      id="program"
      className="relative"
      style={{ background: "var(--bg-tertiary)", padding: "var(--section-py) 0" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <p
          className="uppercase mb-6"
          style={{
            color: "var(--accent)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-tracking)",
            fontWeight: "var(--label-weight)",
          }}
        >
          Podróż
        </p>

        <h2
          className="text-2xl sm:text-4xl mb-12 leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
            textTransform: "var(--heading-transform)" as React.CSSProperties["textTransform"],
          }}
        >
          7 dni. 7 wyzwań.
        </h2>

        <div className="flex flex-col gap-2">
          {programDays.map((day, i) => {
            const opacity = opacities[i];
            return (
              <div
                key={day.day}
                className="theme-timeline-item group flex items-center gap-4 sm:gap-6 p-4"
                style={{
                  borderLeft: `var(--timeline-width) var(--timeline-style) rgba(var(--accent-rgb), ${opacity})`,
                  backgroundColor:
                    opacity === 1
                      ? "rgba(var(--accent-rgb), 0.04)"
                      : "transparent",
                  borderRadius: "var(--card-radius)",
                  transition: `all var(--transition-duration) var(--transition-easing)`,
                }}
              >
                <span
                  className="text-2xl sm:text-3xl min-w-[48px] tabular-nums"
                  style={{
                    color: `rgba(var(--accent-rgb), ${opacity})`,
                    fontWeight: "var(--heading-weight)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {String(day.day).padStart(2, "0")}
                </span>
                <div>
                  <span
                    className="text-sm sm:text-base"
                    style={{
                      color: "var(--text-primary)",
                      fontWeight: "var(--heading-weight)",
                    }}
                  >
                    {day.name}
                  </span>
                  <span className="text-xs sm:text-sm ml-2" style={{ color: "var(--text-muted)" }}>
                    — {day.description}
                  </span>
                  {day.location && (
                    <span
                      className="text-xs sm:text-sm ml-1"
                      style={{ color: "var(--accent)", opacity: 0.6 }}
                    >
                      {" "}· {day.location}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
