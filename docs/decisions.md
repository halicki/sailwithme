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

### ADR-008: Angielska wersja przez `[locale]` dynamic segment, bez i18n libki

- **Data**: 2026-05-08
- **Status**: accepted
- **Kontekst**: Potrzeba udostępnienia landing page zagranicznym znajomym Piotra/Arka. ADR-001 świadomie odrzucał i18n, ale grupa docelowa się rozszerzyła.
- **Decyzja**: Native Next.js App Router `[locale]` dynamic segment z `generateStaticParams()` dla `pl` i `en`. Zero zewnętrznych bibliotek (`next-intl` / `i18next`). Content w dwóch plikach: `src/data/content.ts` (PL) i `src/data/content-en.ts` (EN), hardcoded UI labels w `src/data/ui-strings.ts`. Komponenty są props-based — `page.tsx` ładuje content/strings i przekazuje. Auto-detect języka z `Accept-Language` w `src/proxy.ts`.
- **Alternatywy rozważane**:
  - `next-intl` / `i18next` — overkill przy 2 językach i jednorazowym wydarzeniu, dodaje zależność.
  - Manualny `lang` prop drilling bez `[locale]` — działa, ale brzydki, każdy komponent musi importować ui-strings.
  - Druga strona `/en/page.tsx` jako kopia bez wspólnej infrastruktury — duplikacja kodu.
- **Konsekwencje**:
  - ✅ Zero deps, czysta separacja przez `params`, oba locale jako static SSG.
  - ✅ `generateMetadata` per locale, hreflang alternates, OG tags, JSON-LD — wszystko natywne.
  - ✅ Łatwo dodać 3. język w przyszłości.
  - ❌ Wszystkie komponenty trzeba było zrefactorować (props zamiast direct imports).
  - ❌ Server Action musi obsługiwać 2 zestawy komunikatów (hidden `locale` input).
- **Trigger do rewizji**: jeśli pojawią się 3+ języki — wtedy rozważyć `next-intl` z plikami JSON.

### ADR-007: Model jachtu elastyczny — 51.1 (cel) / 46.1 (fallback)

- **Data**: 2026-04-29
- **Status**: accepted
- **Kontekst**: Oferty z 5 firm charterowych. Oceanis 51.1 dostępny w PRIMA SAILING od 5 078 EUR. Ale finalna decyzja zależy od liczby uczestników — przy mniejszej grupie 46.1 wystarczy i jest tańszy (~3 726 EUR).
- **Decyzja**: Cel = Oceanis 51.1 (5 kabin, crew cabin). Fallback = Oceanis 46.1 (4 kabiny). W komunikacji publicznej (stories, landing) nie podajemy modelu jachtu, żeby nie blokować decyzji.
- **Alternatywy rozważane**:
  - KAVAS Oceanis 52 (6 300 EUR) — za drogi, odrzucony.
  - Hardcode 51.1 w komunikacji — ryzyko, że zmiana modelu = utrata wiarygodności.
- **Konsekwencje**:
  - ✅ Elastyczność cenowa — fallback na 46.1 obniża próg break-even.
  - ✅ Brak kłamstwa w komunikacji — mówimy "jacht", nie "Oceanis 51.1".
  - ❌ Landing page (`content.ts`) nadal wspomina Oceanis 51.1 — do aktualizacji po decyzji.
- **Trigger do rewizji**: moment rezerwacji jachtu (deadline: 05.05.2026).

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
