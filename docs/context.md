# Kontekst produktu

> Ten dokument odpowiada na pytanie: **PO CO to budujemy?**
> Aktualizuj tylko, kiedy zmienia się coś trwałego — nie po każdej sesji.

---

## Czym jest Oddech i Wiatr

Curated sailing retreat w Grecji (Zatoka Sarońska, 20–27 czerwca 2026): tydzień na jachcie łączący żeglowanie, freediving i breathwork. Mała grupa (8 uczestników + 3 osoby załogi), polskojęzyczna. Nie jest to ani all-inclusive, ani impreza — pozycjonujemy się jako "rejs dla ludzi, którzy chcą naprawdę popłynąć", z konkretną zawartością merytoryczną (freediving z mistrzem Polski, sesje oddechowe).

Repozytorium = jednostronicowy landing po polsku z formularzem zgłoszeniowym (Supabase). Cała wartość biznesowa: domknąć 7 wolnych miejsc do końca maja 2026.

## Etap

- **Status**: pre-launch sprzedaż — landing live, formularz działa, 1 osoba zapisana (Mateusz).
- **Termin produkcyjny**: 20–27 czerwca 2026 (jedyny — patrz `CLAUDE.md`).
- **Wolne miejsca**: 7 / 8 (stan: 2026-04-28).
- **Deadline sprzedaży**: ~25.05.2026 (zaliczki + ostateczna decyzja jachtu — patrz `timeline-rejs-2026.md`).
- **Model finansowy**: jednorazowe wydarzenie, samofinansujące się przy progu osób; nie SaaS.
- **Czas Arka**: projekt poboczny — landing utrzymywać prosto, większość energii na sprzedaż i logistykę.

## Użytkownicy docelowi

### Persona 1: "Świadomy uczestnik" (główna)

- **Kim**: 30–45 lat, Polska, ma wolne 6 000 zł na tydzień + lot, wartości: ruch, woda, świadomy oddech, mała grupa.
- **Główny ból**: nie chce ani imprezowego rejsu z boattrip, ani drogiego all-inclusive resortu. Szuka czegoś z treścią, prowadzonego przez ludzi, którym ufa. Próbuje nowych rzeczy.
- **Co próbowali**: rejsy "na szyldzie", retreaty jogowe na lądzie, festiwale.
- **Czego oczekuje**: dobrze poprowadzony tydzień, spokojni ludzie, prawdziwe żeglowanie, treść (freediving / breathwork), bez napinki.
- **Gdzie są**: Instagram załogi (Arek, Piotr, Kamilla), word-of-mouth, polska scena freedivingowa/żeglarska.

### Persona 2: "Ktoś z sieci załogi"

- **Kim**: znajomi/followers Piotra (freediving) lub Kamilli (breathwork) — już im ufają.
- **Główny ból**: chcą doświadczyć retreatu prowadzonego przez kogoś, kogo śledzą.
- **Kanał akwizycji**: bezpośrednie polecenia załogi i ich Instagram.

## Model biznesowy

- **Cena standardowa**: **5 900 PLN / osoba** (bez lotu). Spójne z copy w `src/data/content.ts`.
- **Wyjątki cenowe**: Mateusz (1. uczestnik) — 4 999 PLN, zaliczka 1000 PLN wpłacona. Dopuszczamy jeszcze **1–2 wyjątki** (early bird / polecenia załogi). Reszta = pełna cena.
- **Co obejmuje**: miejsce na jachcie, opieka skippera, zajęcia freediving, sesje oddechowe, opłaty portowe, paliwo, podstawowy prowiant.
- **Co NIE obejmuje**: lot (~450–700 PLN), kaucja zwrotna (~1 775 PLN/os), część posiłków na lądzie, ubezpieczenie, wydatki własne.
- **Próg uruchomienia**: rejs leci, gdy przychód od uczestników ≥ koszty wybranego jachtu (Oceanis 51.1 vs 46.1, KAVAS vs inna platforma, Period C vs B). **Nie hardcode'ujemy liczby osób** — zależy od finalnej decyzji jachtu. Kalkulacja scenariuszy: `koszty-rejs-2026.md`. Decyzja o uruchomieniu/odwołaniu zapada przy domknięciu sprzedaży (~25.05.2026).
- **Koszty pokryte przez organizatora**: Piotr i Kamilla (loty + jedzenie).
- **Główny kanał akwizycji**: Instagram załogi + polecenia. SEO/paid nie planowane (jednorazowe wydarzenie, krótkie okno).

## Ograniczenia

- **Czasowe**: ~4 tygodnie na sprzedaż reszty miejsc; Arek pracuje nad tym wieczorami / weekendami.
- **Techniczne**: landing musi działać na mobile (większość ruchu z Insta), formularz musi po prostu działać — żadnych zaawansowanych funkcji.
- **Komunikacyjne**: cała treść po polsku, bez i18n.
- **Twarde**: termin 20–27.06.2026 jest jedyny, brak alternatywnych terminów.

## Definicja sukcesu

Stan na **27 czerwca 2026** (koniec rejsu):

- ✅ 8 miejsc sprzedanych do 25.05.2026.
- ✅ Rejs zrealizowany bez incydentów bezpieczeństwa.
- ✅ Uczestnicy wracają z odczuciem "warto było" (jakościowy feedback po rejsie).
- ✅ Bilansuje się finansowo (nie dopłacamy z prywatnych pieniędzy).

## Co świadomie ODRZUCAMY

- ❌ **Inne terminy / "elastyczność daty"** — jacht jest na konkretny tydzień, nie negocjujemy.
- ❌ **Rozbijanie ceny na guests + crew** w komunikacji z brokerami — zawsze total (10/11 osób).
- ❌ **Wielojęzyczny landing** — projekt jest polski, dla Polaków, koszt i18n nieuzasadniony.
- ❌ **System rezerwacji online z płatnością** — formularz → manualna rozmowa → zaliczka przelewem. Mała skala, automatyzacja niepotrzebna.
- ❌ **Auth / konta użytkownika** — to nie SaaS.
- ❌ **A/B testy, eksperymenty CRO** — za mała próba, lepiej iterować po feedbacku z 1:1.
- ❌ **Powtarzalność / "co roku"** — póki nie mamy pierwszego rejsu za sobą, nie obiecujemy edycji 2027.

## Wartości produktu (nie do ruszenia)

- **Uczciwa komunikacja na landingu**: cena widoczna, co obejmuje / nie obejmuje wprost, żadnych dark patterns.
- **Mała grupa, prawdziwa załoga**: nie skalujemy w górę "bo się sprzeda".
- **Bezpieczeństwo > program**: jeśli pogoda dyktuje zmianę trasy, zmieniamy trasę.
- **Realne dane w komunikacji**: w mailach/draftach nigdy placeholderów typu `[Twój numer]` — albo realna wartość, albo pomijamy.
