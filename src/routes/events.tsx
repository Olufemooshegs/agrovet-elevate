import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { site, events } from "@/lib/site";
import { getEventImages } from "@/lib/eventImages";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: `Events — ${site.name}` },
      { name: "description", content: "Seminars, product launches and international conferences featuring FDH Agrovet." },
      { property: "og:title", content: `Events — ${site.name}` },
      { property: "og:description", content: "Where to meet the FDH Agrovet team." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={<>Where we meet the industry.</>}
        intro="Highlights from seminars, product launches and international conferences across Nigeria and beyond."
      />
      <section className="container-x py-16 space-y-16">
        {events.map((ev) => {
          const photos = getEventImages(ev.slug);
          const slots = Math.max(ev.photoCount, photos.length);
          return (
            <article key={ev.slug} className="border-t border-border/60 pt-10 first:border-t-0 first:pt-0">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="eyebrow">
                    {[ev.location, ev.date].filter(Boolean).join(" · ")}
                  </div>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl text-forest">
                    {ev.title}
                  </h2>
                  {ev.blurb && (
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {ev.blurb}
                    </p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  {photos.length} / {slots} photos
                </span>
              </div>
              <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {Array.from({ length: slots }).map((_, i) => {
                  const photo = photos[i];
                  if (photo) {
                    return (
                      <div
                        key={i}
                        className="relative w-full overflow-hidden rounded-md border border-stone bg-cream"
                        style={{ aspectRatio: "1/1" }}
                      >
                        <img
                          src={photo.url}
                          alt={`${ev.title} — photo ${i + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    );
                  }
                  return (
                    <ImagePlaceholder
                      key={i}
                      label={`Photo ${i + 1}`}
                      aspect="1/1"
                    />
                  );
                })}
              </div>
            </article>
          );
        })}
        <p className="text-xs text-muted-foreground">
          Upload photos for each event and they will appear here automatically.
        </p>
      </section>
    </>
  );
}
