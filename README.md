# AuRo

> AI-powered medical understanding and recovery companion.

AuRo bridges the gap between doctors and patients. After a consultation, patients can upload their prescriptions, lab reports, or discharge summaries — and AuRo converts complex medical jargon into calm, plain-language explanations paired with personalized AI-generated videos showing what's happening inside the body, how treatment works, and what recovery looks like.

The goal: every patient leaves every consultation with clarity and confidence, not confusion.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + tw-animate-css |
| Font | Geist (via next/font/google) |
| UI Primitives | Chakra UI v3, Base UI v1.5, shadcn/ui v4 |
| Animation | Framer Motion v12 |
| Icons | Lucide React v1.20 |
| CSS-in-JS | Emotion (with SSR registry for App Router) |
| React | v19.2.4 |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> **Note:** If port 3000 is occupied by another process, Next.js 16 automatically picks the next available port. Check your terminal output for the actual URL.

---

## Project Structure

```
AuRo/
├── public/
│   ├── hero.png          # Landing page hero image
│   ├── heroo.jpg         # Alternate hero
│   └── meow.jpg          # Secondary image asset
│
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout — Geist font, providers
│   │   ├── page.tsx          # Landing page (hero, stats, services, FAQ, footer)
│   │   ├── globals.css       # Tailwind v4 base + CSS variables
│   │   ├── waitlist/
│   │   │   └── page.tsx      # Early access signup
│   │   └── about/
│   │       └── page.tsx      # About page with stat cards
│   │
│   ├── components/
│   │   ├── FAQAccordion.tsx  # Interactive accordion (client component)
│   │   ├── providers.tsx     # Chakra + Emotion provider wrapper
│   │   └── ui/
│   │       └── button.tsx    # shadcn Button (Base UI primitive)
│   │
│   └── lib/
│       ├── emotion-registry.tsx  # useServerInsertedHTML emotion cache for SSR
│       └── utils.ts              # cn() helper (clsx + tailwind-merge)
```

---

## Routes

| Route | Description |
|---|---|
| `/` | Main landing page |
| `/waitlist` | Early access signup form |
| `/about` | About AuRo with impact stats |

---

## Key Decisions

**Emotion SSR registry** — Chakra UI v3 uses `@emotion/react` internally for global style injection. The App Router does not natively support emotion's `useLayoutEffect` SSR pattern, so `src/lib/emotion-registry.tsx` wraps the provider tree using Next.js's `useServerInsertedHTML` to flush styles correctly during server rendering.

**Inline styles over Tailwind for layout** — Major layout sections use inline `style` props rather than Tailwind classes. This makes spacing and structural changes immediately predictable — no class generation or purge issues, and changes show up reliably during hot reload.

**Tailwind v4 arbitrary values** — When using Tailwind classes, prefer `mt-[20px]` syntax over scale values like `mt-90` (which don't exist). Tailwind v4 only generates CSS for classes matching its defined scale.

**Next.js 16 dev output** — Development builds write to `.next/dev` instead of `.next`, allowing `next dev` and `next build` to run concurrently without conflicts.

---

## Scripts

```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```
