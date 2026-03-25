"use client";

import { useState } from "react";
import { submitApplication } from "@/app/actions";

export default function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Podaj poprawny adres email.");
      return;
    }

    const result = await submitApplication(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Coś poszło nie tak.");
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "var(--input-bg)",
    border: `var(--input-border-width) solid var(--border-subtle)`,
    color: "var(--text-primary)",
    borderRadius: "var(--input-radius)",
    padding: `var(--input-py) 1rem`,
    fontSize: "0.875rem",
  };

  if (status === "success") {
    return (
      <section
        id="formularz"
        className="relative"
        style={{ background: "var(--bg-secondary)", padding: "var(--section-py) 0" }}
      >
        <div className="max-w-md mx-auto px-6 text-center">
          <div
            className="w-16 h-16 border-2 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ borderColor: "var(--accent)" }}
          >
            <span className="text-2xl" style={{ color: "var(--accent)" }}>
              ✓
            </span>
          </div>
          <h2
            className="text-2xl mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--heading-weight)",
            }}
          >
            Dziękujemy!
          </h2>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Twoje zgłoszenie dotarło. Odpowiemy w ciągu 48h.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="formularz"
      className="relative"
      style={{ background: "var(--bg-secondary)", padding: "var(--section-py) 0" }}
    >
      <div className="max-w-md mx-auto px-6">
        <p
          className="uppercase mb-6"
          style={{
            color: "var(--accent)",
            fontSize: "var(--label-size)",
            letterSpacing: "var(--label-tracking)",
            fontWeight: "var(--label-weight)",
          }}
        >
          Zgłoszenie
        </p>

        <h2
          className="text-2xl sm:text-3xl mb-2"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: "var(--heading-weight)",
            letterSpacing: "var(--heading-tracking)",
            textTransform: "var(--heading-transform)" as React.CSSProperties["textTransform"],
          }}
        >
          Dołącz do załogi
        </h2>
        <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
          Odpowiemy w ciągu 48h. Miejsca ograniczone.
        </p>
        <p className="text-xs mb-8" style={{ color: "var(--text-muted)" }}>
          Koszt udziału podamy w odpowiedzi na zgłoszenie.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Imię"
            className="theme-input focus:outline-none"
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="theme-input focus:outline-none"
            style={inputStyle}
          />
          <input
            type="text"
            name="occupation"
            required
            placeholder="Kim jesteś / czym się zajmujesz?"
            className="theme-input focus:outline-none"
            style={inputStyle}
          />
          <textarea
            name="motivation"
            required
            placeholder="Dlaczego chcesz płynąć z nami?"
            rows={4}
            className="theme-input focus:outline-none resize-none"
            style={inputStyle}
          />

          {status === "error" && (
            <p className="text-red-400 text-xs">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="theme-btn mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: "var(--btn-bg)",
              color: "var(--btn-color)",
              border: `var(--btn-border-width) solid var(--btn-border-color)`,
              borderRadius: "var(--btn-radius)",
              padding: `var(--btn-py) var(--btn-px)`,
              fontSize: "var(--btn-font-size)",
              fontWeight: "var(--btn-weight)",
              letterSpacing: "var(--btn-tracking)",
              textTransform: "var(--btn-transform)" as React.CSSProperties["textTransform"],
            }}
          >
            {status === "loading" ? "Wysyłanie..." : "Wyślij zgłoszenie"}
          </button>
        </form>
      </div>
    </section>
  );
}
