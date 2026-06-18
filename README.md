# AuRo

AI-powered medical understanding and recovery companion. AuRo helps patients understand their health after doctor consultations — converting prescriptions, lab reports, and discharge summaries into plain-language explanations and personalized AI videos.

## Stack

- **Next.js 16** — App Router, Turbopack
- **TypeScript**
- **Tailwind CSS v4**
- **Geist** — font
- **Chakra UI v3** + **Base UI** — component primitives
- **shadcn/ui** — additional components

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    page.tsx          # Landing page
    waitlist/         # Waitlist signup page
    about/            # About page
  components/
    FAQAccordion.tsx  # Interactive FAQ
    providers.tsx     # Chakra + Emotion providers
    ui/               # shadcn components
  lib/
    emotion-registry.tsx  # SSR emotion cache
    utils.ts
```

## Pages

| Route | Description |
|---|---|
| `/` | Main landing page |
| `/waitlist` | Early access signup |
| `/about` | About AuRo |

## Development Notes

- Dev builds output to `.next/dev` — run `next dev` and `next build` independently without conflicts
- Port 3000 is used by default; if occupied Next.js picks the next available port
- Emotion requires the registry wrapper in `providers.tsx` for proper SSR hydration with the App Router
