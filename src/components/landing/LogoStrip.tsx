const WORDMARKS = [
  { name: "crocs", className: "font-extrabold tracking-tight text-[1.55rem]" },
  {
    name: "IIElevenLabs",
    className: "font-bold tracking-tight text-[1.35rem]",
  },
  {
    name: "VICE",
    className: "font-black italic tracking-tighter text-[1.6rem]",
  },
  { name: "shopify", className: "font-bold italic text-[1.4rem]" },
  { name: "Airtable", className: "font-bold text-[1.35rem]" },
  { name: "benefit", className: "font-normal text-[1.5rem] [font-family:Georgia,serif]" },
  { name: "WIRED", className: "font-black tracking-[0.12em] text-[1.35rem]" },
  { name: "SEMRUSH", className: "font-bold tracking-[0.04em] text-[1.2rem]" },
];

export function LogoStrip() {
  return (
    <div className="border-t border-border/70 bg-surface-tint">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-6 py-8 lg:flex-row lg:gap-12 lg:px-14">
        <p className="shrink-0 text-[0.72rem] font-semibold uppercase leading-[1.5] tracking-[0.06em] text-foreground/70">
          Trusted by 250,000+
          <br className="hidden lg:block" /> creators &amp; brands
        </p>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
          {WORDMARKS.map((w) => (
            <span
              key={w.name}
              className={`text-foreground/80 transition-opacity duration-300 hover:opacity-100 opacity-75 ${w.className}`}
            >
              {w.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
