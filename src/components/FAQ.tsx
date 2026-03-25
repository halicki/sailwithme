import { faqItems } from "@/data/content";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative"
      style={{ background: "var(--bg-primary)", padding: "var(--section-py) 0" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <p
          className="uppercase mb-6"
          style={{
            color: "var(--accent)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-tracking)",
            fontWeight: "var(--label-weight)",
          }}
        >
          FAQ
        </p>

        <h2
          className="text-2xl sm:text-4xl mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
          }}
        >
          Pytania i odpowiedzi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {faqItems.map((item) => (
            <div
              key={item.question}
              className="theme-faq-item pl-5"
              style={{ borderLeft: `var(--timeline-width) var(--timeline-style) var(--border-subtle)` }}
            >
              <p
                className="text-xs tracking-wider uppercase font-semibold mb-1"
                style={{ color: "var(--accent)" }}
              >
                {item.question}
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--text-muted)", lineHeight: "var(--body-line-height)" }}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
