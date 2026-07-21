import { PageHero } from "../components/PageHero";

const services = [
  { n: "01", title: "Product development", body: "We identify unmet needs in Nigerian animal health and work with global manufacturers to develop and register products that meet local market requirements." },
  { n: "02", title: "Sales & distribution", body: "Nationwide distribution to veterinary clinics, integrated farms, feed millers and pharmacy chains — with a logistics network built for cold-chain sensitivity." },
  { n: "03", title: "Data-driven insights", body: "We track disease trends, product performance and market signals to help partners plan supply, pricing and clinical strategy with confidence." },
  { n: "04", title: "Regulatory compliance", body: "Registration, NAFDAC dossier preparation and post-market surveillance for veterinary pharmaceutical products entering the Nigerian market." },
  { n: "05", title: "Technical support", body: "In-field veterinary advisory, product training and clinical guidance for our distributors, retailers and end users." },
  { n: "06", title: "Partnership management", body: "Exclusive representation and long-term partnership with reputable international veterinary manufacturers." },
];

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title={<>Services that support the entire animal-health value chain.</>}
        intro="From product development to compliance and after-sales support, we work end-to-end so partners and customers can focus on what they do best."
      />
      <section className="container-x py-20">
        <div className="grid gap-px bg-stone sm:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden border border-stone">
          {services.map((s) => (
            <div key={s.n} className="bg-ivory p-8 min-h-[220px]">
              <div className="text-sm text-forest/70 font-medium">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl text-forest">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
