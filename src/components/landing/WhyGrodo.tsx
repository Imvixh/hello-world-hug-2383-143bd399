import { Brain, CheckCircle2, Layers, Target } from "lucide-react";

import { Reveal } from "./Reveal";

const HEX = "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)";

const CARDS = [
  {
    icon: Target,
    title: "Beat the Algorithm",
    body: "Grodo analyzes trends, audience behavior, and content signals to help you create what the algorithm loves.",
    accent: "var(--icon-violet)",
    hex: "oklch(0.94 0.035 288)",
    panel: "oklch(0.975 0.018 290)",
    items: [
      "AI Content Score",
      "Smart Hashtag & Caption Suggestions",
      "Best Time to Post",
      "Competitor & Trend Insights",
    ],
  },
  {
    icon: Brain,
    title: "AI That Works for You",
    body: "From idea to analytics, Grodo's AI handles the heavy lifting so you can focus on creating and growing.",
    accent: "var(--icon-orange)",
    hex: "oklch(0.95 0.035 70)",
    panel: "oklch(0.98 0.018 75)",
    items: [
      "AI Caption & Content Generator",
      "Auto Content Planner",
      "Performance Predictions",
      "Actionable Growth Tips",
    ],
  },
  {
    icon: Layers,
    title: "All Your Socials, One Place",
    body: "Manage, analyze, and grow across all your platforms from a single, easy-to-use workspace.",
    accent: "var(--icon-green)",
    hex: "oklch(0.93 0.05 155)",
    panel: "oklch(0.975 0.022 158)",
    items: [
      "Multi-Platform Publishing",
      "Unified Analytics Dashboard",
      "Team Collaboration",
      "100+ Powerful Integrations",
    ],
  },
];

const SPARKS = [
  { top: "16%", left: "13%", size: 14, color: "oklch(0.5 0.22 278)" },
  { top: "27%", left: "24%", size: 14, color: "oklch(0.72 0.17 55)" },
  { top: "31%", left: "6%", size: 6, color: "oklch(0.7 0.12 285)" },
  { top: "22%", right: "22%", size: 13, color: "oklch(0.65 0.2 10)" },
  { top: "29%", right: "12%", size: 7, color: "oklch(0.62 0.18 285)" },
];

export function WhyGrodo() {
  return (
    <section className="relative overflow-hidden bg-surface-tint py-20 lg:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
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
              animationDelay: `${i * 0.8}s`,
            }}
          >
            <path
              fill={s.color}
              d="M12 0c.6 6.2 5.2 10.8 12 12-6.8 1.2-11.4 5.8-12 12-.6-6.2-5.2-10.8-12-12C6.8 10.8 11.4 6.2 12 0"
            />
          </svg>
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        <Reveal className="text-center">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-[0.85rem] font-bold text-primary">
            Why Grodo?
          </span>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="mt-6 text-center text-[2.4rem] font-extrabold tracking-[-0.04em] sm:text-[3.4rem]">
            Why <span className="text-primary-light">Grodo?</span>
          </h2>
        </Reveal>

        <Reveal delay={130}>
          <p className="mx-auto mt-4 max-w-[620px] text-center text-[1.05rem] leading-[1.55] text-muted-foreground">
            Grodo is built for one mission — to help you beat the algorithm,
            grow from zero, and make every post count.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <article className="h-full rounded-2xl border border-border/70 bg-card px-7 pb-7 pt-9 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_oklch(0.35_0.16_280/0.5)]">
                <span
                  className="float-orb mx-auto flex h-[86px] w-[86px] items-center justify-center"
                  style={{ backgroundColor: c.hex, clipPath: HEX, animationDelay: `${i * 0.8}s` }}
                >
                  <c.icon className="h-9 w-9" style={{ color: c.accent }} strokeWidth={2.2} />
                </span>

                <h3 className="mt-6 text-[1.35rem] font-extrabold tracking-[-0.025em]">
                  {c.title}
                </h3>
                <span
                  className="mx-auto mt-3 block h-[3px] w-9 rounded-full"
                  style={{ backgroundColor: c.accent }}
                />

                <p className="mt-5 text-[0.95rem] leading-[1.65] text-muted-foreground">
                  {c.body}
                </p>

                <ul
                  className="mt-7 space-y-3 rounded-xl px-5 py-5 text-left"
                  style={{ backgroundColor: c.panel }}
                >
                  {c.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.92rem]">
                      <CheckCircle2
                        className="h-[18px] w-[18px] shrink-0"
                        style={{ color: c.accent }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
