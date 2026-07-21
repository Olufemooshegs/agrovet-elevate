import { Link } from "react-router";
import { site, productCategories, partners } from "../lib/site";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import fdhLogo from "@/imports/IMG-20260424-WA0078.jpg";
import logoSchippers from "@/imports/Schippers_logo.jpg";
import logoBiomed from "@/imports/WhatsApp-Image-2023-06-09-at-2.38.43-PM.jpg";
import logoAvivac from "@/imports/WhatsApp-Image-2023-06-09-at-2.39.20-PM.jpg";
import logoCavac from "@/imports/WhatsApp-Image-2023-06-09-at-2.39.49-PM.jpg";
import logoApa from "@/imports/WhatsApp-Image-2023-06-09-at-2.40.28-PM.jpg";
import logoMelan from "@/imports/WhatsApp-Image-2023-06-09-at-2.41.04-PM.jpg";
import logoPlatalab from "@/imports/WhatsApp-Image-2023-06-09-at-2.41.42-PM.jpg";
import logoMedicavet from "@/imports/WhatsApp-Image-2023-06-09-at-2.42.14-PM.jpg";
import logoInteruac from "@/imports/WhatsApp-Image-2023-06-09-at-2.47.38-PM.jpg";
import { HeroCarousel } from "../components/HeroCarousel";
import { PillarsSection } from "../components/PillarsSection";
import { AnimatedHeading } from "../components/AnimatedHeading";
import { WhyUsCarousel } from "../components/WhyUsCarousel";

const partnerLogos: Record<string, string> = {
  schippers: logoSchippers,
  biomed: logoBiomed,
  avivac: logoAvivac,
  cavac: logoCavac,
  apa: logoApa,
  melan: logoMelan,
  platalab: logoPlatalab,
  medicavet: logoMedicavet,
  interuac: logoInteruac,
};

