export function ImagePlaceholder({ label = "Photo placeholder", aspect = "4/3", className = "" }: {
  label?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-md border border-stone bg-cream ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 14px, rgba(31,59,45,0.05) 14px 15px)" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-forest/60">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M21 16l-5-5-9 9" />
        </svg>
        <div className="mt-3 eyebrow text-forest/70">Image</div>
        <div className="mt-1 text-sm text-muted-foreground max-w-xs">{label}</div>
      </div>
    </div>
  );
}
