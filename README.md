# Oddech i Wiatr

Landing page dla kuratorowanego rejsu transformacyjnego w Grecji: żeglowanie, freediving i breathwork w Zatoce Sarońskiej, 20-27 czerwca 2026.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- Supabase
- Resend
- Vercel Analytics i Speed Insights

## Uruchomienie

```bash
npm install
npm run dev
```

Strona działa lokalnie pod `http://localhost:3000`.

## Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local` i uzupełnij wartości:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
RESEND_API_KEY=
ADMIN_EMAIL=halicki.arkadiusz@gmail.com
```

Formularz zapisuje zgłoszenia do tabeli Supabase `applications` z polami:

- `name`
- `email`
- `occupation`
- `motivation`

Po zapisie wysyłane jest powiadomienie przez Resend na `ADMIN_EMAIL`.

## Komendy

```bash
npm run dev
npm run lint
npm run build
npm run start
```

`npm run build` pobiera fonty przez `next/font/google`, więc wymaga dostępu do sieci.

## Struktura

- `src/app/page.tsx` - układa sekcje landing page'a
- `src/app/actions.ts` - server action formularza
- `src/app/opengraph-image.tsx` - generowany obraz social preview
- `src/components/` - komponenty sekcji
- `src/data/content.ts` - główne miejsce edycji treści
- `src/lib/supabase.ts` - klient Supabase
- `src/lib/email.ts` - powiadomienia mailowe

## Deploy

Projekt jest przygotowany pod Vercel. Deploy produkcyjny powinien iść przez GitHub po pushu do `main`.
