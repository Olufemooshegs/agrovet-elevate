import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${site.name}` },
      { name: "description", content: `Contact FDH Agrovet Nigeria Limited. Phone ${site.phone}, WhatsApp ${site.whatsapp}, or send us a message.` },
      { property: "og:title", content: `Contact — ${site.name}` },
      { property: "og:description", content: "Get in touch with our veterinary team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk animal health.</>}
        intro="Reach us by phone, WhatsApp, email — or send a message below. Our team responds within one business day."
      />

      <section className="container-x py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-lg border border-stone bg-cream p-8">
            <div className="eyebrow">Head office</div>
            <div className="mt-3 font-display text-2xl text-forest">{site.address}</div>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${site.phoneIntl}`} className="text-forest text-lg font-medium hover:text-moss">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">WhatsApp</dt>
                <dd className="mt-1">
                  <a href={site.whatsappLink} className="text-forest text-lg font-medium hover:text-moss">
                    {site.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-forest text-lg font-medium hover:text-moss">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Hours</dt>
                <dd className="mt-1 text-charcoal/80">Mon – Fri · 9:00 – 17:00 WAT</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Follow us</dt>
                <dd className="mt-3">
                  <SocialLinks />
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-lg border border-stone bg-ivory p-8"
          >
            <div className="eyebrow">Send a message</div>
            <h2 className="mt-3 font-display text-3xl text-forest">We're listening.</h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div className="mt-5">
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-md border border-stone bg-ivory px-4 py-3 text-sm outline-none focus:border-forest"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-ivory hover:bg-moss"
              >
                Send message
              </button>
              {sent && (
                <span className="text-sm text-moss">
                  Thanks — we'll be in touch shortly.
                </span>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-stone bg-ivory px-4 py-3 text-sm outline-none focus:border-forest"
      />
    </div>
  );
}
