import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Megaphone, Phone, MessageCircle, Mail } from "lucide-react";
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
      {/* Custom contact hero */}
      <section className="relative overflow-hidden bg-forest text-ivory">
        {/* Background rings */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-ivory/5" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full border border-ivory/8" />
          <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-moss/20 blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-sage/10 blur-2xl translate-y-1/3 -translate-x-1/4" />
        </div>

        <div className="container-x relative z-10 py-20 sm:py-24 grid items-center gap-10 lg:grid-cols-12">
          {/* Left — text */}
          <div className="lg:col-span-6">
            <div className="eyebrow text-sage">Contact</div>
            <div className="mt-5 flex items-start gap-4">
              <Megaphone className="mt-2 h-8 w-8 text-sage shrink-0" strokeWidth={1.5} />
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Talk with the FDH Team
              </h1>
            </div>
            <p className="mt-6 max-w-lg text-ivory/70 text-lg leading-relaxed">
              Reach us by phone, WhatsApp, or email — or send a message below. Our team responds within one business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phoneIntl}`}
                className="inline-flex items-center gap-2 rounded-full bg-ivory/10 border border-ivory/20 px-5 py-2.5 text-sm font-medium hover:bg-ivory/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sage/20 border border-sage/30 px-5 py-2.5 text-sm font-medium hover:bg-sage/30 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-ivory/10 border border-ivory/20 px-5 py-2.5 text-sm font-medium hover:bg-ivory/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
            </div>
          </div>

          {/* Center — large decorative megaphone */}
          <div className="hidden lg:flex lg:col-span-2 justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-sage/20 blur-2xl scale-150" />
              <div className="relative rounded-full border border-sage/30 bg-moss/30 p-7">
                <Megaphone className="h-16 w-16 text-sage" strokeWidth={1} />
              </div>
            </div>
          </div>

          {/* Right — FDH logo card */}
          <div className="hidden sm:flex lg:col-span-4 justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-ivory/5 blur-xl" />
              <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-ivory/15 bg-ivory/10 backdrop-blur-sm p-8 text-center w-56">
                <div className="rounded-full border-2 border-ivory/30 h-24 w-24 shadow-lg bg-moss/40 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-ivory tracking-tight">FDH</span>
                </div>
                <div>
                  <div className="font-display text-base leading-tight">FDH Agrovet</div>
                  <div className="mt-1 text-xs text-ivory/60 leading-snug">Nigeria Limited</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-sage/80">Ibadan, Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
