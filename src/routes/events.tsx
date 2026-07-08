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
      <section className="container-x py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article key={i} className="group">
              <ImagePlaceholder label={`Event photo ${i + 1}`} aspect="4/3" />
              <div className="mt-4">
                <div className="eyebrow">Event · 2024</div>
                <h3 className="mt-2 font-display text-xl text-forest">Event title placeholder</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A short description of the event can go here once photos and details are supplied.
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Event photos and details are placeholders — ready for real content to be added.
        </p>
      </section>
    </>
  );
}
