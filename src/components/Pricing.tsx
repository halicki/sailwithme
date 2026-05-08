import type { SiteContent } from "@/data/get-content";
import type { UIStrings } from "@/data/ui-strings";

export default function Pricing({
  info,
  t,
}: {
  info: SiteContent["pricingInfo"];
  t: UIStrings["pricing"];
}) {
  return (
    <section
      id="koszt"
      className="relative"
      style={{ background: "var(--bg-secondary)", padding: "var(--section-py) 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-start">
          <div>
            <p
              className="uppercase mb-5"
              style={{
                color: "var(--accent)",
                fontSize: "var(--label-size)",
                letterSpacing: "var(--label-tracking)",
              }}
            >
              {t.eyebrow}
            </p>
            <h2
              className="text-3xl sm:text-5xl mb-4 leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--heading-weight)",
                letterSpacing: "var(--heading-tracking)",
              }}
            >
              {info.headline}
            </h2>
            <p
              className="text-sm sm:text-base max-w-xl"
              style={{ color: "var(--text-secondary)", lineHeight: "var(--body-line-height)" }}
            >
              {info.description}
            </p>
          </div>

          <div
            className="theme-card"
            style={{
              padding: "var(--card-padding)",
              background: "rgba(var(--accent-rgb), 0.05)",
              border: "var(--card-border-width) solid var(--border-accent)",
              borderRadius: "var(--card-radius)",
            }}
          >
            <p
              className="text-3xl sm:text-4xl mb-2"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
                fontWeight: "var(--heading-weight)",
              }}
            >
              {info.priceRange}
            </p>
            <p className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
              {info.priceNote}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p
                  className="uppercase mb-3"
                  style={{
                    color: "var(--accent)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-tracking)",
                  }}
                >
                  {t.included}
                </p>
                <ul className="space-y-2">
                  {info.included.map((item) => (
                    <li
                      key={item}
                      className="text-sm flex gap-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span style={{ color: "var(--accent)" }}>+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="uppercase mb-3"
                  style={{
                    color: "var(--accent)",
                    fontSize: "var(--label-size)",
                    letterSpacing: "var(--label-tracking)",
                  }}
                >
                  {t.excluded}
                </p>
                <ul className="space-y-2">
                  {info.notIncluded.map((item) => (
                    <li
                      key={item}
                      className="text-sm flex gap-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--accent)" }}>-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
