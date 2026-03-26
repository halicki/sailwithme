import Image from "next/image";
import { yachtInfo } from "@/data/content";

export default function Yacht() {
  return (
    <section
      id="jacht"
      className="relative"
      style={{ background: "var(--bg-primary)", padding: "var(--section-py) 0" }}
    >
      <div className="max-w-5xl mx-auto px-6">
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
          Jacht
        </p>

        {/* Headline */}
        <h2
          className="text-2xl sm:text-4xl mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
          }}
        >
          {yachtInfo.headline}
        </h2>

        {/* Description */}
        <p
          className="text-sm sm:text-base mb-10 max-w-2xl"
          style={{
            color: "var(--text-muted)",
            lineHeight: "var(--body-line-height)",
          }}
        >
          {yachtInfo.description}
        </p>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {yachtInfo.images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden"
              style={{
                borderRadius: "var(--card-radius)",
                border: "var(--card-border-width) solid var(--border-subtle)",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Comfort cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {yachtInfo.comforts.map((comfort) => (
            <div key={comfort.title} className="theme-card">
              <h3
                className="text-base sm:text-lg mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "var(--heading-weight)",
                  letterSpacing: "var(--heading-tracking)",
                }}
              >
                {comfort.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "var(--text-muted)",
                  lineHeight: "var(--body-line-height)",
                }}
              >
                {comfort.description}
              </p>
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
            transition: "all var(--transition-duration) var(--transition-easing)",
          }}
        >
          Zobacz pełną specyfikację →
        </a>
      </div>
    </section>
  );
}
