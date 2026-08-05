import {
  BarChart2,
  Camera,
  Check,
  Dumbbell,
  Heart,
  PlaySquare,
  Plane,
  Rocket,
  Smile,
  Sparkle,
  Star,
} from "lucide-react";
import type { ReactNode } from "react";

import { QuoteMark } from "./QuoteMark";
import { Reveal } from "./Reveal";

type Quote = {
  body: ReactNode;
  name: string;
  role: string;
  icon: typeof Plane;
  tint: string;
  bg: string;
};

const QUOTES: Quote[] = [
  {
    body: (
      <>
        Grodo literally changed the game for me. The AI caption and hashtag suggestions help my
        travel reels reach 3X more people!
      </>
    ),
    name: "Wanderlust Sam",
    role: "Travel Creator",
    icon: Plane,
    tint: "var(--icon-violet)",
    bg: "oklch(0.95 0.03 288)",
  },
  {
    body: (
      <>
        As a gymnast, I need my content to stand out. Grodo helps me post at the{" "}
        <strong className="font-bold text-foreground">perfect time</strong> with the{" "}
        <strong className="font-bold text-foreground">right hashtags</strong>. Love it!
      </>
    ),
    name: "FlipWithAva",
    role: "Gymnast & Athlete",
    icon: Dumbbell,
    tint: "var(--icon-orange)",
    bg: "oklch(0.96 0.03 60)",
  },
  {
    body: (
      <>
        Grodo's AI Content Score is a lifesaver. Now I know exactly what works and my engagement has
        never been better.
      </>
    ),
    name: "Reel Karti Kudi",
    role: "Content Creator",
    icon: PlaySquare,
    tint: "var(--icon-green)",
    bg: "oklch(0.94 0.04 158)",
  },
  {
    body: (
      <>
        The analytics dashboard is 🔥. I understand my audience so much better and grow every single
        week.
      </>
    ),
    name: "Digital Dhruv",
    role: "Tech & Review Creator",
    icon: BarChart2,
    tint: "var(--icon-orange)",
    bg: "oklch(0.96 0.035 80)",
  },
  {
    body: (
      <>
        From planning to posting, everything is in one place.{" "}
        <strong className="font-bold text-foreground">Grodo saves me hours every week</strong> so I
        can focus on creating.
      </>
    ),
    name: "LensOfRiya",
    role: "Vlog Creator",
    icon: Camera,
    tint: "var(--icon-blue)",
    bg: "oklch(0.94 0.03 250)",
  },
  {
    body: (
      <>
        I make comedy skits and timing is{" "}
        <strong className="font-bold text-foreground">everything</strong>. Grodo helps me go viral
        consistently. Total game-changer!
      </>
    ),
    name: "Comedy Chintu",
    role: "Comedy Creator",
    icon: Smile,
    tint: "var(--icon-pink)",
    bg: "oklch(0.95 0.035 350)",
  },
];

function Stars() {
  return (
    <div className="mt-3 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-surface-tint pb-20 pt-20 lg:pb-24 lg:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <Heart className="twinkle absolute left-[10%] top-[7%] h-7 w-7 text-primary-light/60" />
        <Heart
          className="twinkle absolute right-[13%] top-[13%] h-7 w-7 text-primary-light/50"
          style={{ animationDelay: "1.5s" }}
        />
        <Sparkle className="twinkle absolute left-[17%] top-[5%] h-5 w-5 fill-primary-light/70 text-primary-light/70" />
        <Sparkle
          className="twinkle absolute right-[9%] top-[9%] h-4 w-4 fill-icon-orange/70 text-icon-orange/70"
          style={{ animationDelay: "0.9s" }}
        />
        <span className="absolute left-[16%] top-[12%] h-2 w-2 rounded-full bg-primary-light/50" />
        <span className="absolute right-[20%] top-[6%] h-2 w-2 rounded-full bg-primary-light/50" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        <Reveal className="text-center">
          <span className="inline-flex rounded-full bg-primary-soft px-4 py-1.5 text-[0.82rem] font-semibold text-primary">
            Loved by creators
          </span>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="mt-5 text-center text-[2.1rem] font-extrabold tracking-[-0.035em] sm:text-[3rem]">
            Our customers love <span className="text-primary-light">Grodo</span>
          </h2>
        </Reveal>

        <Reveal delay={130}>
          <p className="mx-auto mt-3 max-w-[620px] text-center text-[1rem] leading-[1.55] text-muted-foreground">
            Creators from all walks of life are growing faster, creating smarter, and reaching more
            people with Grodo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 70}>
              <article className="h-full rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-28px_oklch(0.35_0.16_280/0.45)]">
                <QuoteMark className="h-[22px] w-[28px] text-primary-light" />

                <p className="mt-3 text-[0.93rem] leading-[1.65] text-foreground/85">{q.body}</p>
                <Stars />
                <div className="mt-5 flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: q.bg }}
                  >
                    <q.icon className="h-5 w-5" style={{ color: q.tint }} />
                  </span>
                  <span>
                    <span className="block text-[0.92rem] font-bold">{q.name}</span>
                    <span className="block text-[0.8rem] text-muted-foreground">{q.role}</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="banner-gradient relative mt-8 overflow-hidden rounded-2xl px-7 py-8 lg:px-10">
            <Sparkle
              aria-hidden="true"
              className="twinkle absolute right-[6%] top-8 h-6 w-6 fill-primary-foreground/80 text-primary-foreground/80"
            />
            <Sparkle
              aria-hidden="true"
              className="twinkle absolute right-[10%] bottom-7 h-4 w-4 fill-primary-foreground/70 text-primary-foreground/70"
              style={{ animationDelay: "1.1s" }}
            />

            <div className="flex flex-col items-center gap-7 lg:flex-row">
              <span className="float-orb flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
                <Rocket className="h-9 w-9 text-primary-foreground" />
              </span>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-[1.5rem] font-extrabold leading-[1.2] tracking-[-0.03em] text-primary-foreground">
                  Join thousands of creators
                  <br className="hidden lg:block" /> growing with Grodo
                </h3>
                <p className="mt-2.5 text-[0.88rem] text-primary-foreground/80">
                  Start your 14-day free trial. No credit card required.
                </p>
              </div>

              <div className="w-full lg:max-w-[430px]">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-2 sm:flex-row"
                >
                  <input
                    type="email"
                    aria-label="Enter your email"
                    placeholder="Enter your email..."
                    className="min-w-0 flex-1 rounded-lg bg-card px-4 py-3 text-[0.9rem] outline-none placeholder:text-muted-foreground"
                  />
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary-deep px-5 py-3 text-[0.9rem] font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Get started for free <span aria-hidden="true">→</span>
                  </button>
                </form>
                <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.78rem] text-primary-foreground/85 lg:justify-start">
                  {["No credit card required", "14-day free trial", "Cancel anytime"].map((t) => (
                    <li key={t} className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
