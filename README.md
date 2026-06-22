# ชวนเที่ยวไทย — Thai Travel Guide

> A Thai-language travel guide for 12 of Thailand's standout provinces — explore them on an interactive map, then dive into each province's identity and top attractions.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-runtime-fbf0df?logo=bun&logoColor=black)
![Biome](https://img.shields.io/badge/Biome-0_errors_0_warnings-60a5fa?logo=biome&logoColor=white)

- **Live demo**: https://thai-travel-guide-mu.vercel.app
- **Repository**: https://github.com/mikedeni/thai-travel-guide

The primary content language is **Thai** (the UI sets `lang="th"` and ships the Noto Sans Thai font). Each province carries both a Thai and an English name.

---

## Why This Exists

Planning a trip around Thailand usually means juggling a dozen browser tabs. **ชวนเที่ยวไทย** puts 12 standout provinces on a single interactive map: click a marker, land on a clean province page, and see the place's identity (เอกลักษณ์) and a handful of must-visit attractions at a glance.

## Features

- **Interactive map of Thailand** — a Leaflet map with one clickable marker per province. Click a marker (or the "ดูสถานที่เที่ยว" button in its popup) to navigate straight to that province's page.
- **12 curated provinces** — Bangkok, Chiang Mai, Phuket, Krabi, Ayutthaya, Sukhothai, Chiang Rai, Kanchanaburi, Prachuap Khiri Khan, Surat Thani, Nakhon Ratchasima, and Mae Hong Son, spanning every region of the country.
- **Province cards** — a responsive grid (1 / 2 / 3 columns) on the home page, each card showing a representative photo, name, and region.
- **Province detail pages** — a photo hero with the province name, region badge, and identity description, followed by its 3–5 top attractions and a focused map centered on that province.
- **Statically generated** — every province page is pre-rendered at build time via `generateStaticParams`, with per-page `<title>` and `description` metadata.
- **Map without an API key** — uses free OpenStreetMap tiles, so there are no map provider keys or billing to configure.

## Tech Stack

| Area | Choice |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router, `src/` directory) |
| Language | TypeScript 5 |
| UI library | React 19 |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Components | [shadcn/ui](https://ui.shadcn.com/) on a Radix UI base, `lucide-react` icons |
| Map | [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) with OpenStreetMap tiles |
| Images | Unsplash (remote-pattern allow-listed in `next.config.ts`) |
| Runtime / package manager | [Bun](https://bun.sh/) |
| Lint & format | [Biome](https://biomejs.dev/) |
| Hosting | [Vercel](https://vercel.com/) |

## Prerequisites

- [Bun](https://bun.sh/) installed (used as both the package manager and the script runner).

That's it — Bun runs the Next.js toolchain, so a separate Node/npm setup isn't required.

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/mikedeni/thai-travel-guide.git
cd thai-travel-guide

# 2. Install dependencies
bun install

# 3. Start the dev server
bun run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | What it does |
| --- | --- |
| `bun run dev` | Start the Next.js development server |
| `bun run build` | Create a production build |
| `bun run start` | Serve the production build (run `build` first) |
| `bun run lint` | Lint and check formatting (`biome check`) |
| `bun run format` | Auto-fix lint and formatting issues (`biome check --write`) |

The project is clean: Biome reports **0 errors, 0 warnings**.

## Project Structure

```
thai-travel-guide/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout: <html lang="th">, Noto Sans Thai, site metadata
│   │   ├── page.tsx                   # Home: hero, interactive map, province card grid
│   │   ├── globals.css                # Tailwind v4 + theme tokens
│   │   └── province/
│   │       └── [slug]/page.tsx        # Province detail page (statically generated)
│   ├── components/
│   │   ├── province-card.tsx          # Card used in the home-page grid
│   │   ├── attraction-card.tsx        # Card used for each top attraction
│   │   ├── province-map.tsx           # Leaflet map (client-only)
│   │   ├── province-map-loader.tsx    # Dynamically imports the map with ssr: false
│   │   └── ui/                        # shadcn/ui components (badge, button, card, separator, ...)
│   └── lib/
│       ├── provinces.ts               # Province + Attraction data and lookup helpers
│       └── utils.ts                   # cn() class-name helper
├── next.config.ts                     # Allows remote images from images.unsplash.com
├── biome.json                         # Biome lint/format config
└── components.json                    # shadcn/ui config
```

The Leaflet map touches `window`, so it is loaded through `province-map-loader.tsx` with `next/dynamic` and `ssr: false` to keep it out of server rendering.

## How the Data Is Structured

All content lives in a single typed source of truth: [`src/lib/provinces.ts`](src/lib/provinces.ts). There is no database or CMS — provinces are a plain typed array.

Each province matches this shape:

```ts
type Province = {
  slug: string;        // URL segment, e.g. "chiang-mai" -> /province/chiang-mai
  nameTh: string;      // Thai name
  nameEn: string;      // English name
  region: string;      // e.g. "ภาคเหนือ"
  identity: string;    // the "เอกลักษณ์" description
  image: string;       // hero photo (Unsplash URL)
  imageAlt: string;
  lat: number;         // map marker latitude
  lng: number;         // map marker longitude
  attractions: Attraction[]; // 3–5 top attractions
};

type Attraction = {
  nameTh: string;
  nameEn: string;
  description: string;
  image: string;
  imageAlt: string;
};
```

Two helpers expose the data to the app:

- `getAllProvinces()` — returns the full list (used by the home-page grid, the map, and `generateStaticParams`).
- `getProvinceBySlug(slug)` — looks up a single province (used by the province page and its metadata).

### Adding a Province

1. Open `src/lib/provinces.ts` and append a new object to the `provinces` array.
2. Give it a unique, URL-safe `slug` — it becomes the route at `/province/<slug>`.
3. Fill in `nameTh`, `nameEn`, `region`, `identity`, an Unsplash `image` (with `imageAlt`), and `lat` / `lng` coordinates for the map marker.
4. Add 3–5 `attractions`.
5. For images, reuse one of the existing Unsplash IDs in the `IMG` map or add a known-good ID — the `unsplash()` helper wraps it as `https://images.unsplash.com/<id>?auto=format&fit=crop&w=1200&q=80`. Any new image host must also be allow-listed in `next.config.ts`.

No other files need to change: the new card, route, static params, and map marker are all generated from the array. (The home page copy mentions "12 จังหวัด", so update that text in `src/app/page.tsx` if you change the count.)

## Deployment

The app is deployed on **Vercel** at https://thai-travel-guide-mu.vercel.app. Vercel auto-detects Next.js, so deploying is as simple as importing the repository — no extra build configuration or environment variables are required.

## Credits & Attribution

- Map data and tiles © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors.
- Photography from [Unsplash](https://unsplash.com/).
- Built with [Next.js](https://nextjs.org/), [Leaflet](https://leafletjs.com/) / [react-leaflet](https://react-leaflet.js.org/), [shadcn/ui](https://ui.shadcn.com/), and [Tailwind CSS](https://tailwindcss.com/).
