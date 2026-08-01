import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/fdh-logo.asset.json";
import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/blog", label: "Blog / News" },
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
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled || open
          ? "bg-[#0e2a1e]/95 backdrop-blur border-forest/40 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.35)]"
          : "bg-[#0e2a1e] border-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory"
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
          <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
            <img
              src={logo.url}
              alt="FDH Agrovet Nigeria Limited"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full shrink-0 ring-2 ring-ivory/20"
            />
            <span className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="font-display text-lg text-ivory truncate">FDH Agrovet</span>
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-ivory/60">
                Nigeria Limited
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-1 rounded-full bg-ivory/5 p-1 ring-1 ring-ivory/10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative rounded-full px-4 py-2 text-sm text-ivory/75 transition-all duration-200 hover:bg-ivory/10 hover:text-ivory"
              activeProps={{ className: "bg-sage text-[#0b1611] font-medium shadow-sm" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-[#0b1611] hover:bg-sage/90 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ivory/10 bg-[#0e2a1e]">
          <nav className="container-x flex flex-col py-4 gap-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base text-ivory/80 transition-colors hover:bg-ivory/10"
                activeProps={{ className: "bg-sage text-[#0b1611] font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sage px-5 py-3 text-sm font-medium text-[#0b1611]"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
