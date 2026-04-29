# Decyzje architektoniczne (ADR log)

> Log decyzji, które warto pamiętać. Format wzorowany na Architecture Decision Records.
> **Najnowsze NA GÓRZE.**
> Zasada: jeśli kiedyś wrócimy do tematu i zapytamy "dlaczego tak?", odpowiedź ma być TUTAJ.

---

## Template (skopiuj przy nowej decyzji)

```
### ADR-XXX: [Krótki opis decyzji]

- **Data**: YYYY-MM-DD
- **Status**: proposed / accepted / superseded by ADR-YYY / deprecated
- **Kontekst**: jaka była sytuacja, jaki problem do rozwiązania
- **Decyzja**: co konkretnie wybraliśmy
- **Alternatywy rozważane**: co innego było na stole, dlaczego nie
- **Konsekwencje**: co to oznacza długoterminowo
  - ✅ Plusy
  - ❌ Minusy / koszty
- **Trigger do rewizji**: kiedy warto wrócić do tej decyzji
```

---

## Aktywne decyzje

### ADR-006: Manifest serwowany jako statyczny plik z `use-credentials`

- **Data**: 2026-04-27
- **Status**: accepted
- **Kontekst**: `manifest.webmanifest` zwracał 403 na produkcji (Vercel) — przeglądarka pobierała go bez ciasteczek, a route handler wymagał kontekstu sesji.
- **Decyzja**: serwować manifest jako statyczny plik w `public/`, w `<link rel="manifest">` ustawić `crossorigin="use-credentials"`.
- **Alternatywy**:
  - Route handler z własnym CORS/cache — więcej kodu, ten sam efekt.
  - Pominąć manifest — strata PWA-friendly metadanych.
- **Konsekwencje**:
  - ✅ Prostsze, mniej kodu, działa na każdej platformie hostingu.
  - ❌ Brak dynamicznej generacji manifestu (nieistotne — treść statyczna).
- **Trigger do rewizji**: jeśli kiedyś będziemy potrzebować dynamicznych theme-color / iconów per-user.

### ADR-005: Google Analytics jako jedyny analytics

- **Data**: 2026-04-27
- **Status**: accepted
- **Kontekst**: Potrzebujemy podstawowych danych o ruchu z Instagrama (skąd przychodzi, ile ludzi dochodzi do formularza).
- **Decyzja**: GA4 z `NEXT_PUBLIC_GA_ID` w env Vercel.
- **Alternatywy**:
  - Plausible / Fathom — privacy-friendly, ale płatne; przy jednorazowym wydarzeniu nie warto.
  - Vercel Analytics — proste, ale uboższe filtrowanie kampanii.
  - Brak analytics — zbyt mało sygnału co działa w sprzedaży.
- **Konsekwencje**:
  - ✅ Darmowe, dobrze znane, wystarczy do tej skali.
  - ❌ Wymaga banera cookies (brakuje — patrz `problems.md`).
- **Trigger do rewizji**: edycja 2027 (jeśli powstanie) — wtedy rozważyć Plausible.

### ADR-004: Brak systemu płatności online — przelew po manualnej rozmowie

- **Data**: 2026-03-16
- **Status**: accepted
- **Kontekst**: 8 miejsc do sprzedania, każde za 5 900 zł. Pokusa: Stripe / podpięcie płatności do formularza.
- **Decyzja**: Formularz zbiera zgłoszenie → Arek dzwoni / pisze → przelew na konto + zaliczka.
- **Alternatywy**:
  - Stripe Checkout — overhead konfiguracji, KYC, fees ~2.5% ≈ 1 200 zł na całości.
  - Tpay / Przelewy24 — to samo, polskie.
- **Konsekwencje**:
  - ✅ Każdy uczestnik przechodzi przez rozmowę z Arkiem — filtr jakości grupy.
  - ✅ 0 fees, 0 integracji.
  - ❌ Wąskie gardło na Arku — przy 8 miejscach OK, przy 80 nie.
- **Trigger do rewizji**: jeśli wracamy z edycją 2027 i sprzedaż >20 miejsc.

### ADR-003: Vercel auto-deploy z `main`, brak `vercel --prod` CLI

- **Data**: 2026-03-16
- **Status**: accepted
- **Kontekst**: Pojedynczy maintainer, prosty landing, brak staging environment poza Vercel preview deployments.
- **Decyzja**: Każdy push na `main` = produkcja. Branche feature → preview URL automatycznie. Nie używamy `vercel --prod` z lokala.
- **Alternatywy**:
  - Manualny `vercel --prod` — więcej kontroli, ale ryzyko desyncu między CI a lokalem.
  - Branch `production` osobny od `main` — overkill dla one-pager.
- **Konsekwencje**:
  - ✅ Jedno źródło prawdy: `main` = co jest live.
  - ✅ Każdy commit testowalny przez preview URL.
  - ❌ Brak gate'a — bug pushed = bug live. Akceptowalne przy tej skali ruchu.
- **Trigger do rewizji**: jeśli kiedyś dorobimy płatności online albo dane wrażliwe poza zgłoszeniami.

### ADR-002: Supabase + Server Action zamiast pełnego backendu / API

- **Data**: 2026-03-16
- **Status**: accepted
- **Kontekst**: Jeden mutating endpoint w całej aplikacji: zapis zgłoszenia z formularza.
- **Decyzja**: Server Action (`src/app/actions.ts`) → bezpośredni insert do Supabase Postgres (tabela `applications`) używając `NEXT_PUBLIC_SUPABASE_ANON_KEY` i RLS.
- **Alternatywy**:
  - Route Handler (`/api/apply`) — niepotrzebna warstwa.
  - Custom backend (Hono / Express) — totalny overkill.
  - Email-only (Resend / Formspree) — brak strukturalnych danych do follow-upu.
- **Konsekwencje**:
  - ✅ Zero boilerplate, type-safe end-to-end.
  - ✅ Dane w SQL — łatwo eksportować / sortować zgłoszenia.
  - ❌ RLS musi być dobrze skonfigurowane — anon key jest publiczny.
- **Trigger do rewizji**: jeśli kiedyś dodamy auth / dashboard dla uczestników.

### ADR-001: Next.js 16 App Router + Tailwind v4, polski one-pager bez i18n

- **Data**: 2026-03-16
- **Status**: accepted
- **Kontekst**: Landing page dla jednorazowego polskojęzycznego wydarzenia. Cel: szybko, dobrze wygląda, mobile-first.
- **Decyzja**: Next.js 16 (App Router) + TypeScript + Tailwind v4 + design tokeny w CSS custom properties (`globals.css`). Cała treść w `src/data/content.ts`. Bez i18n.
- **Alternatywy**:
  - Astro / czysty HTML — szybciej buduje, ale Server Action z formularzem łatwiejszy w Next.
  - Framer / Webflow — szybko, ale lock-in i miesięczne koszty hostingu.
  - WordPress — nie ten zespół, nie ta epoka.
- **Konsekwencje**:
  - ✅ Vercel zero-config deploy.
  - ✅ Wszystka treść w jednym pliku — copy edits = jeden PR.
  - ❌ Cały framework dla one-pager to overkill, ale zero-cost na Vercelu.
- **Trigger do rewizji**: jeśli landing zostanie przebudowany pod edycję 2027 z większą funkcjonalnością.

---

## Superseded / Deprecated

> Decyzje, które zostały zastąpione. Trzymaj dla kontekstu historycznego.

(brak)
