export default function Footer() {
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
        Oddech i Wiatr © 2026
      </p>
    </footer>
  );
}
