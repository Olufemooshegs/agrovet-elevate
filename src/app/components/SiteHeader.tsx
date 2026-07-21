import { NavLink, Link } from "react-router";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import fdhLogo from "@/imports/IMG-20260424-WA0078.jpg";

const nav = [
  { to: "/", label: "Home", exact: true },
  { to: "/about", label: "About", exact: false },
  { to: "/products", label: "Products", exact: false },
  { to: "/services", label: "Services", exact: false },
  { to: "/events", label: "Events", exact: false },
  { to: "/blog", label: "Blog / News", exact: false },
  { to: "/contact", label: "Contact", exact: false },
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
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-ivory"
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
            <ImageWithFallback src={fdhLogo} alt="FDH Agrovet Nigeria Limited" className="h-11 w-11 rounded-full shrink-0 ring-2 ring-ivory/20 object-cover" />
            <span className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="font-display text-lg text-ivory truncate">FDH Agrovet</span>
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-ivory/60">Nigeria Limited</span>
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-0.5 rounded-full bg-ivory/5 p-1 ring-1 ring-ivory/10">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.exact}
              className={({ isActive }) =>
                isActive
                  ? "relative rounded-full px-3 py-1.5 text-[13px] bg-ivory text-forest font-medium shadow-sm whitespace-nowrap"
                  : "relative rounded-full px-3 py-1.5 text-[13px] text-ivory/75 transition-all duration-200 hover:bg-ivory/10 hover:text-ivory whitespace-nowrap"
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center rounded-full bg-ivory px-5 py-2.5 text-sm font-medium text-forest hover:bg-cream transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ivory/10 bg-[#0e2a1e]">
          <nav className="container-x flex flex-col py-4 gap-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.exact}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "rounded-xl px-4 py-3 text-base bg-ivory text-forest font-medium"
                    : "rounded-xl px-4 py-3 text-base text-ivory/80 transition-colors hover:bg-ivory/10"
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ivory px-5 py-3 text-sm font-medium text-forest"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
