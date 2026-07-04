# Gustav Bøgh — Portfolio

Hi, I'm Gustav — a web & fullstack developer in Copenhagen. This is my personal portfolio, where I present my shipped, real-world work — a production membership portal for Dansk Industri and a published healthcare app — to potential employers in Denmark and the Nordics.

I keep the tone honest, concrete and evidence-based: shipped projects, named organisations and live links over buzzwords.

## Tech stack

| Part | Choice |
|---|---|
| Framework | Next.js 16 (App Router, `src/` dir, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Base UI) |
| Animation | Motion (Framer Motion) — used sparingly |
| Content | Typed TS config (`src/data/`) — no CMS |
| Deployment | Vercel |

## Current features

- **Full-screen hero** — my name, role and value statement fill the first viewport, with an availability badge and a scroll cue.
- **Project section** — four case-study cards rendered from a single typed data source, each in a problem → solution → outcome format with tech badges, status badge (live / in development) and external links (live demo, GitHub, App Store, Google Play).
- **Image gallery per project** — each project holds a list of screenshots; clicking the cover opens a lightbox with keyboard navigation. Adding a picture is one line in the data file.
- **Typed project data model** (`src/data/projects.ts`) — when I add a project, I add one object; no component changes needed.
- **Discreet motion** — staggered entrance on cards, hover lift, with `prefers-reduced-motion` respected.
- **Accessible markup** — semantic sections, description lists, labelled lists and real links (I'm targeting WCAG 2.1 AA).

## Planned features

- **Hero** — my name, role, location and one value statement, visible above the fold.
- **Skills** — grouped: Frontend / Backend / Databases / Tools.
- **About** — my background, learning journey and what I'm looking for.
- **Contact** — Zod-validated form plus my direct e-mail, GitHub and LinkedIn links on every page.
- **CV download** (PDF).
- **Dark mode** with system-preference detection.
- **Deployment on Vercel** with a custom domain.
- **SEO & analytics** — metadata API, `sitemap.ts`, `robots.ts`, OG images, GDPR-friendly analytics (Plausible or Umami).
- **AI assistant** (on hold) — grounded chat about my portfolio via the Vercel AI SDK.

## Project structure

```
src/
├── app/                  # App Router: layout, pages, global styles
│   ├── layout.tsx        # Root layout, fonts, metadata
│   └── page.tsx          # Front page composing the sections
├── components/
│   ├── project-card.tsx     # One project case-study card
│   ├── project-section.tsx  # Renders all projects from data
│   └── ui/                  # shadcn/ui primitives (button, card, badge)
├── data/
│   └── projects.ts       # Typed project data — single source of truth
└── lib/
    └── utils.ts          # Shared helpers (cn)
public/
└── images/projects/      # Project screenshots
```

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # lint
```

## How I work

I develop new features on feature branches (e.g. `feature/hero-section`), test them (build + browser verification), and only then merge to `main`.
