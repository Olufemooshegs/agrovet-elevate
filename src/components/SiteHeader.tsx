import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/fdh-logo.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "bg-ivory/95 backdrop-blur border-b border-stone"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="FDH Agrovet Nigeria Limited"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full shrink-0"
          />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-display text-lg text-forest truncate">FDH Agrovet</span>
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">
              Nigeria Limited
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-charcoal/80 hover:text-forest transition-colors"
              activeProps={{ className: "text-forest font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-ivory hover:bg-moss transition-colors"
          >
            Get in touch
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone text-forest"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16" strokeLinecap="round" />
                  <path d="M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-stone bg-ivory">
          <nav className="container-x flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-charcoal/90 border-b border-stone/60 last:border-none"
                activeProps={{ className: "text-forest font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-medium text-ivory"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
