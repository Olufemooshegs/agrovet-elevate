import { PageHero } from "../components/PageHero";
import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { events } from "../lib/site";

export function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={<>Where we meet the industry.</>}
        intro="Highlights from seminars, product launches and international conferences across Nigeria and beyond."
      />
      <section className="container-x py-16 space-y-16">
        {events.map((ev) => (
          <article key={ev.slug} className="border-t border-border/60 pt-10 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="eyebrow">{[ev.location, ev.date].filter(Boolean).join(" · ")}</div>
                <h2 className="mt-2 font-display text-2xl md:text-3xl text-forest">{ev.title}</h2>
                {ev.blurb && <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{ev.blurb}</p>}
              </div>
              <span className="text-xs text-muted-foreground">{ev.photoCount} photos</span>
            </div>
            <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: ev.photoCount }).map((_, i) => (
                <ImagePlaceholder key={i} label={`${ev.title} — photo ${i + 1}`} aspect="1/1" />
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