const whyUs = [
  { title: "Proven since 2013", body: "Over a decade serving Nigerian veterinarians, farms and distributors." },
  { title: "Exclusive distribution", body: "Sole distributor for reputable international veterinary manufacturers." },
  { title: "Regulatory rigour", body: "All products meet NAFDAC and international veterinary standards." },
  { title: "Nationwide reach", body: "Coverage across Nigerian states through a trusted logistics network." },
];

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone bg-cream">
        <div className="container-x pt-16 pb-20 sm:pt-24 sm:pb-28 grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="eyebrow">Est. {site.yearFounded} · Nigeria</div>
            <AnimatedHeading lines={["Advancing animal", "health across Nigeria."]} className="mt-5 text-5xl sm:text-7xl" />
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              FDH Agrovet is a veterinary pharmaceutical marketing company sourcing and distributing high-quality vaccines, drugs and biosecurity products for the Nigerian market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory hover:bg-moss transition-colors">
                Explore products
              </Link>
              <Link to="/contact" className="inline-flex items-center rounded-full border border-forest/20 bg-ivory px-6 py-3 text-sm font-medium text-forest hover:bg-stone/60 transition-colors">
                Contact us
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span>Vaccines</span><span className="text-stone">•</span>
              <span>Drugs</span><span className="text-stone">•</span>
              <span>Biosecurity</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <HeroCarousel aspect="4/5" />
              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-lg border border-stone bg-ivory p-4 shadow-sm">
                <ImageWithFallback src={fdhLogo} alt="FDH Agrovet logo" className="h-11 w-11 rounded-full shrink-0 object-cover" />
                <div className="text-xs">
                  <div className="font-medium text-forest">Trusted since 2013</div>
                  <div className="text-muted-foreground">Nigerian animal health</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-stone">
        <div className="container-x py-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow">About FDH Agrovet</div>
            <h2 className="mt-4 font-display text-4xl text-forest">A quiet force in Nigerian animal health.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 text-lg leading-relaxed text-charcoal/80">
            <p>FDH Agrovet Nig. Limited is a veterinary pharmaceutical marketing company that started operation in 2013. Our focus is product development and sourcing high-quality veterinary products for the Nigerian market.</p>
            <p className="mt-5">We serve as an exclusive distributor for reputable international veterinary manufacturing companies, bringing world-class innovation to Nigerian farms and veterinary practices.</p>
            <div className="mt-8">
              <Link to="/about" className="text-forest underline underline-offset-4 hover:text-moss">Read our full story →</Link>
            </div>
          </div>
        </div>
      </section>

      <PillarsSection />

      <section className="border-b border-stone">
        <div className="container-x py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <div className="eyebrow">Product range</div>
              <h2 className="mt-4 font-display text-4xl text-forest">Vaccines, drugs and biosecurity.</h2>
            </div>
            <Link to="/products" className="text-forest underline underline-offset-4 hover:text-moss">View all products →</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((c) => (
              <Link
                key={c.slug}
                to={`/products/${c.slug}`}
                className="group block rounded-lg border border-stone bg-ivory p-8 hover:border-forest/40 hover:shadow-sm transition-all"
              >
                <div className="eyebrow text-forest/70">{c.group}</div>
                <div className="mt-3 font-display text-2xl text-forest">{c.name}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.blurb}</p>
                <div className="mt-6 text-sm text-forest group-hover:translate-x-1 transition-transform">Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-x py-20 grid gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow">Why choose us</div>
            <h2 className="mt-4 font-display text-4xl text-forest">Reliability you can build a farm on.</h2>
            <div className="mt-8"><WhyUsCarousel aspect="4/3" /></div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-stone">
              {whyUs.map((w) => (
                <li key={w.title} className="py-6 first:pt-0">
                  <h3 className="font-display text-2xl text-forest">{w.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{w.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-stone bg-cream">
        <div className="container-x py-16">
          <div className="text-center">
            <div className="eyebrow">Our partners</div>
            <h2 className="mt-4 font-display text-3xl text-forest">Global manufacturers. Nigerian distribution.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              We hold long-standing partnerships with reputable international veterinary manufacturers across Europe, Asia and Latin America.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {partners.map((p) => {
              const logo = partnerLogos[p.slug];
              return (
                <div
                  key={p.slug}
                  title={p.country ? `${p.name} — ${p.country}` : p.name}
                  className="group flex aspect-[3/2] items-center justify-center rounded-xl border border-stone/60 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-forest/20"
                >
                  {logo ? (
                    <ImageWithFallback
                      src={logo}
                      alt={p.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground text-center leading-snug">
                      {p.name}
                      {p.country && <><br /><span className="text-[10px] opacity-60">{p.country}</span></>}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container-x py-20 grid gap-10 lg:grid-cols-3">
          <div>
            <div className="eyebrow">Vision</div>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/80">To be the reference and leading company in the industry — providing innovative, diversified technology and quality products, and maintaining close contact with our market to serve its evolving needs.</p>
          </div>
          <div>
            <div className="eyebrow">Mission</div>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/80">To provide the best solution in animal health, productivity and welfare with customer focus, competitiveness, profitability, and social and environmental responsibility.</p>
          </div>
          <div>
            <div className="eyebrow">Core values</div>
            <ul className="mt-4 space-y-2 text-lg text-charcoal/80">
              {["Trust", "Respect", "Ethics", "Quality", "Tradition", "Resilience"].map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest" />{v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory">
        <div className="container-x py-20 text-center">
          <div className="eyebrow text-sage">Get in touch</div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl max-w-3xl mx-auto">Speak with our veterinary team today.</h2>
          <p className="mt-5 text-ivory/70 max-w-xl mx-auto">Whether you need product information, distribution, or technical support — we're here to help you protect your animals.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`tel:${site.phoneIntl}`} className="inline-flex items-center rounded-full bg-ivory px-6 py-3 text-sm font-medium text-forest hover:bg-cream">
              Call {site.phone}
            </a>
            <a href={site.whatsappLink} className="inline-flex items-center rounded-full border border-ivory/30 px-6 py-3 text-sm font-medium text-ivory hover:bg-ivory/10">
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
