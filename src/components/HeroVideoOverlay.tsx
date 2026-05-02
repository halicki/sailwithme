"use client";

import { useEffect, useState } from "react";

export default function HeroVideoOverlay() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = document.querySelector<HTMLVideoElement>(
      "[data-hero-video]"
    );
    if (!video) return;

    // Autoplay may have already succeeded before hydration
    if (!video.paused) {
      setIsPlaying(true);
      return;
    }

    const handlePlaying = () => setIsPlaying(true);
    video.addEventListener("playing", handlePlaying);

    // Imperatively ensure muted + try play
    video.muted = true;
    video.play().catch(() => {});

    // Fallback: first user gesture triggers play on mobile
    const tryPlay = () => {
      video.muted = true;
      video.play().catch(() => {});
    };
    document.addEventListener("touchstart", tryPlay, { once: true });
    document.addEventListener("scroll", tryPlay, { once: true });

    return () => {
      video.removeEventListener("playing", handlePlaying);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
  }, []);

  return (
    <img
      src="/images/hero-poster.jpg"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      style={{
        opacity: isPlaying ? 0 : 1,
        pointerEvents: "none",
      }}
    />
  );
}
