import { site } from "@/lib/site";

export function FloatingContact() {
  return (
    <div
      className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6 flex flex-col gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden>
          <path d="M19.11 17.62c-.29-.14-1.7-.84-1.96-.94s-.45-.14-.64.14c-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39s1.02 2.77 1.17 2.96c.14.19 2 3.06 4.85 4.29.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34zM16.02 4C9.4 4 4.03 9.37 4.03 15.99c0 2.11.55 4.17 1.6 5.98L4 28l6.19-1.62a11.9 11.9 0 0 0 5.82 1.48h.01c6.61 0 11.99-5.37 12-11.99 0-3.2-1.25-6.21-3.51-8.47A11.9 11.9 0 0 0 16.02 4zm0 21.86h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.67.96.98-3.58-.23-.37a9.9 9.9 0 0 1-1.52-5.3c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.04 7.03 2.92a9.87 9.87 0 0 1 2.91 7.03c-.01 5.48-4.47 9.86-9.06 9.86z"/>
        </svg>
      </a>
      <a
        href={`tel:${site.phoneIntl}`}
        aria-label="Call FDH Agrovet"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest text-ivory shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>
    </div>
  );
}
