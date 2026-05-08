import type { UIStrings } from "@/data/ui-strings";

export default function Footer({ t }: { t: UIStrings["footer"] }) {
  return (
    <footer
      className="py-8"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="theme-divider mx-auto mb-6" />
      <p
        className="text-center text-xs tracking-wider"
        style={{ color: "var(--text-muted)", opacity: 0.5 }}
      >
        {t.copyright}
      </p>
    </footer>
  );
}
