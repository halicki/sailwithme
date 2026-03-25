# Oddech i Wiatr — Landing Page Design Spec

## Kontekst

Arek organizuje cykliczny rejs żeglarski "Oddech i Wiatr" — transformacyjną podróż po Zatoce Sarońskiej (Grecja). Pierwszy rejs: 20–27 czerwca 2026, 8–10 uczestników + stała załoga. Strona ma służyć jako wizytówka rejsu i zbierać zgłoszenia od zainteresowanych. Uczestnicy są selekcjonowani — to nie jest open booking.

## Koncept produktu

**Pozycjonowanie:** Transformacyjna podróż żeglarska — miks retreatu, rozwoju osobistego i ekspedycji. Każdy dzień ma inny charakter (żeglowanie, freediving, breathwork, wyzwania). Narracja "podróży wojownika" — od spotkania do transformacji.

**Wyróżniki:**
- Kuratowana grupa (przedsiębiorcy, twórcy, liderzy)
- Piotr Błaszczak (@wobliczuwody) — reprezentant Polski we freedivingu — lekcje freedivingu
- Kamila Kowalczyk (@respire_kamilla_kowalczyk) — breathwork / sesje oddechowe
- Arek Halicki (@arek.halicki) — skipper & organizator
- Jacht: [Beneteau Oceanis 52](https://www.beneteau.com/oceanis/oceanis-52)
- Aktywne uczestnictwo w żeglowaniu (nie cruise)
- Brak klimatu imprezowego/alkoholowego

## Stack techniczny

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Baza danych:** Supabase (free tier) — tabela zgłoszeń
- **Hosting:** Vercel (auto-deploy z GitHub)
- **Formularz:** Server Actions (Next.js) → Supabase insert

## Styl wizualny: Wojownik / Bold

- **Paleta:** Ciemne tło (#0d0d0d, #1a1a2e, #111), złoty akcent (#e6a032), biały tekst
- **Typografia:** Sans-serif, bold/uppercase dla nagłówków, mocne kontrasy
- **Klimat:** Intensywny, rzuca wyzwanie, premium ale surowy
- **Inspiracja:** Podróż wojownika — ciemność + złoto

## Struktura strony (one-pager, optymalizacja konwersji)

### Sekcja 1: Hero
- Duży tytuł: ODDECH i WIATR
- Podtytuł: "Rejs transformacyjny · Grecja 2026"
- Data: 20–27 Czerwca · Zatoka Sarońska · 7 dni
- CTA: "Dołącz do załogi ↓" (scroll do formularza)

### Sekcja 2: Manifesto
- Nagłówek: "To nie jest zwykły rejs."
- Krótki, mocny tekst opisujący czym jest i czym NIE jest ten rejs
- Kończy się: "Nie szukamy pasażerów. Szukamy załogi."

### Sekcja 3: Dla kogo (samoselekcja)
- Nagłówek: "Czy to jest dla Ciebie?"
- 4 cechy idealnego uczestnika w gridzie
- Info: "8–10 miejsc. Każda osoba jest wybierana."

### Sekcja 4: Program / 7 dni
- Nagłówek: "7 dni. 7 wyzwań."
- Timeline z numerowanymi dniami (01–07)
- Każdy dzień: nazwa + krótki opis
- Gradient opacity od złotego do ciemnego i z powrotem

### Sekcja 5: Jacht

- Nagłówek: "Nasz dom na 7 dni"
- Beneteau Oceanis 52 — zdjęcie/render jachtu, kluczowe parametry
- Link do specyfikacji: [Beneteau Oceanis 52](https://www.beneteau.com/oceanis/oceanis-52)

### Sekcja 6: Załoga (rozbudowane profile) + "Ty?"

- Nagłówek: "Kto stoi za sterami"
- **Dedykowana, pełna sekcja per osoba** (nie małe karty):
  - **Piotr Błaszczak** — freediving, reprezentant Polski, IG: @wobliczuwody, zdjęcie, opis co wnosi
  - **Kamila Kowalczyk** — breathwork / sesje oddechowe, IG: @respire_kamilla_kowalczyk, zdjęcie, opis
  - **Arek Halicki** — skipper & organizator, IG: @arek.halicki, zdjęcie, opis
- **Ostatni element: "Ty?"** — dashed border, złoty akcent, CTA "Dołącz →"
- Kliknięcie "Ty?" scrolluje do formularza

### Sekcja 7: Formularz zgłoszeniowy
- Nagłówek: "Dołącz do załogi"
- Pola: Imię, Email, Kim jesteś / czym się zajmujesz?, Dlaczego chcesz płynąć z nami?
- Przycisk: "Wyślij zgłoszenie"
- Info: "Odpowiemy w ciągu 48h"
- Po wysłaniu: komunikat sukcesu inline (bez przekierowania)

### Sekcja 8: FAQ / Szczegóły praktyczne
- Grid z odpowiedziami: Kiedy?, Gdzie?, Ile osób?, Cena?, Doświadczenie?, Loty?
- Prosta, informacyjna sekcja rozwiązująca ostatnie wątpliwości

### Footer
- Minimalistyczny: "Oddech i Wiatr © 2026"

## Dane: tabela Supabase

```sql
CREATE TABLE applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  occupation TEXT NOT NULL,
  motivation TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  status TEXT DEFAULT 'new' -- new | reviewed | accepted | rejected
);
```

## Responsywność

- Mobile-first: jedna kolumna, pełna szerokość
- Tablet: 2 kolumny w gridach
- Desktop: max-width 1200px, wycentrowane

## Język

- Cała strona po polsku
- Ton: bezpośredni, mocny, bez korporacyjnego języka

## Czego NIE robimy (na razie)

- Panel admina do przeglądania zgłoszeń (Supabase dashboard wystarczy)
- Wielojęzyczność
- System płatności
- Blog / galeria
- Integracja z email marketingiem
- Analytics (poza wbudowanym Vercel Analytics)
