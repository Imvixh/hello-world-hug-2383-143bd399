import { Check, Crown, Info, Send, ShieldCheck, Zap } from "lucide-react";
import { useState } from "react";

import { FacebookIcon, InstagramIcon, YouTubeIcon } from "./BrandIcons";
import { RevealDir } from "./RevealDir";

type Plan = {
  name: string;
  tagline: string;
  icon: typeof Zap;
  monthly: string;
  yearly: string;
  yearlyStrike?: string;
  note?: string;
  featured?: boolean;
  heading: string;
  features: { label: string; badge?: string; info?: boolean }[];
  cta: string;
  ghost?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Free",
    tagline: "For getting started.",
    icon: Send,
    monthly: "₹0",
    yearly: "₹0",
    note: "Forever free",
    heading: "Includes:",
    features: [
      { label: "Connect 1 Social Platform", badge: "1 Platform" },
      { label: "Schedule up to 5 Posts / month" },
      { label: "Basic AI Caption Generator" },
      { label: "Basic Hashtag Suggestions" },
      { label: "Basic Content Score" },
      { label: "Community Support" },
    ],
    cta: "Get Started Free",
    ghost: true,
  },
  {
    name: "Standard",
    tagline: "For creators & small teams.",
    icon: Zap,
    monthly: "₹699",
    yearly: "₹6,000",
    yearlyStrike: "₹7,200",
    featured: true,
    heading: "Everything in Free, plus:",
    features: [
      { label: "Connect All Social Platforms", badge: "All Platforms" },
      { label: "Unlimited Post Scheduling" },
      { label: "AI Caption Generator (Advanced)" },
      { label: "Smart Hashtag Generator" },
      { label: "AI Content Score & Suggestions" },
      { label: "Best Time to Post" },
      { label: "Basic Analytics" },
      { label: "Content Planner" },
      { label: "Email Support" },
    ],
    cta: "Choose Standard",
  },
  {
    name: "Advanced",
    tagline: "For growing brands & pros.",
    icon: Crown,
    monthly: "₹1,299",
    yearly: "₹12,000",
    yearlyStrike: "₹14,400",
    heading: "Everything in Standard, plus:",
    features: [
      { label: "Advanced Analytics & Reports" },
      { label: "Competitor Insights" },
      { label: "AI Content Ideas (Unlimited)" },
      { label: "Viral Score Prediction" },
      { label: "Team Collaboration", badge: "Up to 5 Members" },
      { label: "Custom Branding" },
      { label: "Priority Support", badge: "24/7" },
      { label: "Export Data (CSV, PDF)", info: true },
    ],
    cta: "Choose Advanced",
  },
];

