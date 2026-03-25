"use client";

import Image from "next/image";
import type { CrewMember } from "@/data/content";
import AchievementGrid from "./AchievementGrid";
import { useInView } from "@/hooks/useInView";

export default function CrewProfile({
  member,
  bgVariant = "primary",
}: {
  member: CrewMember;
  bgVariant?: "primary" | "tertiary";
}) {
  const bg =
    bgVariant === "primary" ? "var(--bg-primary)" : "var(--bg-tertiary)";

  const [bioRef, bioVisible] = useInView(0.1);
  const [credRef, credVisible] = useInView(0.1);
  const [retreatRef, retreatVisible] = useInView(0.1);

  return (
    <div>
      {/* ── Hero block ── */}
      <div
        className="relative min-h-[80vh] flex items-end overflow-hidden"
        style={{ background: bg }}
      >
        {/* Background image */}
        <Image
          src={member.heroImage}
          alt={member.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority={member.slug === "piotr"}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,21,32,0.2) 0%, rgba(12,25,41,0.85) 100%)",
          }}
        />

        {/* Text overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 sm:pb-24 w-full">
          <p
            className="uppercase mb-3"
            style={{
              color: "var(--accent)",
              fontSize: "var(--label-size)",
              letterSpacing: "var(--label-tracking)",
              fontWeight: "var(--label-weight)",
            }}
          >
            {member.role}
            {member.brand && (
              <span style={{ color: "var(--text-muted)" }}>
                {" "}
                · {member.brand}
              </span>
            )}
          </p>
          <h2
            className="text-4xl sm:text-6xl lg:text-7xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--heading-weight)",
              letterSpacing: "var(--heading-tracking)",
            }}
          >
            {member.name}
          </h2>
          <p
            className="text-base sm:text-lg max-w-xl"
            style={{
              color: "var(--text-secondary)",
              fontStyle: "italic",
              lineHeight: "1.6",
            }}
          >
            {member.tagline}
          </p>
        </div>
      </div>

      {/* ── Bio block ── */}
      <div style={{ background: bg, padding: "5rem 0" }}>
        <div
          ref={bioRef}
          className={`max-w-5xl mx-auto px-6 flex flex-col sm:flex-row gap-10 sm:gap-16 items-start animate-in ${bioVisible ? "is-visible" : ""}`}
        >
          {/* Text */}
          <div className="flex-1 order-2 sm:order-1">
            <p
              className="text-lg sm:text-xl mb-6"
              style={{
                color: "var(--text-primary)",
                lineHeight: "1.7",
                fontFamily: "var(--font-display)",
                fontWeight: "var(--heading-weight)",
              }}
            >
              {member.bio.intro}
            </p>

            {member.bio.story.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-sm sm:text-base mb-4"
                style={{
                  color: "var(--text-muted)",
                  lineHeight: "var(--body-line-height)",
                }}
              >
                {paragraph}
              </p>
            ))}

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href={`https://instagram.com/${member.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wide hover:brightness-125"
                style={{
                  color: "var(--accent)",
                  opacity: 0.7,
                  transition: `all var(--transition-duration) var(--transition-easing)`,
                }}
              >
                @{member.instagram}
              </a>
              {member.website && (
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wide hover:brightness-125"
                  style={{
                    color: "var(--accent)",
                    opacity: 0.7,
                    transition: `all var(--transition-duration) var(--transition-easing)`,
                  }}
                >
                  {member.website.replace(/^https?:\/\//, "")}
                </a>
              )}
            </div>
          </div>

          {/* Portrait */}
          <div className="flex-shrink-0 order-1 sm:order-2 w-full sm:w-72 lg:w-80">
            <div
              className="relative aspect-[4/5] overflow-hidden"
              style={{
                borderRadius: "var(--card-radius)",
                border: "var(--card-border-width) solid var(--border-subtle)",
              }}
            >
              <Image
                src={member.portraitImage}
                alt={`${member.name} — portret`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 320px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Credentials ── */}
      {member.credentials && member.credentials.length > 0 && (
        <div style={{ background: bg, paddingBottom: "5rem" }}>
          <div
            ref={credRef}
            className={`max-w-5xl mx-auto px-6 animate-in ${credVisible ? "is-visible" : ""}`}
          >
            <div className="flex flex-wrap gap-2 mb-8">
              {member.credentials.map((c) => (
                <span
                  key={c}
                  className="text-[11px] tracking-wide px-4 py-2"
                  style={{
                    color: "var(--accent)",
                    border: "1px solid var(--border-accent)",
                    borderRadius: "var(--card-radius)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            {member.achievements && member.achievements.length > 0 && (
              <AchievementGrid achievements={member.achievements} />
            )}
          </div>
        </div>
      )}

      {/* ── Quote ── */}
      {member.quote && (
        <div style={{ background: bg, paddingBottom: "4rem" }}>
          <div className="max-w-3xl mx-auto px-6">
            <blockquote
              className="text-base sm:text-lg italic pl-6"
              style={{
                color: "var(--text-secondary)",
                borderLeft: "2px solid var(--accent)",
                lineHeight: "1.7",
              }}
            >
              &ldquo;{member.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      )}

      {/* ── On retreat ── */}
      <div style={{ background: bg, paddingBottom: "5rem" }}>
        <div
          ref={retreatRef}
          className={`max-w-3xl mx-auto px-6 animate-in ${retreatVisible ? "is-visible" : ""}`}
        >
          <p
            className="uppercase mb-4"
            style={{
              color: "var(--accent)",
              fontSize: "var(--label-size)",
              letterSpacing: "var(--label-tracking)",
              fontWeight: "var(--label-weight)",
            }}
          >
            Na rejsie
          </p>
          <p
            className="text-sm sm:text-base"
            style={{
              color: "var(--text-muted)",
              lineHeight: "var(--body-line-height)",
            }}
          >
            {member.bio.onRetreat}
          </p>
        </div>
      </div>
    </div>
  );
}
