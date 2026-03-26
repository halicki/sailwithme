"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Rejs", href: "#program" },
  { label: "Trasa", href: "#trasa" },
  { label: "Jacht", href: "#jacht" },
  { label: "Załoga", href: "#zaloga" },
  { label: "Dołącz", href: "#formularz" },
];

const linkStyle = {
  fontSize: "var(--label-size)",
  letterSpacing: "var(--label-tracking)",
  color: "var(--accent)",
  textDecoration: "none",
} as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-3 px-4"
      style={{
        background: scrolled ? "var(--bg-primary)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transform: scrolled ? "translateY(0)" : "translateY(-100%)",
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
        transition: `transform 0.4s var(--transition-easing), opacity 0.4s var(--transition-easing), background 0.4s var(--transition-easing), border-color 0.4s var(--transition-easing)`,
      }}
    >
      {/* Desktop links */}
      <div className="hidden sm:flex items-center justify-center gap-8">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="uppercase" style={linkStyle}>
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="flex sm:hidden items-center justify-end">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          style={{ color: "var(--accent)" }}
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--accent)",
              transform: menuOpen ? "rotate(45deg) translateY(3.5px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--accent)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--accent)",
              transform: menuOpen ? "rotate(-45deg) translateY(-3.5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden flex flex-col items-center gap-6 py-6"
          style={{ background: "var(--bg-primary)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="uppercase"
              style={linkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