const ASSURANCES = [
  { icon: ShieldCheck, title: "14-Day Money Back", body: "Not satisfied? Get a full refund." },
  { icon: Check, title: "Secure & Safe", body: "Your data is 100% secure." },
  { icon: Info, title: "Cancel Anytime", body: "No long-term commitments." },
  { icon: Zap, title: "AI-Powered Growth", body: "Smarter content. Better reach." },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="relative overflow-hidden bg-surface-tint py-16 lg:py-20">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-14">
        <RevealDir direction="fade" className="text-center">
          <span className="inline-flex rounded-full bg-primary-soft px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
            Pricing
          </span>
          <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[3rem]">
            Simple Plans.{" "}
            <span className="text-primary-light">Powerful Growth.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-[560px] text-[1rem] text-muted-foreground">
            Choose the plan that fits your content journey.
          </p>
        </RevealDir>

        <RevealDir direction="up" delay={80} className="mt-8 flex flex-col items-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex rounded-full border border-border bg-card p-1 shadow-[var(--shadow-card)]"
          >
            {[
              { label: "Monthly", value: false },
              { label: "Yearly (Save 17%)", value: true },
            ].map((opt) => (
              <button
                key={opt.label}
                type="button"
                aria-pressed={yearly === opt.value}
                onClick={() => setYearly(opt.value)}
                className={`rounded-full px-7 py-2.5 text-[0.9rem] font-semibold transition-all duration-300 ${
                  yearly === opt.value
                    ? "cta-gradient text-primary-foreground"
                    : "text-foreground/75 hover:text-primary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-[0.85rem] text-muted-foreground">
            <Info className="h-3.5 w-3.5 text-primary" />
            <span className="font-semibold text-primary">
              {yearly ? "Billed yearly." : "Cancel anytime."}
            </span>
            {yearly ? "Cancel anytime. No hidden fees." : "No hidden fees."}
          </p>
        </RevealDir>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <RevealDir
              key={plan.name}
              direction={i === 0 ? "left" : i === 2 ? "right" : "up"}
              delay={i * 60}
            >
              <article
                className={`relative h-full rounded-3xl bg-card p-7 ${
                  plan.featured
                    ? "border-2 border-primary/60 shadow-[0_28px_60px_-32px_oklch(0.4_0.2_280/0.5)] lg:-mt-3"
                    : "border border-border/70 shadow-[var(--shadow-card)]"
                }`}
              >
                {plan.featured ? (
                  <span className="cta-gradient absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-lg px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-primary-foreground">
                    ★ Most Popular
                  </span>
                ) : null}

                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                  <plan.icon className="h-5 w-5 text-primary" />
                </span>

                <h2 className="mt-5 text-[1.5rem] font-extrabold tracking-[-0.03em]">
                  {plan.name}
                </h2>
                <p className="mt-1 text-[0.85rem] text-muted-foreground">
                  {plan.tagline}
                </p>

                <div className="mt-5 min-h-[74px]">
                  <p
                    key={yearly ? "y" : "m"}
                    className="rv rv-fade flex items-baseline gap-1.5"
                  >
                    <span className="text-[2.4rem] font-extrabold tracking-[-0.04em]">
                      {yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-[0.9rem] text-muted-foreground">
                      {yearly ? "/year" : "/month"}
                    </span>
                  </p>
                  {yearly && plan.yearlyStrike ? (
                    <p className="mt-1 flex items-center gap-2 text-[0.8rem]">
                      <span className="text-muted-foreground line-through">
                        {plan.yearlyStrike}
                      </span>
                      <span className="rounded-md bg-primary-soft px-1.5 py-0.5 font-semibold text-primary">
                        Save 17%
                      </span>
                    </p>
                  ) : null}
                  {plan.note ? (
                    <p className="mt-1 text-[0.8rem] font-medium text-primary">
                      {plan.note}
                    </p>
                  ) : null}
                </div>

                <div className="mt-4 border-t border-border/70 pt-4">
                  <p className="text-[0.82rem] font-medium text-muted-foreground">
                    {plan.heading}
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-start gap-2.5">
                        <span className="mt-[1px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary">
                          <Check
                            className="h-2.5 w-2.5 text-primary-foreground"
                            strokeWidth={4}
                          />
                        </span>
                        <span className="text-[0.85rem] leading-[1.45]">
                          {f.label}
                          {f.badge ? (
                            <em className="ml-1.5 rounded-md bg-primary-soft px-1.5 py-0.5 text-[0.68rem] font-semibold not-italic text-primary">
                              {f.badge}
                            </em>
                          ) : null}
                          {f.info ? (
                            <Info className="ml-1 inline h-3 w-3 text-muted-foreground" />
                          ) : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={`mt-6 w-full rounded-xl px-5 py-3.5 text-[0.95rem] font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${
                    plan.ghost
                      ? "border border-primary/45 text-primary hover:bg-primary-soft"
                      : "cta-gradient text-primary-foreground"
                  }`}
                >
                  {plan.cta}
                </button>

                {plan.ghost ? (
                  <>
                    <div className="mt-6 border-t border-border/70 pt-4 text-center">
                      <p className="text-[0.82rem] text-muted-foreground">
                        Choose your platform
                      </p>
                      <div className="mt-3 flex justify-center gap-4">
                        <InstagramIcon className="h-7 w-7" />
                        <YouTubeIcon className="h-7 w-7" />
                        <FacebookIcon className="h-7 w-7" />
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="mt-3 text-center text-[0.8rem] text-muted-foreground">
                    {yearly ? `${plan.yearly} billed yearly` : `${plan.monthly} billed monthly`}
                  </p>
                )}
              </article>
            </RevealDir>
          ))}
        </div>

        <RevealDir direction="up" delay={80}>
          <ul className="mt-8 grid gap-6 rounded-2xl border border-border/70 bg-card px-7 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {ASSURANCES.map((a) => (
              <li key={a.title} className="flex items-start gap-3">
                <a.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-[0.88rem] font-bold">{a.title}</span>
                  <span className="block text-[0.8rem] text-muted-foreground">
                    {a.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </RevealDir>
      </div>
    </section>
  );
}
