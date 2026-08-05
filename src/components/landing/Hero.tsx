import {
  DriveIcon,
  DropboxIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MetaIcon,
  PinterestIcon,
  ThreadsIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "./BrandIcons";
import { DashboardPreview } from "./DashboardPreview";
import { Reveal } from "./Reveal";

/** Floating social orbs, positioned as in the approved design. */
const ORBS = [
  { Icon: XIcon, top: "10%", left: "16%", size: 58, delay: 0 },
  { Icon: YouTubeIcon, top: "20%", left: "6%", size: 54, delay: 0.9 },
  { Icon: LinkedInIcon, top: "32%", left: "10%", size: 44, delay: 1.6 },
  { Icon: InstagramIcon, top: "40%", left: "18%", size: 48, delay: 0.4 },
  { Icon: DriveIcon, top: "48%", left: "12%", size: 46, delay: 2.1 },
  { Icon: MetaIcon, top: "9%", right: "16%", size: 52, delay: 1.2 },
  { Icon: ThreadsIcon, top: "19%", right: "6%", size: 48, delay: 0.6 },
  { Icon: PinterestIcon, top: "29%", right: "13%", size: 44, delay: 1.9 },
  { Icon: FacebookIcon, top: "36%", right: "8%", size: 48, delay: 0.2 },
  { Icon: TikTokIcon, top: "44%", right: "16%", size: 50, delay: 1.4 },
  { Icon: DropboxIcon, top: "52%", right: "11%", size: 40, delay: 2.4 },
];

const SPARKS = [
  { top: "12%", left: "11%", size: 8, color: "oklch(0.6 0.2 300)" },
  { top: "30%", left: "23%", size: 16, color: "oklch(0.75 0.16 40)" },
  { top: "45%", left: "6%", size: 7, color: "oklch(0.62 0.18 265)" },
  { top: "22%", right: "12%", size: 6, color: "oklch(0.68 0.16 300)" },
  { top: "31%", right: "22%", size: 16, color: "oklch(0.68 0.2 300)" },
  { top: "55%", right: "6%", size: 10, color: "oklch(0.66 0.2 300)" },
];

export function Hero() {
  return (
    <section className="hero-wash relative overflow-hidden">
      {/* faint concentric guides */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-25%] h-[1200px] w-[1200px] -translate-x-1/2 rounded-full opacity-[0.55]"
        style={{
          background:
            "radial-gradient(circle, transparent 58%, oklch(0.9 0.03 292) 58.2%, transparent 58.6%), radial-gradient(circle, transparent 72%, oklch(0.91 0.025 292) 72.2%, transparent 72.6%), radial-gradient(circle, transparent 86%, oklch(0.92 0.02 292) 86.2%, transparent 86.6%)",
        }}
      />

      {/* orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {ORBS.map(({ Icon, size, delay, ...pos }, i) => (
          <span
            key={i}
            className="float-orb absolute flex items-center justify-center rounded-full bg-card shadow-[var(--shadow-float)]"
            style={{
              ...pos,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
            }}
          >
            <Icon className="h-1/2 w-1/2" />
          </span>
        ))}
        {SPARKS.map((s, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            className="twinkle absolute"
            style={{
              top: s.top,
              left: s.left,
              right: s.right,
              width: s.size,
              height: s.size,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            <path
              fill={s.color}
              d="M12 0c.6 6.2 5.2 10.8 12 12-6.8 1.2-11.4 5.8-12 12-.6-6.2-5.2-10.8-12-12C6.8 10.8 11.4 6.2 12 0"
            />
          </svg>
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pt-14 lg:px-14">
        <Reveal className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/90 py-1.5 pl-1.5 pr-4 text-[0.85rem] text-foreground/80 shadow-[var(--shadow-card)] backdrop-blur">
            <em className="rounded-full bg-primary px-2.5 py-1 text-[0.72rem] font-semibold not-italic text-primary-foreground">
              New
            </em>
            AI Content Score is here ·{" "}
            <a href="#features" className="font-medium text-foreground hover:text-primary">
              Learn more
            </a>
            <span aria-hidden="true">→</span>
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-8 max-w-[900px] text-center text-[2.6rem] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[3.6rem] lg:text-[4.4rem]">
            Your <span className="text-primary-light">AI</span> Social Media
            <br className="hidden sm:block" /> Workspace
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-[620px] text-center text-[1.05rem] leading-[1.6] text-muted-foreground sm:text-[1.15rem]">
            Create, analyze, schedule, and grow – all in one place.
            <br className="hidden sm:block" /> Smart insights to help you post better and grow
            faster.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-9 flex w-full max-w-[535px] flex-col gap-2 rounded-2xl sm:flex-row sm:items-center sm:gap-0 sm:border sm:border-border/80 sm:bg-card sm:p-1.5 sm:shadow-[var(--shadow-float)]"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              aria-label="Enter your email"
              className="min-w-0 flex-1 rounded-xl border border-border bg-card px-4 py-3.5 text-[0.95rem] outline-none placeholder:text-muted-foreground sm:border-0 sm:bg-transparent sm:py-2.5"
            />
            <button
              type="submit"
              className="cta-gradient inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[0.95rem] font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Get started for free <span aria-hidden="true">→</span>
            </button>
          </form>
        </Reveal>

        <Reveal delay={320} className="mt-12">
          <DashboardPreview />
        </Reveal>
      </div>
    </section>
  );
}
