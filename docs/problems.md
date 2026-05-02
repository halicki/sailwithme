# Otwarte problemy, ryzyka, dług techniczny

> Co aktualnie boli, co jest niedokończone, co stanowi ryzyko.
> Format: `[ ]` dla otwartego, `[x]` dla zamkniętego.
> Zasada: jeśli problem żyje >2 tygodni — przeczytaj go ponownie i zdecyduj, czy jeszcze ważny.

---

## Aktywne problemy

### 🔴 Krytyczne (blokują postęp)

- [ ] **Jacht nie jest jeszcze zarezerwowany** — *dodane: 2026-04-28, zaktualizowane: 2026-04-29*
  - **Kontekst**: Zapytania wysłane 25.04 do 6 firm. 5 odpowiedziało (KAVAS, ISTION, DANIELIS, NAVIGARE, PRIMA SAILING), Pitter — mail nie dotarł.
  - **Najlepsza oferta na Oceanis 51.1**: PRIMA SAILING — 3 jachty od 5 078 EUR. KAVAS Oceanis 52 (6 300 EUR) odrzucony jako za drogi (ADR-007).
  - **Uwaga**: Opcja NAVIGARE wygasła 28.04.
  - **Brakujące dane od PRIMA**: kaucja, co w cenie (pościel, cleaning, cruising tax), warunki anulacji.
  - **Następny krok**: Arek dopytuje PRIMA o brakujące dane → decyzja o firmie/modelu → rezerwacja. Deadline: 05.05.

- [ ] **Tylko 1 z 8 miejsc sprzedanych** — *dodane: 2026-04-28*
  - **Kontekst**: Mateusz zapisany. Deadline na domknięcie reszty: ~25.05.2026 (~4 tygodnie).
  - **Próbowane**: landing live, SEO meta + GA + favicon dorobione, OG preview ogarnięty.
  - **Następny krok**: aktywna kampania Insta załogi (Arek/Piotr), bezpośrednie polecenia. Bez tego landing sam nie sprzeda.

### 🟡 Wysokiej wagi (psują doświadczenie / spowalniają)

- [ ] **Brak banera cookies / consent** — *dodane: 2026-04-28*
  - **Kontekst**: Mamy GA4 (ADR-005), więc formalnie potrzebny consent (RODO).
  - **Próbowane**: nic.
  - **Następny krok**: zdecydować — minimalny consent banner (CookieYes / własny) vs. wyłączenie GA do czasu jego wdrożenia. Małe ryzyko egzekucji przy tej skali, ale higiena.

- [ ] **Formularz: brak rate-limit i ochrony przed botami** — *audyt: 2026-04-28*
  - **Stan**: walidacja istnieje (trim, regex email, length limits, required) — patrz `src/app/actions.ts`. Brak: rate-limit, honeypot, captcha/Turnstile.
  - **Kontekst**: anon key Supabase jest publiczny, formularz osiągalny przez kogokolwiek. Mała widoczność strony = niskie ryzyko obecnie, ale spam pojedynczego bota wystarczy żeby zaśmiecić tabelę.
  - **Następny krok**: dorzucić honeypot (najprostsze, 5 min) + zweryfikować RLS w dashboardzie Supabase. Captcha dopiero jeśli pojawi się realny spam.

- [ ] **RLS na tabeli `applications` — niezweryfikowane** — *dodane: 2026-04-28*
  - **Kontekst**: `src/lib/supabase.ts` używa anon key. Bez RLS policy `INSERT-only` (i braku SELECT dla anon) każdy z keyem (publicznym!) może czytać zgłoszenia.
  - **Próbowane**: brak migracji w repo (`supabase/` nie istnieje), więc nie da się tego sprawdzić z kodu.
  - **Następny krok**: Arek wchodzi w Supabase dashboard → tabela `applications` → Authentication → Policies. Powinno być: `INSERT` dozwolone dla `anon`, `SELECT/UPDATE/DELETE` zablokowane.

### 🟢 Średnie (do zaadresowania, ale nie palące)

- [ ] **Brak testów** — *dodane: 2026-04-28*
  - Świadoma decyzja przy tej skali (one-pager, jednorazowe wydarzenie). Zostawiamy jako fakt, nie do "naprawy" przed czerwcem.

- [ ] **Treść w `content.ts` rozrosła się** — *dodane: 2026-04-28*
  - Plik jest teraz jednym wielkim eksportem. Jeśli będziemy go często edytować w kilka osób, warto rozbić per-sekcja. Niepilne.

- [ ] **Brak zdjęć na stronie** — *dodane: 2026-04-29 (z TODO.md)*
  - Brak zdjęć przystanków (Egina, Poros, Hydra, Epidauros), jachtu, morza, oddech, freediving. Landing pusty wizualnie.
  - Następny krok: Arek dostarcza zdjęcia, dodajemy do komponentów.

- [ ] **Cena nie jest jeszcze na stronie** — *dodane: 2026-04-29 (z TODO.md)*
  - Czekamy na finalizację charteru (wybór jachtu/firmy). Po zamknięciu ceny → dodać do landing page.

- [ ] **FAQ do rozszerzenia** — *dodane: 2026-04-29 (z TODO.md)*
  - Pytania o cenę, pakowanie, poziom trudności. Do uzupełnienia po domknięciu organizacji.

- [ ] **Domena oddechiwiatr.pl — do kupienia i podpięcia** — *dodane: 2026-04-29 (z TODO.md)*
  - Link w kampanii Insta = oddechiwiatr.pl. Musi działać przed startem kampanii social.

