import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  BarChart3,
  CalendarCheck,
  Check,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Sparkles,
  TrendingUp,
  User,
  UserPlus,
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

const title = "Sign up — Grodo AI Social Media Workspace";
const description =
  "Create your Grodo account and start planning, creating, and growing your social media with AI.";

export const Route = createFileRoute("/signup")({
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
  component: SignupPage,
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
          <GrodoMark className="h-4 w-4" id="signup-mark" />
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
              <span className="text-[0.55rem] font-semibold text-icon-green">▲ 12.5%</span>
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
        <p className="text-[0.62rem] font-semibold text-muted-foreground">Content Score</p>
        <div className="mt-1.5 flex items-center gap-2.5">
          <span className="relative inline-flex h-[54px] w-[54px]">
            <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                strokeWidth="8"
                stroke="var(--secondary)"
              />
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
        <p className="text-[0.6rem] font-semibold text-muted-foreground">Top Platforms</p>
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

type Fields = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function passwordChecks(pw: string) {
  return [
    { label: "At least 8 characters", ok: pw.length >= 8 },
    { label: "One uppercase letter", ok: /[A-Z]/.test(pw) },
    { label: "One number", ok: /[0-9]/.test(pw) },
    { label: "One special character", ok: /[^A-Za-z0-9]/.test(pw) },
  ];
}

function SignupPage() {
  const navigate = useNavigate();
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [terms, setTerms] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const checks = passwordChecks(values.password);
  const strength = checks.filter((c) => c.ok).length;

  const errors = useMemo(() => {
    const e: Partial<Record<keyof Fields | "terms", string>> = {};
    if (!values.name.trim()) e.name = "Please enter your full name";
    if (!values.email.trim()) e.email = "Please enter your email address";
    else if (!EMAIL_RE.test(values.email.trim())) e.email = "Enter a valid email address";
    if (!values.password) e.password = "Please create a password";
    else if (checks.some((c) => !c.ok)) e.password = "Password doesn't meet the requirements";
    if (!values.confirm) e.confirm = "Please confirm your password";
    else if (values.confirm !== values.password) e.confirm = "Passwords do not match";
    if (!terms) e.terms = "Please accept the Terms and Privacy Policy";
    return e;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, terms]);

  const show = (k: string) => (touched[k] || submitted) && errors[k as keyof typeof errors];
  const valid = Object.keys(errors).length === 0;

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));
  const blur = (k: string) => () => setTouched((t) => ({ ...t, [k]: true }));

  const fieldClass = (k: string) =>
    `mt-2 flex items-center gap-2.5 rounded-xl border px-4 py-3.5 focus-within:border-primary ${
      show(k) ? "border-destructive" : "border-border"
    }`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length === 0) void navigate({ to: "/onboarding/welcome" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="hero-wash">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 px-6 py-16 lg:grid-cols-2 lg:px-14 lg:py-20">
          <RevealDir direction="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI Social Media Copilot
            </span>
            <h1 className="mt-6 text-[2.2rem] font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-[2.8rem]">
              Create your account
              <br />
              and start to <span className="text-primary-light">grow</span>.
            </h1>
            <p className="mt-4 max-w-[420px] text-[0.98rem] leading-[1.6] text-muted-foreground">
              Sign up for Grodo and bring your content, planning and analytics into one AI
              workspace.
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

          <RevealDir direction="right" delay={80}>
            <div className="rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-app)] sm:p-10">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                <UserPlus className="h-5 w-5 text-primary" />
              </span>
              <h2 className="mt-5 text-center text-[1.5rem] font-extrabold tracking-[-0.03em]">
                Sign up for <span className="text-primary-light">Grodo</span>
              </h2>
              <p className="mt-1.5 text-center text-[0.88rem] text-muted-foreground">
                Create your account in less than a minute
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { Icon: GoogleIcon, label: "Sign up with Google" },
                  { Icon: AppleIcon, label: "Sign up with Apple" },
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

              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="su-name" className="block text-[0.85rem] font-semibold">
                    Full name
                  </label>
                  <div className={fieldClass("name")}>
                    <User className="h-4 w-4 text-muted-foreground" />
                    <input
                      id="su-name"
                      type="text"
                      maxLength={80}
                      value={values.name}
                      onChange={set("name")}
                      onBlur={blur("name")}
                      placeholder="Enter your full name"
                      className="min-w-0 flex-1 bg-transparent text-[0.92rem] outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                  {show("name") ? (
                    <p className="mt-1.5 text-[0.78rem] font-medium text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="su-email" className="block text-[0.85rem] font-semibold">
                    Email address
                  </label>
                  <div className={fieldClass("email")}>
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <input
                      id="su-email"
                      type="email"
                      maxLength={255}
                      value={values.email}
                      onChange={set("email")}
                      onBlur={blur("email")}
                      placeholder="Enter your email"
                      className="min-w-0 flex-1 bg-transparent text-[0.92rem] outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                  {show("email") ? (
                    <p className="mt-1.5 text-[0.78rem] font-medium text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="su-password" className="block text-[0.85rem] font-semibold">
                    Password
                  </label>
                  <div className={fieldClass("password")}>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <input
                      id="su-password"
                      type={showPw ? "text" : "password"}
                      maxLength={128}
                      value={values.password}
                      onChange={set("password")}
                      onBlur={blur("password")}
                      placeholder="Create a password"
                      className="min-w-0 flex-1 bg-transparent text-[0.92rem] outline-none placeholder:text-muted-foreground"
                    />
                    <button
                      type="button"
                      aria-label={showPw ? "Hide password" : "Show password"}
                      onClick={() => setShowPw((s) => !s)}
                      className="text-muted-foreground"
                    >
                      {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>

                  <div className="mt-2.5 flex gap-1.5">
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${
                          i < strength
                            ? strength <= 2
                              ? "bg-icon-orange"
                              : strength === 3
                                ? "bg-icon-blue"
                                : "bg-icon-green"
                            : "bg-secondary"
                        }`}
                      />
                    ))}
                  </div>
                  <ul className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
                    {checks.map((c) => (
                      <li
                        key={c.label}
                        className={`flex items-center gap-1.5 text-[0.74rem] ${
                          c.ok ? "text-icon-green" : "text-muted-foreground"
                        }`}
                      >
                        <Check className="h-3.5 w-3.5 shrink-0" />
                        {c.label}
                      </li>
                    ))}
                  </ul>
                  {show("password") ? (
                    <p className="mt-1.5 text-[0.78rem] font-medium text-destructive">
                      {errors.password}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="su-confirm" className="block text-[0.85rem] font-semibold">
                    Confirm password
                  </label>
                  <div className={fieldClass("confirm")}>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <input
                      id="su-confirm"
                      type={showConfirm ? "text" : "password"}
                      maxLength={128}
                      value={values.confirm}
                      onChange={set("confirm")}
                      onBlur={blur("confirm")}
                      placeholder="Re-enter your password"
                      className="min-w-0 flex-1 bg-transparent text-[0.92rem] outline-none placeholder:text-muted-foreground"
                    />
                    <button
                      type="button"
                      aria-label={showConfirm ? "Hide password" : "Show password"}
                      onClick={() => setShowConfirm((s) => !s)}
                      className="text-muted-foreground"
                    >
                      {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {show("confirm") ? (
                    <p className="mt-1.5 text-[0.78rem] font-medium text-destructive">
                      {errors.confirm}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="flex items-start gap-2.5 text-[0.85rem] leading-[1.5] text-foreground/80">
                    <input
                      type="checkbox"
                      checked={terms}
                      onChange={(e) => {
                        setTerms(e.target.checked);
                        setTouched((t) => ({ ...t, terms: true }));
                      }}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-[var(--primary)]"
                    />
                    <span>
                      I agree to the{" "}
                      <span className="font-semibold text-primary">Terms of Service</span> and{" "}
                      <span className="font-semibold text-primary">Privacy Policy</span>
                    </span>
                  </label>
                  {show("terms") ? (
                    <p className="mt-1.5 text-[0.78rem] font-medium text-destructive">
                      {errors.terms}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className={`w-full rounded-xl px-5 py-4 text-[0.98rem] font-semibold text-primary-foreground transition-transform duration-300 ${
                    valid ? "cta-gradient hover:-translate-y-0.5" : "cta-gradient opacity-60"
                  }`}
                >
                  Create account
                </button>
              </form>

              <p className="mt-5 text-center text-[0.85rem] text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="font-semibold text-primary">
                  Log in
                </Link>
              </p>
            </div>
          </RevealDir>
        </div>
      </main>
      <Footer />
    </div>
  );
}
