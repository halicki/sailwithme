# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Oddech i Wiatr" — a landing page for a curated sailing retreat in Greece (June 2026). Polish-language one-pager with an application form backed by Supabase. Full design spec lives in `docs/superpowers/specs/2026-03-16-oddech-i-wiatr-landing-page-design.md`.

## Commands

- `npm run dev` — start dev server (Next.js, localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (flat config, Next.js preset)

No test framework is configured.

## Deployment

Vercel auto-deploys from GitHub. To deploy: commit and push to `main`. Do NOT use `vercel --prod` CLI.

## Architecture

Next.js 16 App Router, single-page app. All source code is in `src/`.

- **`src/app/page.tsx`** — assembles all sections in order: Hero → Manifesto → ForWhom → Program → Yacht → Crew → ApplicationForm → FAQ → Footer
- **`src/components/`** — one component per landing page section (Hero, Manifesto, ForWhom, Program, Yacht, Crew, ApplicationForm, FAQ, Footer)
- **`src/data/content.ts`** — all copywriting/content data (text, crew bios, FAQ items, program days). Edit content here, not in components.
- **`src/app/actions.ts`** — Server Action for form submission → Supabase insert into `applications` table
- **`src/lib/supabase.ts`** — Supabase client (uses `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` env vars)

## Styling

- Tailwind CSS v4 with PostCSS
- Design tokens (colors, spacing, typography) defined as CSS custom properties in `src/app/globals.css`
- Color palette: dark navy background (`--bg-primary: #0c1929`), light blue accent (`--accent: #8eb8d4`)
- Fonts: Inter (body, `--font-sans`) + Playfair Display (display, `--font-display`), loaded via `next/font/google`
- Reusable component classes: `.theme-card`, `.theme-input`, `.theme-btn`, `.theme-divider` defined in globals.css `@layer components`

## Language

All user-facing content is in Polish. Code (variable names, comments) is in English.
