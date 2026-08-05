import { Link, createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  CalendarCheck,
  Eye,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import {
  AppleIcon,
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/landing/BrandIcons";
import { Footer } from "@/components/landing/Footer";
import { GrodoMark } from "@/components/landing/GrodoMark";
import { Header } from "@/components/landing/Header";
import { RevealDir } from "@/components/landing/RevealDir";

const title = "Log in — Grodo AI Social Media Workspace";
const description =
  "Log in to your Grodo account and keep planning, creating, and growing your social media with AI.";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

const HIGHLIGHTS = [
  {
    icon: TrendingUp,
    title: "AI-Powered Insights",
    body: "Get smart recommendations to improve your content performance.",
  },
  {
    icon: CalendarCheck,
    title: "Plan & Schedule",
    body: "Plan, organize and schedule your posts across all platforms.",
  },
  {
    icon: BarChart3,
    title: "Track Performance",
    body: "Monitor growth, engagement and reach with beautiful analytics.",
  },
];

const SECURITY = [
  { icon: Lock, title: "Secure & Encrypted", body: "End-to-end data protection" },
  { icon: ShieldCheck, title: "Privacy First", body: "We never share your data" },
  { icon: ShieldCheck, title: "GDPR Compliant", body: "Built to meet global standards" },
  { icon: Sparkles, title: "99.9% Uptime", body: "Reliable platform always available" },
];

const PLATFORMS = [
  { Icon: InstagramIcon, label: "Instagram", value: "48.2%" },
  { Icon: YouTubeIcon, label: "YouTube", value: "24.6%" },
  { Icon: TikTokIcon, label: "TikTok", value: "18.4%" },
  { Icon: FacebookIcon, label: "Facebook", value: "8.8%" },
];

function FloatingDashboard() {
  return (
    <div aria-hidden="true" className="relative mt-14 hidden h-[290px] lg:block">
      <div className="absolute left-0 top-0 flex w-[330px] overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-app)]">
        <div className="flex w-[34px] flex-col items-center gap-3 bg-foreground py-3">
          <GrodoMark className="h-4 w-4" id="login-mark" />
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="h-3 w-3 rounded-[4px] bg-background/25" />
          ))}
        </div>
        <div className="flex-1 p-3.5">
          <p className="text-[0.78rem] font-bold">Dashboard</p>
          <div className="mt-2.5 rounded-xl border border-border/70 p-2.5">
            <p className="text-[0.58rem] text-muted-foreground">Total Reach</p>
            <p className="flex items-baseline gap-1.5">
              <span className="text-[0.95rem] font-extrabold">128.7K</span>
              <span className="text-[0.55rem] font-semibold text-icon-green">
                ▲ 12.5%
              </span>
            </p>
            <svg viewBox="0 0 200 40" className="mt-1.5 h-9 w-full">
              <path
                d="M0 32 L30 24 L60 28 L90 14 L120 20 L150 8 L200 16"
                fill="none"
                stroke="var(--primary-light)"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute left-[150px] top-[62px] w-[210px] rounded-2xl bg-card p-3.5 shadow-[var(--shadow-app)]">
        <p className="text-[0.62rem] font-semibold text-muted-foreground">
          Content Score
        </p>
        <div className="mt-1.5 flex items-center gap-2.5">
          <span className="relative inline-flex h-[54px] w-[54px]">
            <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
              <circle cx="40" cy="40" r="34" fill="none" strokeWidth="8" stroke="var(--secondary)" />
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                stroke="var(--icon-green)"
                strokeDasharray={2 * Math.PI * 34}
                strokeDashoffset={2 * Math.PI * 34 * 0.15}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[0.8rem] font-extrabold">
              85
            </span>
          </span>
          <p className="text-[0.62rem] font-semibold">Great work! 🎉</p>
        </div>
      </div>

      <div className="absolute left-[22px] top-[150px] w-[200px] rounded-2xl bg-card p-3.5 shadow-[var(--shadow-app)]">
        <p className="text-[0.6rem] font-semibold text-muted-foreground">
          Top Platforms
        </p>
        <ul className="mt-2 space-y-1.5">
          {PLATFORMS.map(({ Icon, label, value }) => (
            <li key={label} className="flex items-center gap-2 text-[0.62rem]">
              <Icon className="h-3.5 w-3.5" />
              {label}
              <span className="ml-auto font-semibold">{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="cta-gradient absolute left-[240px] top-[168px] w-[190px] rounded-2xl p-3.5 text-primary-foreground shadow-[var(--shadow-app)]">
        <p className="text-[0.68rem] font-bold">AI Suggestion</p>
        <p className="mt-1 text-[0.62rem] leading-[1.45] text-primary-foreground/85">
          Best time to post today is 6:00 PM
        </p>
        <span className="mt-2.5 inline-flex rounded-lg bg-card px-2.5 py-1 text-[0.6rem] font-semibold text-primary">
          Schedule Now
        </span>
      </div>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="hero-wash">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-6 py-16 lg:grid-cols-2 lg:px-14 lg:py-20">
          {/* left column */}
          <RevealDir direction="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI Social Media Copilot
            </span>
            <h1 className="mt-6 text-[2.2rem] font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-[2.8rem]">
              Welcome back!
              <br />
              Let&apos;s <span className="text-primary-light">grow</span> together.
            </h1>
            <p className="mt-4 max-w-[420px] text-[0.98rem] leading-[1.6] text-muted-foreground">
              Log in to your Grodo account and continue growing your brand with AI.
            </p>

            <ul className="mt-9 space-y-6">
              {HIGHLIGHTS.map((h) => (
                <li key={h.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                    <h.icon className="h-5 w-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-[0.95rem] font-bold">{h.title}</span>
                    <span className="mt-1 block max-w-[280px] text-[0.85rem] leading-[1.55] text-muted-foreground">
                      {h.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <FloatingDashboard />
          </RevealDir>

          {/* login card */}
          <RevealDir direction="right" delay={80}>
            <div className="rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-app)] sm:p-10">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                <Lock className="h-5 w-5 text-primary" />
              </span>
              <h2 className="mt-5 text-center text-[1.5rem] font-extrabold tracking-[-0.03em]">
                Log in to <span className="text-primary-light">Grodo</span>
              </h2>
              <p className="mt-1.5 text-center text-[0.88rem] text-muted-foreground">
                Enter your details to access your account
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { Icon: GoogleIcon, label: "Continue with Google" },
                  { Icon: AppleIcon, label: "Continue with Apple" },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-border px-5 py-3.5 text-[0.92rem] font-semibold transition-colors hover:bg-secondary"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </button>
                ))}
              </div>

              <div className="my-6 flex items-center gap-4">
                <span className="h-px flex-1 bg-border" />
                <span className="text-[0.82rem] text-muted-foreground">or</span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label
                    htmlFor="login-email"
                    className="block text-[0.85rem] font-semibold"
                  >
                    Email address
                  </label>
                  <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-border px-4 py-3.5 focus-within:border-primary">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      className="min-w-0 flex-1 bg-transparent text-[0.92rem] outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="login-password"
                    className="block text-[0.85rem] font-semibold"
                  >
                    Password
                  </label>
                  <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-border px-4 py-3.5 focus-within:border-primary">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      className="min-w-0 flex-1 bg-transparent text-[0.92rem] outline-none placeholder:text-muted-foreground"
                    />
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-[0.85rem] font-semibold text-primary"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="cta-gradient w-full rounded-xl px-5 py-4 text-[0.98rem] font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Log in
                </button>
              </form>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <label className="flex items-center gap-2.5 text-[0.85rem] text-foreground/80">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border accent-[var(--primary)]"
                  />
                  Remember me
                </label>
                <p className="text-[0.85rem] text-muted-foreground">
                  New to Grodo?{" "}
                  <Link to="/" className="font-semibold text-primary">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </RevealDir>
        </div>

        {/* security strip */}
        <div className="mx-auto max-w-[1400px] px-6 pb-16 lg:px-14 lg:pb-20">
          <RevealDir direction="up">
            <div className="grid gap-6 rounded-3xl border border-border/70 bg-card px-7 py-7 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:items-center">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </span>
                <span>
                  <span className="block text-[1rem] font-bold">
                    Your data is secure with Grodo
                  </span>
                  <span className="mt-1 block max-w-[320px] text-[0.85rem] leading-[1.55] text-muted-foreground">
                    We use enterprise-grade security to protect your data and keep
                    your content safe.
                  </span>
                </span>
              </div>
              {SECURITY.map((s) => (
                <div key={s.title} className="flex gap-3 lg:border-l lg:border-border/70 lg:pl-5">
                  <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <span className="block text-[0.85rem] font-bold">{s.title}</span>
                    <span className="block text-[0.78rem] leading-[1.45] text-muted-foreground">
                      {s.body}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </RevealDir>
        </div>
      </main>
      <Footer />
    </div>
  );
}
