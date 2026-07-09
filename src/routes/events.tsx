import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { site } from "@/lib/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: `Events — ${site.name}` },
      { name: "description", content: "Trade shows, veterinary conferences and industry events featuring FDH Agrovet." },
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
        intro="Highlights from veterinary conferences, farm shows and partner visits across Nigeria and beyond."
      />
      <section className="container-x py-16 space-y-16">
        {Array.from({ length: 6 }).map((_, e) => (
          <article key={e} className="border-t border-border/60 pt-10 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="eyebrow">Event 0{e + 1} · 2024</div>
                <h2 className="mt-2 font-display text-2xl md:text-3xl text-forest">
                  Event title placeholder {e + 1}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  A short description of this event can be added here alongside the photo gallery below.
                </p>
              </div>
              <span className="text-xs text-muted-foreground">6 photos</span>
            </div>
            <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ImagePlaceholder
                  key={i}
                  label={`Photo ${i + 1}`}
                  aspect="1/1"
                />
              ))}
            </div>
          </article>
        ))}
        <p className="text-xs text-muted-foreground">
          Event photos and details are placeholders — ready for real content to be added.
        </p>
      </section>
    </>
  );
}

