import { Link } from "@tanstack/react-router";
import { site, productCategories } from "@/lib/site";
import logo from "@/assets/fdh-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-stone bg-cream">
      <div className="container-x py-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
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
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SocialIcon
              href={site.social.facebook}
              label="Facebook"
              path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
            <SocialIcon
              href={site.social.linkedin}
              label="LinkedIn"
              path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
            <SocialIcon
              href={site.social.instagram}
              label="Instagram"
              path="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.775-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
            />
          </div>
        </div>

        <div>
          <div className="eyebrow">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-forest">About Us</Link></li>
            <li><Link to="/services" className="hover:text-forest">Services</Link></li>
            <li><Link to="/events" className="hover:text-forest">Events</Link></li>
            <li><Link to="/blog" className="hover:text-forest">Blog / News</Link></li>
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

function SocialIcon({ href, label, path }: { href: string; label: string; path: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone bg-ivory text-forest transition-all hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-ivory"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d={path} />
      </svg>
    </a>
  );
}
