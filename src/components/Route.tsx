import { routeContent } from "@/data/content";

export default function Route() {
  return (
    <section
      id="trasa"
      className="relative"
      style={{ background: "var(--bg-secondary)", padding: "var(--section-py) 0" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Label */}
        <p
          className="uppercase mb-6"
          style={{
            color: "var(--accent)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-tracking)",
            fontWeight: "var(--label-weight)",
          }}
        >
          Trasa
        </p>

        {/* Heading */}
        <h2
          className="text-2xl sm:text-4xl mb-2 leading-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
          }}
        >
          {routeContent.heading}
        </h2>

        {/* Subheading */}
        <p
          className="text-sm sm:text-base mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          {routeContent.subheading}
        </p>

        {/* Intro */}
        <p
          className="text-sm sm:text-base mb-12 max-w-2xl"
          style={{
            color: "var(--text-secondary)",
            lineHeight: "var(--body-line-height)",
          }}
        >
          {routeContent.intro}
        </p>

        {/* Stops */}
        <div className="flex flex-col gap-6">
          {routeContent.stops.map((stop) => (
            <div
              key={stop.name}
              className="theme-card"
              style={{
                background: "var(--card-bg)",
                border: "var(--card-border-width) solid var(--border-subtle)",
                borderRadius: "var(--card-radius)",
                padding: "var(--card-padding)",
              }}
            >
              <h3
                className="text-lg sm:text-xl mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "var(--heading-weight)",
                  color: "var(--text-primary)",
                }}
              >
                {stop.name}
              </h3>

              <p
                className="text-xs sm:text-sm mb-4"
                style={{ color: "var(--accent)", opacity: 0.8 }}
              >
                {stop.tagline}
              </p>

              <ul className="flex flex-col gap-2 mb-0">
                {stop.hints.map((hint) => (
                  <li
                    key={hint}
                    className="text-xs sm:text-sm flex items-start gap-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mt-1.5 block w-1 h-1 rounded-full shrink-0"
                      style={{ background: "var(--accent)", opacity: 0.5 }}
                    />
                    {hint}
                  </li>
                ))}
              </ul>

              {stop.freeDivingNote && (
                <p
                  className="text-xs sm:text-sm mt-4 pt-3"
                  style={{
                    color: "var(--accent)",
                    opacity: 0.7,
                    borderTop: "1px solid var(--border-subtle)",
                    fontStyle: "italic",
                  }}
                >
                  {stop.freeDivingNote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Closing tease */}
        <p
          className="text-sm sm:text-base mt-10"
          style={{
            color: "var(--text-muted)",
            fontStyle: "italic",
          }}
        >
          {routeContent.closingTease}
        </p>
      </div>
    </section>
  );
}
