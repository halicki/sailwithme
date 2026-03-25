"use client";

import Image from "next/image";
import { yachtInfo } from "@/data/content";
import YachtGallery from "./yacht/YachtGallery";
import { useInView } from "@/hooks/useInView";

export default function Yacht() {
  const [featuresRef, featuresVisible] = useInView(0.1);

  return (
    <section
      id="jacht"
      className="relative"
      style={{ background: "var(--bg-primary)", padding: "var(--section-py) 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <p
          className="uppercase mb-6"
          style={{
            color: "var(--accent)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-tracking)",
            fontWeight: "var(--label-weight)",
          }}
        >
          Jacht
        </p>

        <h2
          className="text-2xl sm:text-4xl mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
          }}
        >
          {yachtInfo.subtitle}
        </h2>

        <p
          className="text-sm sm:text-base mb-10 max-w-2xl"
          style={{
            color: "var(--text-muted)",
            lineHeight: "var(--body-line-height)",
          }}
        >
          {yachtInfo.description}
        </p>

        {/* Gallery */}
        <div className="mb-10">
          <YachtGallery images={yachtInfo.images} />
        </div>

        {/* Design highlights */}
        <div className="flex flex-wrap gap-2 mb-10">
          {yachtInfo.designHighlights.map((h) => (
            <span
              key={h}
              className="text-[11px] tracking-wide px-4 py-2"
              style={{
                color: "var(--accent)",
                border: "1px solid var(--border-accent)",
                borderRadius: "var(--card-radius)",
              }}
            >
              {h}
            </span>
          ))}
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
          {yachtInfo.specs.map((spec) => (
            <div
              key={spec.label}
              className="theme-card text-center"
              style={{
                padding: "var(--card-padding)",
                background: "var(--card-bg)",
                border: "var(--card-border-width) solid var(--border-subtle)",
                borderRadius: "var(--card-radius)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <p
                className="text-[10px] tracking-[0.2em] uppercase mb-1"
                style={{ color: "var(--accent)" }}
              >
                {spec.label}
              </p>
              <p
                className="text-sm"
                style={{
                  color: "var(--text-primary)",
                  fontWeight: "var(--heading-weight)",
                }}
              >
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div
          ref={featuresRef}
          className={`space-y-16 mb-10 animate-in ${featuresVisible ? "is-visible" : ""}`}
        >
          {yachtInfo.features.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              } gap-8 sm:gap-12 items-center`}
            >
              {/* Feature image */}
              {feature.image && (
                <div
                  className="flex-shrink-0 w-full sm:w-1/2 relative aspect-[4/3] overflow-hidden"
                  style={{
                    borderRadius: "var(--card-radius)",
                    border:
                      "var(--card-border-width) solid var(--border-subtle)",
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Feature text */}
              <div className="flex-1">
                <h3
                  className="text-lg sm:text-xl mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "var(--heading-weight)",
                    letterSpacing: "var(--heading-tracking)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm"
                  style={{
                    color: "var(--text-muted)",
                    lineHeight: "var(--body-line-height)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Spec link */}
        <a
          href={yachtInfo.specUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs tracking-wide hover:brightness-125"
          style={{
            color: "var(--accent)",
            opacity: 0.6,
            transition: `all var(--transition-duration) var(--transition-easing)`,
          }}
        >
          Zobacz pełną specyfikację →
        </a>
      </div>
    </section>
  );
}
