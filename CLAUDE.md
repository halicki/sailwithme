# Oddech i Wiatr

> Landing page (Polish, one-pager) dla curated sailing retreat w Grecji, 20–27 czerwca 2026. Formularz aplikacyjny zapisuje do Supabase.

---

## Kontekst głębszy

Przed pracą przeczytaj:
- @docs/context.md — czym jest produkt, użytkownicy, model biznesowy
- @docs/decisions.md — log decyzji architektonicznych (ADR)
- @docs/problems.md — otwarte problemy, ryzyka, dług techniczny
- @docs/superpowers/specs/2026-03-16-oddech-i-wiatr-landing-page-design.md — pełen design spec

Jeśli któryś nie istnieje albo wygląda na stary — **zasygnalizuj to przed pracą**.

---

## Stack

- **Frontend**: Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- **Backend**: Next.js Server Actions
- **DB**: Supabase (Postgres) — tabela `applications`
- **Hosting**: Vercel (auto-deploy z GitHub `main`)
- **Fonts**: Inter (sans) + Playfair Display (display) via `next/font/google`
- **Analytics**: Google Analytics (`NEXT_PUBLIC_GA_ID`)

## Konwencje

- TypeScript, **bez `any`** (jak musisz — komentarz dlaczego).
- Server Components domyślnie, Client Components tylko kiedy potrzeba interakcji.
- Sekrety NIGDY w repo — tylko `.env.local` (gitignored) lub envs Vercel.
- Naming: `kebab-case` dla plików, `PascalCase` dla komponentów React, `camelCase` dla funkcji.
- Komentarze wyjaśniają **DLACZEGO**, nie CO.
- Język: cała treść user-facing po polsku, kod (zmienne, komentarze) po angielsku.

## Czerwone linie (NIE ruszaj bez wyraźnej zgody)

- **Termin rejsu: 20–27 czerwca 2026 — JEDYNY.** Nigdy nie proponować innych dat, nie sugerować "flexibility", nie pytać o przesunięcie tygodnia.
- **Komunikacja z brokerami / formularzami: liczba osób jako total** (np. "10 osób" / "11 osób"). NIE rozbijać na guests + crew.
- **Email Arka: `halicki.arkadiusz@gmail.com`.** Nie wymyślać innych adresów (np. `arek@oddechiwiatr.life` — taki nie istnieje).
- **W gotowych draftach (maile, formularze) nie wstawiać placeholderów** typu `[Twój numer]` / `[Your name]` — albo realne dane, albo pominąć linijkę.
- Schemat tabeli `applications` w Supabase — zmiany przez review.
- Sekrety Supabase / GA — nawet w plikach przykładowych.

## Komendy

```bash
npm run dev      # local dev (localhost:3000)
npm run build    # production build
npm run lint     # ESLint (flat config, Next.js preset)
```

Brak test frameworka.

## Deployment

Vercel auto-deploy z GitHub. Aby wdrożyć: commit + push na `main`. **NIE używać `vercel --prod` CLI.**

## Architektura

Next.js 16 App Router, single-page app. Cały kod w `src/`.

- **`src/app/page.tsx`** — składa sekcje w kolejności: Hero → Manifesto → ForWhom → Program → Yacht → Crew → ApplicationForm → FAQ → Footer
- **`src/components/`** — jeden komponent per sekcja landing page
- **`src/data/content.ts`** — cała treść (copy, bio załogi, FAQ, dni programu). Edytuj treść tu, nie w komponentach.
- **`src/app/actions.ts`** — Server Action: submit formularza → insert do Supabase `applications`
- **`src/lib/supabase.ts`** — klient Supabase (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- **`src/app/globals.css`** — design tokeny (CSS custom properties): `--bg-primary: #0c1929`, `--accent: #8eb8d4`. Reusable klasy: `.theme-card`, `.theme-input`, `.theme-btn`, `.theme-divider` w `@layer components`.

## Specyfika tego projektu

- Polski one-pager — bez routingu, bez i18n, bez auth.
- Formularz to jedyny mutating endpoint (Server Action → Supabase insert).
- Treści edytujemy w `src/data/content.ts`, **nie** w komponentach.
- Deploy = `git push origin main`. Vercel reszta sama.

---

## Hygiene

- Po każdej sesji uruchom `/wrap-up` i przejrzyj proponowane diffy do `docs/`.
- Przed nową sesją uruchom `/briefing` — Claude zrobi sobie sam onboarding.
- Trzymaj ten plik **poniżej 200 linii**. Jeśli rośnie — przenieś szczegóły do `docs/`.
