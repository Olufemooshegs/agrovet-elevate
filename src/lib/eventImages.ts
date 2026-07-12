// Auto-discovers uploaded event photos from src/assets/events/<slug>/*.asset.json
// Drop new .asset.json pointers into the matching folder and they appear automatically.

type AssetPointer = { url: string; original_filename?: string };

const pointers = import.meta.glob<AssetPointer>(
  "../assets/events/*/*.asset.json",
  { eager: true, import: "default" },
);

const bySlug: Record<string, { url: string; name: string }[]> = {};

for (const [path, ptr] of Object.entries(pointers)) {
  // path looks like: ../assets/events/aba-2026/01.jpg.asset.json
  const match = path.match(/\/events\/([^/]+)\/([^/]+)\.asset\.json$/);
  if (!match) continue;
  const [, slug, name] = match;
  (bySlug[slug] ||= []).push({ url: ptr.url, name });
}

// Stable ordering by filename (01, 02, ...)
for (const slug of Object.keys(bySlug)) {
  bySlug[slug].sort((a, b) => a.name.localeCompare(b.name));
}

export function getEventImages(slug: string): { url: string }[] {
  return bySlug[slug] ?? [];
}
