import type { SiteContent } from "@/data/get-content";
import type { UIStrings } from "@/data/ui-strings";
import CrewProfile from "./crew/CrewProfile";
import CrewCTA from "./crew/CrewCTA";

export default function Crew({
  members,
  t,
  ctaT,
}: {
  members: SiteContent["crewMembers"];
  t: UIStrings["crew"];
  ctaT: UIStrings["crewCta"];
}) {
  return (
    <section id="zaloga">
      {/* Section header */}
      <div
        style={{
          background: "var(--bg-tertiary)",
          padding: "var(--section-py) 0 4rem",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="uppercase mb-6"
            style={{
              color: "var(--accent)",
              fontSize: "var(--label-size)",
              letterSpacing: "var(--label-tracking)",
              fontWeight: "var(--label-weight)",
            }}
          >
            {t.eyebrow}
          </p>

          <h2
            className="text-2xl sm:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--heading-weight)",
              letterSpacing: "var(--heading-tracking)",
            }}
          >
            {t.heading}
          </h2>
        </div>
      </div>

      {/* Crew profiles */}
      {members.map((member, i) => (
        <CrewProfile
          key={member.slug}
          member={member}
          bgVariant={i % 2 === 0 ? "tertiary" : "primary"}
          onRetreatLabel={t.onRetreatLabel}
          portraitAltSuffix={t.portraitAltSuffix}
        />
      ))}

      {/* "Ty?" / "You?" CTA */}
      <CrewCTA t={ctaT} />
    </section>
  );
}
