import { Link } from "@tanstack/react-router";
import { site, productCategories } from "@/lib/site";
import logo from "@/assets/fdh-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-stone bg-cream">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" width={44} height={44} className="h-11 w-11 rounded-full" />
            <div className="leading-tight">
              <div className="font-display text-lg text-forest">FDH Agrovet</div>
              <div className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
                Nigeria Limited
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-xs">
            A Nigerian veterinary pharmaceutical marketing company delivering
            innovative animal-health solutions since {site.yearFounded}.
          </p>
        </div>

        <div>
          <div className="eyebrow">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-forest">About Us</Link></li>
            <li><Link to="/services" className="hover:text-forest">Services</Link></li>
            <li><Link to="/events" className="hover:text-forest">Events</Link></li>
            <li><Link to="/contact" className="hover:text-forest">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Products</div>
          <ul className="mt-4 space-y-2 text-sm">
            {productCategories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: c.slug }}
                  className="hover:text-forest"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phoneIntl}`} className="hover:text-forest">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.whatsappLink} className="hover:text-forest">
                WhatsApp {site.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-forest">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div>Trust · Respect · Ethics · Quality</div>
        </div>
      </div>
    </footer>
  );
}
