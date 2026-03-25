"use client";

import { useState } from "react";
import Image from "next/image";
import type { YachtImage } from "@/data/content";

export default function YachtGallery({ images }: { images: YachtImage[] }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      {/* Main image */}
      <div
        className="relative w-full aspect-[16/9] mb-3 overflow-hidden"
        style={{
          borderRadius: "var(--card-radius)",
          border: "var(--card-border-width) solid var(--border-subtle)",
          boxShadow: "var(--card-shadow)",
        }}
      >
        <Image
          src={images[active].src}
          alt={images[active].alt}
          fill
          className="object-cover transition-opacity duration-500"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />
        {images[active].caption && (
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{
              background:
                "linear-gradient(to top, rgba(10,21,32,0.8), transparent)",
            }}
          >
            <p
              className="text-xs tracking-wide"
              style={{ color: "var(--text-secondary)" }}
            >
              {images[active].caption}
            </p>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className="flex-shrink-0 relative w-28 h-20 sm:w-32 sm:h-22 overflow-hidden cursor-pointer"
            style={{
              borderRadius: "var(--card-radius)",
              border: `2px solid ${i === active ? "var(--accent)" : "var(--border-subtle)"}`,
              opacity: i === active ? 1 : 0.5,
              transition: `all var(--transition-duration) var(--transition-easing)`,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="112px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
