import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TeamAlbum } from "@/components/TeamAlbum";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      { name: "description", content: "FDH Agrovet Nigeria Limited — a veterinary pharmaceutical marketing company delivering vaccines, drugs and biosecurity solutions since 2013." },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:description", content: "Our story, mission and values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>A Nigerian company built on trust, quality and veterinary expertise.</>}
        intro="FDH Agrovet Nig. Limited is a veterinary pharmaceutical marketing company that started operation in 2013. We focus on product development and sourcing high-quality veterinary products for the Nigerian market."
      />

      <section className="container-x py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ImagePlaceholder label="Company photo — team / facility" aspect="4/5" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 text-lg text-charcoal/80 leading-relaxed">
          <div className="eyebrow">Our story</div>
          <h2 className="mt-3 font-display text-4xl text-forest">More than a decade in animal health.</h2>
          <p className="mt-6">
            Since 2013, FDH Agrovet has served as an exclusive distributor for reputable
            international veterinary manufacturing companies. We bring proven global
            products into the hands of Nigerian veterinarians, farms and clinics.
          </p>
          <p className="mt-5">
            Our work spans product development, sales and distribution, data-driven
            market insights, and regulatory compliance — all in service of one goal:
            healthier, more productive animals across Nigeria.
          </p>
        </div>
      </section>

      <section className="border-y border-stone bg-cream">
        <div className="container-x py-20 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="eyebrow">Our promise</div>
            <h2 className="mt-3 font-display text-3xl text-forest">Vision, mission & values.</h2>
          </div>
          <div className="lg:col-span-2 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-forest">Vision</h3>
              <ul className="mt-3 space-y-3 text-charcoal/80">
                <li>· To be the reference and leading company in the industry.</li>
                <li>· To provide innovative, diversified technology and quality products.</li>
                <li>· To maintain close contact with our market to report needs and concerns — essential for developing new products and processes.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl text-forest">Mission</h3>
              <p className="mt-3 text-charcoal/80">
                To provide the best solution in animal health, productivity, and welfare
                with customer focus, competitiveness, profitability, and social and
                environmental responsibility.
              </p>
              <h3 className="mt-8 font-display text-2xl text-forest">Core values</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Trust", "Respect", "Ethics", "Quality", "Tradition", "Resilience"].map((v) => (
                  <span key={v} className="rounded-full border border-forest/20 px-3 py-1 text-xs text-forest">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamAlbum />

      <section className="container-x pb-24 grid gap-8 sm:grid-cols-3">
        <ImagePlaceholder label="Photo — warehouse / cold chain" aspect="1/1" />
        <ImagePlaceholder label="Photo — field / farm visit" aspect="1/1" />
        <ImagePlaceholder label="Photo — team at work" aspect="1/1" />
      </section>
    </>
  );
}
