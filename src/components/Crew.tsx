import { crewMembers } from "@/data/content";
import CrewProfile from "./crew/CrewProfile";
import CrewCTA from "./crew/CrewCTA";


export default function Crew() {
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
            Załoga
          </p>

          <h2
            className="text-2xl sm:text-4xl"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--heading-weight)",
              letterSpacing: "var(--heading-tracking)",
            }}
          >
            Kto stoi za sterami
          </h2>
        </div>
      </div>

      {/* Crew profiles */}
      {crewMembers.map((member, i) => (
        <CrewProfile
          key={member.slug}
          member={member}
          bgVariant={i % 2 === 0 ? "tertiary" : "primary"}
        />
      ))}

      {/* "Ty?" CTA */}
      <CrewCTA />
    </section>
  );
}
