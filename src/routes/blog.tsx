import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: `Blog & News — ${site.name}` },
      { name: "description", content: "Latest news, updates and insights from FDH Agrovet Nigeria Limited." },
      { property: "og:title", content: `Blog & News — ${site.name}` },
      { property: "og:description", content: "Latest news, updates and insights from FDH Agrovet." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog & News"
        title={<>Latest updates from FDH Agrovet.</>}
        intro="Company news, product announcements, industry insights and event coverage. Content will be added here soon."
      />

      <section className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <article
              key={i}
              className="group rounded-xl border border-stone bg-ivory p-6 transition-all hover:shadow-lg hover:border-forest/20"
            >
              <div className="eyebrow">Coming soon</div>
              <h2 className="mt-3 font-display text-xl text-forest">
                Blog post placeholder {i + 1}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                This is a placeholder for a future blog post or news article. Replace this text with the actual content once it is ready.
              </p>
              <div className="mt-5 inline-flex items-center rounded-full border border-stone bg-cream px-4 py-1.5 text-xs font-medium text-forest group-hover:bg-forest group-hover:text-ivory transition-colors">
                Read more
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-stone bg-cream p-10 text-center">
          <h3 className="font-display text-2xl text-forest">Content placeholder</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Blog posts and news articles will be published here. Use this page as a ready-to-fill canvas — simply replace the placeholder cards with real stories.
          </p>
        </div>
      </section>
    </>
  );
}