- [ ] **Facebook/Google pixel** — *dodane: 2026-04-29 (z TODO.md)*
  - Warunkowe: dopiero gdy rusza płatna reklama. Teraz niepilne.

- [ ] **Model kaucji (CDW vs pełna)** — *dodane: 2026-04-29 (z TODO.md)*
  - Zależy od wybranej firmy charterowej. KAVAS: 3 500 EUR deposit. PRIMA/DANIELIS: 600 EUR z damage waiver. Wpływa na komunikację z uczestnikami.

---

## Ryzyka

> Rzeczy, które się jeszcze NIE wydarzyły, ale mogą.

- **Period B w KAVAS zamiast C**
  - **Opis**: Późny czerwiec może wpaść w droższy Period B → różnica ~1 900 EUR (≈8 200 PLN) na charterze, co psuje kalkulację ceny 5 900 zł.
  - **Prawdopodobieństwo**: średnie.
  - **Impact**: średni → wysoki (zjada marżę albo wymusza podniesienie ceny w trakcie sprzedaży).
  - **Mitygacja**: szybkie potwierdzenie z KAVAS; jeśli Period B — przeliczyć cenę PRZED publikacją kampanii sprzedażowej.
  - **Sygnały wczesnego ostrzegania**: brak odpowiedzi z KAVAS >5 dni roboczych.

- **Niedomknięcie 8 miejsc do 25.05**
  - **Opis**: Jeśli zatrzymamy się na 4–5 osobach, jacht jest nieopłacalny.
  - **Prawdopodobieństwo**: średnie.
  - **Impact**: katastrofalny dla edycji 2026.
  - **Mitygacja**: ustalić minimalny próg osób PRZED wpłatą zaliczki KAVAS; mieć plan B (mniejszy jacht, niższy próg) i decyzyjny deadline.
  - **Sygnały**: <50% miejsc na 14 dni przed deadlinem zaliczki.

- **Pogoda / warunki na morzu w trakcie rejsu**
  - **Opis**: Meltemi / sztorm może wymusić zmianę trasy.
  - **Prawdopodobieństwo**: niskie–średnie (czerwiec łagodniejszy niż lipiec/sierpień).
  - **Impact**: średni (frustracja uczestników), niski (bezpieczeństwo).
  - **Mitygacja**: w komunikacji z uczestnikami od początku zaznaczamy, że trasa jest orientacyjna; doświadczony skipper.

- **Wyciek anon key Supabase / spam zgłoszeń**
  - **Opis**: Publiczny anon key + brak rate-limit = potencjalny spam tabeli `applications`.
  - **Prawdopodobieństwo**: niskie (mała widoczność strony).
  - **Impact**: niski (łatwo wyczyścić), ale brzydki.
  - **Mitygacja**: RLS policy + Zod walidacja w Server Action + ewentualnie honeypot.

---

## Dług techniczny (świadomy)

> "Tymczasowe" rozwiązania, o których wiemy, że są skrótami.
> Każdy wpis ma mieć **trigger spłaty** — bez niego dług staje się tradycją.

- [ ] **Brak environments (staging vs prod)** — push na `main` = live.
  - **Dlaczego skrót**: ADR-003, świadoma decyzja przy tej skali.
  - **Koszt utrzymania**: zerowy dopóki landing nie ma krytycznych funkcji.
  - **Trigger spłaty**: jeśli pojawi się druga edycja albo płatności online.

- [ ] **Brak testów end-to-end formularza zgłoszeniowego**
  - **Dlaczego skrót**: jeden formularz, manualnie weryfikowany.
  - **Koszt utrzymania**: cichy bug w submit = utrata zgłoszenia. Akceptowalne ryzyko, ale obecne.
  - **Trigger spłaty**: jeśli formularz urośnie (więcej pól, walidacja warunkowa) albo edycja 2027.

---

## Pytania otwarte

- [x] ~~**Jaki minimalny próg osób uruchamia rejs?**~~ — rozwiązane 2026-04-28: reguła = **break-even przychodów względem kosztów wybranego jachtu**, nie stała liczba. Konkretna liczba osób zależy od finalnej decyzji jachtu (51.1 vs 46.1, KAVAS vs inna platforma, Period C vs B). Tabele scenariuszy w `koszty-rejs-2026.md`. Decyzja o uruchomieniu/odwołaniu zapada przy domknięciu sprzedaży (~25.05.2026).

- [ ] **Czy Mateuszowi gwarantujemy zwrot, jeśli nie zbierzemy minimum?** — kto odpowiada: Arek (decyzja).
  - Dlaczego ważne: warunki uczestnictwa muszą być spisane, zanim wezmę zaliczki od kolejnych osób.
  - Następny krok: spisać proste "warunki uczestnictwa" (1 strona) — Faza 1 timeline.

---

## Zamknięte (ostatnie 30 dni)

- [x] ~~Manifest 403 na produkcji~~ — zamknięte 2026-04-27: serwowanie statyczne + `use-credentials` (ADR-006, commit `bd1a597`).
- [x] ~~GA event nie strzelał~~ — zamknięte 2026-04-27: trim env + JSON.stringify config ID (`51c8c4e`, `2ace8da`).
- [x] ~~Brakujące SEO meta + favicon~~ — zamknięte 2026-04-27 (`1f022e3`).
- [x] ~~OG preview za duży / krótkie meta~~ — zamknięte 2026-04-26 (`44e47ca`).

---

## Archiwum

> Historyczne, ale czasem warto wrócić — szczególnie jeśli problem powraca.

(brak)
