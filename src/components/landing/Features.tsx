import {
  BarChart3,
  CalendarCheck,
  CalendarRange,
  Hash,
  PenLine,
  Sparkles,
} from "lucide-react";

import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: Sparkles,
    tint: "var(--icon-violet)",
    title: "AI Content Score",
    body: "Get an AI-powered score and actionable tips to improve your content before you post.",
  },
  {
    icon: PenLine,
    tint: "var(--icon-indigo)",
    title: "AI Caption Generator",
    body: "Generate engaging captions tailored to your audience and platform.",
  },
  {
    icon: Hash,
    tint: "var(--icon-purple)",
    title: "Smart Hashtag Generator",
    body: "Discover high-performing hashtags to increase reach and engagement.",
  },
  {
    icon: CalendarCheck,
    tint: "var(--icon-orange)",
    title: "Best Time to Post",
    body: "Post at the right time. Grodo analyzes your audience to find the perfect time.",
  },
  {
    icon: CalendarRange,
    tint: "var(--icon-pink)",
    title: "Content Planner",
    body: "Plan, organize, and schedule your content across all platforms.",
  },
  {
    icon: BarChart3,
    tint: "var(--icon-blue)",
    title: "Analytics Dashboard",
    body: "Track performance, measure growth, and get insights that actually matter.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-surface-tint py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-16 hidden lg:block"
      >
        <svg viewBox="0 0 24 24" className="twinkle h-40 w-40 opacity-70">
          <defs>
            <linearGradient id="feat-spark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.82 0.09 295)" />
              <stop offset="100%" stopColor="oklch(0.95 0.03 295)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#feat-spark)"
            d="M12 0c.6 6.2 5.2 10.8 12 12-6.8 1.2-11.4 5.8-12 12-.6-6.2-5.2-10.8-12-12C6.8 10.8 11.4 6.2 12 0"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className="twinkle absolute -left-16 -top-4 h-6 w-6"
          style={{ animationDelay: "1.2s" }}
        >
          <path
            fill="oklch(0.66 0.2 300)"
            d="M12 0c.6 6.2 5.2 10.8 12 12-6.8 1.2-11.4 5.8-12 12-.6-6.2-5.2-10.8-12-12C6.8 10.8 11.4 6.2 12 0"
          />
        </svg>
        <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-primary-light/50" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        <Reveal>
          <span className="inline-flex rounded-full bg-primary-soft px-3.5 py-1.5 text-[0.8rem] font-semibold text-primary">
            Features
          </span>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="mt-5 max-w-[640px] text-[2rem] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[2.6rem]">
            Everything you need to grow
            <br className="hidden sm:block" /> on{" "}
            <span className="text-primary-light">social media</span>
          </h2>
        </Reveal>

        <Reveal delay={130}>
          <p className="mt-4 max-w-[430px] text-[0.98rem] leading-[1.6] text-muted-foreground">
            Grodo brings all the tools you need to create, analyze, schedule,
            and grow – in one simple workspace.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <article className="group h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-24px_oklch(0.4_0.18_280/0.45)]">
                <div className="flex items-start gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: f.tint }}
                  >
                    <f.icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <h3 className="text-[1.02rem] font-bold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 text-[0.88rem] leading-[1.6] text-muted-foreground">
                      {f.body}
                    </p>
                    <a
                      href="#features"
                      className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-primary"
                    >
                      Learn more
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-[0.95rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
          >
            Explore all features{" "}
            <span aria-hidden="true" className="text-primary">
              →
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
