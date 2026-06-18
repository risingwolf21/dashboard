# GitHub Live Projects Dashboard

A single-page dashboard that showcases live, deployed side projects in a GitHub-flavored UI. One project is "featured" in a hero card; the rest live in a responsive grid below. Clicking any grid card promotes it to the hero spot.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components (Button, Card, Badge, Avatar, Tooltip, Toggle Group) on top of [Radix UI](https://www.radix-ui.com/)
- [Geist Sans](https://vercel.com/font) / [Geist Mono](https://vercel.com/font) via Fontsource (self-hosted, no CDN)

There is no backend. Project data lives in [`src/data/projects.ts`](./src/data/projects.ts) as a typed array, designed to be swapped for a real GitHub API fetch later without changing any consumer.

Site previews are CSS-only placeholders (no screenshots) generated per-project from a small tint palette, rendered inside a fake browser-window chrome with traffic lights and an address pill.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Features

- Light/dark theme toggle in the header, persisted to `localStorage`, applied with no flash-of-wrong-theme on load
- Click a project card to promote it to the featured hero; the previous hero returns to the grid
- All external links (address pill, "Open ↗" buttons, GitHub link) open in a new tab and don't trigger the card's select behavior
- Responsive layout: 3-column grid on desktop, 2 on tablet, 1 on mobile
