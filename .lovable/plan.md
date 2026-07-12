## Update Events page + structured image upload workflow

### 1. Replace the 6 generic events with real ones

In `src/routes/events.tsx`, replace the placeholder `Array.from({ length: 6 })` with a typed `events` array driven from `src/lib/site.ts`:

```ts
export type EventItem = {
  slug: string;        // used as folder name for images
  title: string;
  location: string;
  date: string;        // display string, e.g. "2026" or "21–27 Sept 2025"
  blurb?: string;
  photoCount: number;  // how many slots to render
};
```

Seed with the 6 you listed:

1. `aba-2026` — IMMUNO-IgY Seminar, Aba, 2026
2. `port-harcourt-2026` — IMMUNO-IgY Seminar, Port Harcourt, 2026
3. `benin-2026` — IMMUNO-IgY Seminar, Benin, 2026
4. `nipoli` — Nipoli (no date)
5. `egg-boss-launch-2025` — Egg Boss Product Launch, 2025
6. `havana-cuba-2025` — MD at International Conference on Biotechnology, Havana, Cuba (21–27 Sept 2025)

Each event card keeps the same premium layout (eyebrow with date + location, title, blurb, gallery grid), but the gallery now renders exactly `photoCount` slots per event (defaulting to 6, adjustable per event).

### 2. Structured image upload workflow (credit-friendly)

Convention so you can drop photos in and I wire them up cheaply:

```
src/assets/events/<event-slug>/01.jpg
src/assets/events/<event-slug>/02.jpg
...
```

Where `<event-slug>` is one of: `aba-2026`, `port-harcourt-2026`, `benin-2026`, `nipoli`, `egg-boss-launch-2025`, `havana-cuba-2025`.

Workflow per batch you send:

1. You upload photos in chat and tell me the event slug (e.g. "these 4 are for aba-2026").
2. I run `lovable-assets create` once per file → writes `src/assets/events/<slug>/NN.jpg.asset.json` pointers (binaries stay on the CDN, not in the repo).
3. The events page auto-discovers pointers for that slug via a Vite `import.meta.glob("./events/<slug>/*.asset.json")` helper and renders real photos in the first N slots, falling back to `ImagePlaceholder` for the remaining `photoCount - N` slots.

This means:
- **No re-editing route files** every time new photos arrive — just add pointers.
- **No image generation** (zero image credits). Only the tiny `lovable-assets create` calls.
- **Photos stay on the CDN**, not in git, so repo stays fast.
- **Partial uploads are fine** — missing slots gracefully show placeholders.

### 3. Files touched

- `src/lib/site.ts` — add `events: EventItem[]`.
- `src/routes/events.tsx` — render from `events`, use glob-based image loader per slug, keep current styling (heading, eyebrow, gallery grid).
- New helper `src/lib/eventImages.ts` — small `getEventImages(slug)` using `import.meta.glob(..., { eager: true })` to return `{ url }[]`.

No new dependencies, no design changes, no other pages affected.

### 4. What you do next (after this plan is approved and built)

Send me photos in chat and say which event slug they belong to. I'll create the pointers and they'll appear immediately — no further code changes needed unless you want to change `photoCount` or captions.
