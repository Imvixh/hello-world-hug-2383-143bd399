import {
  BarChart3,
  Bot,
  CalendarCheck,
  CalendarDays,
  CalendarRange,
  Check,
  ChevronLeft,
  Copy,
  Hash,
  Heart,
  Home,
  Inbox,
  LayoutGrid,
  LineChart,
  MessageCircle,
  PenLine,
  Settings,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { FacebookIcon, InstagramIcon, TikTokIcon } from "./BrandIcons";
import { GrodoMark } from "./GrodoMark";
import { RevealDir } from "./RevealDir";

/* ------------------------------------------------------------------ */
/* shared mock app chrome                                              */
/* ------------------------------------------------------------------ */

const RAIL = [Home, LayoutGrid, LineChart, CalendarDays, Inbox, Bot, Settings];

function MockApp({
  title,
  back = false,
  right,
  children,
}: {
  title: string;
  back?: boolean;
  right?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-float)]">
      <div className="flex">
        <aside className="hidden w-[42px] shrink-0 flex-col items-center gap-3.5 border-r border-border/70 py-3.5 sm:flex">
          <GrodoMark className="h-4 w-4" id={`mini-${title.replace(/\s/g, "")}`} />
          {RAIL.map((Icon, i) => (
            <Icon
              key={i}
              className={`h-3.5 w-3.5 ${i === 0 ? "text-primary" : "text-muted-foreground/60"}`}
            />
          ))}
        </aside>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
            {back ? (
              <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground" />
            ) : null}
            <span className="text-[0.82rem] font-bold tracking-tight">{title}</span>
            {right ? <span className="ml-auto">{right}</span> : null}
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Bar({ value, tint }: { value: number; tint: string }) {
  return (
    <span className="h-[5px] flex-1 overflow-hidden rounded-full bg-secondary">
      <span
        className="block h-full rounded-full"
        style={{ width: `${value}%`, backgroundColor: tint }}
      />
    </span>
  );
}

function Ring({
  value,
  label,
  color,
  size = 84,
}: {
  value: number;
  label: string;
  color: string;
  size?: number;
}) {
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <span className="relative inline-flex" style={{ width: size, height: size }}>
      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" strokeWidth="8" stroke="var(--secondary)" />
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          stroke={color}
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <span className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[1.05rem] font-extrabold leading-none">{label}</span>
        <span className="mt-0.5 text-[0.55rem] text-muted-foreground">/100</span>
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* individual previews                                                 */
/* ------------------------------------------------------------------ */

function ScorePreview() {
  const rows = [
    { label: "Hook", value: 86 },
    { label: "Relevance", value: 82 },
    { label: "Clarity", value: 88 },
    { label: "Engagement", value: 90 },
    { label: "Hashtags", value: 78 },
  ];
  const tips = [
    { title: "Add a stronger hook", body: "Catch attention in the first 2 seconds." },
    { title: "Try adding a question", body: "Questions increase comments." },
    { title: "Use more relevant hashtags", body: "Add 3–5 more niche hashtags." },
  ];
  return (
    <MockApp title="AI Content Score">
      <div className="grid gap-3 lg:grid-cols-[1.15fr_1fr]">
        <div className="rounded-xl border border-border/70 p-3.5">
          <div className="flex items-center gap-3">
            <Ring value={85} label="85" color="var(--icon-green)" />
            <div>
              <p className="text-[0.75rem] font-semibold">Great work! 🎉</p>
              <p className="mt-1 text-[0.66rem] leading-[1.45] text-muted-foreground">
                Your content has a high chance of performing well.
              </p>
            </div>
          </div>
          <p className="mt-3 text-[0.66rem] font-semibold text-muted-foreground">
            Score Breakdown
          </p>
          <ul className="mt-2 space-y-1.5">
            {rows.map((r) => (
              <li key={r.label} className="flex items-center gap-2">
                <span className="w-[62px] shrink-0 text-[0.62rem] text-muted-foreground">
                  {r.label}
                </span>
                <Bar
                  value={r.value}
                  tint={r.value >= 80 ? "var(--icon-green)" : "var(--icon-orange)"}
                />
                <span className="w-5 text-right text-[0.62rem] text-muted-foreground">
                  {r.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border/70 p-3.5">
          <p className="text-[0.7rem] font-semibold">Top Suggestions</p>
          <ul className="mt-2.5 space-y-2.5">
            {tips.map((t) => (
              <li key={t.title} className="flex gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary-soft">
                  <Sparkles className="h-3 w-3 text-primary" />
                </span>
                <span>
                  <span className="block text-[0.64rem] font-semibold">{t.title}</span>
                  <span className="block text-[0.6rem] leading-[1.4] text-muted-foreground">
                    {t.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MockApp>
  );
}

function CaptionPreview() {
  const chips = ["All", "Short", "Engaging", "Funny", "Professional"];
  const results = [
    {
      body: "Sunrise + coffee = the perfect start ☕🌄 What's your morning fuel?",
      best: true,
    },
    { body: "Morning views like these hit different. Grateful for little moments. 🌿", best: false },
  ];
  return (
    <MockApp title="AI Caption Generator">
      <div className="flex gap-2">
        <span className="flex-1 rounded-lg border border-border/70 px-3 py-2 text-[0.66rem] leading-[1.4] text-muted-foreground">
          A beautiful sunrise over the mountains with a cup of coffee.
        </span>
        <span className="cta-gradient inline-flex shrink-0 items-center rounded-lg px-3 py-2 text-[0.66rem] font-semibold text-primary-foreground">
          Generate
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {chips.map((c, i) => (
          <span
            key={c}
            className={`rounded-md px-2 py-1 text-[0.6rem] font-medium ${
              i === 0 ? "bg-primary-soft text-primary" : "text-muted-foreground"
            }`}
          >
            {c}
          </span>
        ))}
      </div>
      <ul className="mt-2 space-y-2">
        {results.map((r, i) => (
          <li
            key={i}
            className="flex items-start gap-2 rounded-lg border border-border/70 p-2.5"
          >
            <span className="text-[0.62rem] font-semibold text-muted-foreground">
              {i + 1}
            </span>
            <span className="flex-1 text-[0.66rem] leading-[1.45]">{r.body}</span>
            {r.best ? (
              <span className="shrink-0 rounded-md bg-icon-green/12 px-1.5 py-0.5 text-[0.55rem] font-semibold text-icon-green">
                Best match
              </span>
            ) : null}
            <span className="flex shrink-0 gap-1.5 text-muted-foreground">
              <Copy className="h-3 w-3" />
              <Heart className="h-3 w-3" />
              <MessageCircle className="h-3 w-3" />
            </span>
          </li>
        ))}
      </ul>
    </MockApp>
  );
}

function HashtagPreview() {
  const tags = [
    { tag: "#travelphotography", score: 96 },
    { tag: "#wanderlust", score: 95 },
    { tag: "#naturelovers", score: 92 },
    { tag: "#sunrisemoments", score: 87 },
  ];
  const side = ["#trips", "#explore", "#asiplore", "#to go"];
  return (
    <MockApp title="Smart Hashtag Generator" back>
      <div className="flex gap-2">
        <span className="flex-1 rounded-lg border border-border/70 px-3 py-2 text-[0.66rem] text-muted-foreground">
          Travel photography
        </span>
        <span className="cta-gradient inline-flex shrink-0 items-center rounded-lg px-3 py-2 text-[0.66rem] font-semibold text-primary-foreground">
          Generate
        </span>
      </div>
      <div className="mt-3 flex gap-4 border-b border-border/70 pb-2">
        {["Top Hashtags", "Trending", "Niche", "All"].map((t, i) => (
          <span
            key={t}
            className={`text-[0.62rem] font-medium ${
              i === 0 ? "border-b-2 border-primary pb-1.5 text-primary" : "text-muted-foreground"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
        <ul className="space-y-1.5">
          {tags.map((t) => (
            <li
              key={t.tag}
              className="flex items-center justify-between rounded-lg border border-border/70 px-2.5 py-1.5"
            >
              <span className="text-[0.64rem] font-medium">{t.tag}</span>
              <span className="flex items-center gap-1 text-[0.58rem] font-semibold text-icon-green">
                <span className="h-1.5 w-1.5 rounded-full bg-icon-green" />
                {t.score}
              </span>
            </li>
          ))}
        </ul>
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {side.map((s) => (
              <span
                key={s}
                className="rounded-md bg-secondary px-1.5 py-1 text-[0.55rem] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="rounded-xl border border-border/70 p-2.5">
            <p className="text-[0.62rem] font-semibold">Hashtag Performance</p>
            <div className="mt-2 flex items-center gap-2.5">
              <Ring value={87} label="87" color="var(--icon-orange)" size={62} />
              <ul className="space-y-1 text-[0.55rem] text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-icon-green" /> High 62%
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-icon-orange" /> Medium 28%
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-destructive" /> Low 10%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MockApp>
  );
}

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HEAT = [
  [1, 1, 2, 3, 2, 4, 3, 2],
  [1, 2, 2, 4, 3, 3, 2, 1],
  [2, 1, 3, 4, 5, 4, 3, 2],
  [1, 2, 3, 3, 4, 5, 3, 2],
  [1, 1, 2, 3, 3, 4, 2, 1],
  [2, 2, 3, 2, 3, 3, 2, 1],
  [1, 1, 2, 2, 3, 2, 2, 1],
];

function TimePreview() {
  return (
    <MockApp title="Best Time to Post">
      <p className="text-[0.64rem] text-muted-foreground">
        We analyze your audience activity to find the best time to post.
      </p>
      <div className="relative mt-3 flex gap-2">
        <ul className="space-y-[5px] pt-[2px] text-[0.55rem] text-muted-foreground">
          {DAYS.map((d) => (
            <li key={d} className="h-[18px] leading-[18px]">
              {d}
            </li>
          ))}
        </ul>
        <div className="flex-1 space-y-[5px]">
          {HEAT.map((row, ri) => (
            <div key={ri} className="flex gap-[5px]">
              {row.map((v, ci) => (
                <span
                  key={ci}
                  className="h-[18px] flex-1 rounded-[3px]"
                  style={{
                    backgroundColor: `oklch(${0.97 - v * 0.09} ${0.02 + v * 0.045} 288)`,
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        <span className="pointer-events-none absolute bottom-[26%] left-[52%] rounded-lg bg-foreground px-2.5 py-1.5 text-[0.55rem] leading-[1.4] text-background">
          Wednesday 6:00 PM
          <br />
          High engagement
        </span>
      </div>
      <div className="mt-2 flex justify-between pl-8 text-[0.55rem] text-muted-foreground">
        {["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </MockApp>
  );
}

function PlannerPreview() {
  const cells = [
    { day: 29, muted: true },
    { day: 30, muted: true },
    { day: 1, post: { time: "10:00 AM", tint: "oklch(0.96 0.03 60)", icons: 2 } },
    { day: 2 },
    { day: 3 },
    { day: 4, post: { time: "", tint: "oklch(0.96 0.02 290)", icons: 0 } },
    { day: 5 },
    { day: 8, post: { time: "12:30 AM", tint: "oklch(0.95 0.03 250)", icons: 1 } },
    { day: 8 },
    { day: 9 },
    { day: 10, post: { time: "12:30 AM", tint: "oklch(0.95 0.035 155)", icons: 1 } },
    { day: 11 },
    { day: 12, post: { time: "9:15 AM", tint: "oklch(0.95 0.035 350)", icons: 1 } },
    { day: 12 },
  ];
  return (
    <MockApp
      title="Content Planner"
      back
      right={
        <span className="flex gap-1">
          <span className="rounded-md px-2 py-1 text-[0.58rem] text-muted-foreground">
            Week
          </span>
          <span className="rounded-md bg-primary-soft px-2 py-1 text-[0.58rem] font-semibold text-primary">
            Month
          </span>
        </span>
      }
    >
      <div className="grid grid-cols-7 gap-1.5 border-b border-border/70 pb-2 text-[0.58rem] font-semibold text-muted-foreground">
        {DAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1.5">
        {cells.map((c, i) => (
          <div
            key={i}
            className="min-h-[46px] rounded-lg border border-border/60 p-1"
          >
            <span
              className={`text-[0.55rem] ${c.muted ? "text-muted-foreground/50" : "text-muted-foreground"}`}
            >
              {c.day}
            </span>
            {c.post ? (
              <span
                className="mt-1 flex flex-col gap-0.5 rounded-md px-1 py-0.5"
                style={{ backgroundColor: c.post.tint }}
              >
                <span className="text-[0.5rem] font-semibold">{c.post.time}</span>
                <span className="flex gap-0.5">
                  {c.post.icons > 0 ? <InstagramIcon className="h-2.5 w-2.5" /> : null}
                  {c.post.icons > 1 ? <TikTokIcon className="h-2.5 w-2.5" /> : null}
                </span>
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </MockApp>
  );
}

function AnalyticsPreview() {
  const stats = [
    { label: "Total Reach", value: "128.7K", delta: "12.5%" },
    { label: "Engagement", value: "7.6K", delta: "18.3%" },
    { label: "Content Score", value: "85", delta: "9.2%" },
  ];
  return (
    <MockApp
      title="Analytics Dashboard"
      right={
        <span className="text-[0.58rem] text-muted-foreground">
          May 20 – May 26, 2024
        </span>
      }
    >
      <div className="grid grid-cols-3 gap-2">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/70 p-2.5">
            <p className="text-[0.55rem] text-muted-foreground">{s.label}</p>
            <p className="mt-1 flex items-baseline gap-1.5">
              <span className="text-[0.95rem] font-extrabold">{s.value}</span>
              <span className="text-[0.55rem] font-semibold text-icon-green">
                ▲ {s.delta}
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-border/70 p-3">
        <p className="text-[0.62rem] font-semibold">Performance Overview</p>
        <svg viewBox="0 0 320 90" className="mt-2 h-[90px] w-full">
          <defs>
            <linearGradient id="perf-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.58 0.222 281 / 0.25)" />
              <stop offset="100%" stopColor="oklch(0.58 0.222 281 / 0)" />
            </linearGradient>
          </defs>
          <path
            d="M0 70 L40 58 L80 64 L120 40 L160 46 L200 22 L240 44 L280 30 L320 38 L320 90 L0 90 Z"
            fill="url(#perf-fill)"
          />
          <path
            d="M0 70 L40 58 L80 64 L120 40 L160 46 L200 22 L240 44 L280 30 L320 38"
            fill="none"
            stroke="var(--primary-light)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {[
            [40, 58],
            [120, 40],
            [200, 22],
            [280, 30],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="3" fill="var(--primary-light)" />
          ))}
        </svg>
      </div>
    </MockApp>
  );
}

/* ------------------------------------------------------------------ */
/* section                                                             */
/* ------------------------------------------------------------------ */

type Block = {
  icon: LucideIcon;
  tint: string;
  title: string;
  body: string;
  points: string[];
  preview: () => ReactNode;
  /** preview on the right when true */
  previewRight: boolean;
};

const BLOCKS: Block[] = [
  {
    icon: Sparkles,
    tint: "var(--icon-violet)",
    title: "AI Content Score",
    body: "Get an AI-powered score and actionable tips to improve your content before you post.",
    points: [
      "Score based on 10+ factors",
      "Content improvement suggestions",
      "Audience match analysis",
    ],
    preview: () => <ScorePreview />,
    previewRight: true,
  },
  {
    icon: PenLine,
    tint: "var(--icon-indigo)",
    title: "AI Caption Generator",
    body: "Generate engaging captions tailored to your audience and platform.",
    points: [
      "1000+ caption ideas in seconds",
      "Multiple tones and styles",
      "Platform-optimized captions",
    ],
    preview: () => <CaptionPreview />,
    previewRight: false,
  },
  {
    icon: Hash,
    tint: "var(--icon-purple)",
    title: "Smart Hashtag Generator",
    body: "Find high-performing hashtags to increase reach and engagement.",
    points: [
      "AI-powered hashtag suggestions",
      "Niche, trending & relevant tags",
      "Analyze hashtag performance",
    ],
    preview: () => <HashtagPreview />,
    previewRight: true,
  },
  {
    icon: CalendarCheck,
    tint: "var(--icon-orange)",
    title: "Best Time to Post",
    body: "Post at the right time. Grodo analyzes your audience to find your golden hours.",
    points: [
      "Audience activity heatmap",
      "Personalized time recommendations",
      "Increase reach and engagement",
    ],
    preview: () => <TimePreview />,
    previewRight: false,
  },
  {
    icon: CalendarRange,
    tint: "var(--icon-pink)",
    title: "Content Planner",
    body: "Plan, organize, and schedule your content across all platforms.",
    points: ["Visual calendar view", "Drag & drop scheduling", "Bulk scheduling"],
    preview: () => <PlannerPreview />,
    previewRight: true,
  },
  {
    icon: BarChart3,
    tint: "var(--icon-blue)",
    title: "Analytics Dashboard",
    body: "Track performance, measure growth, and get insights that actually matter.",
    points: ["Real-time analytics", "Custom reports", "Export data"],
    preview: () => <AnalyticsPreview />,
    previewRight: false,
  },
];

function Copyside({ block }: { block: Block }) {
  return (
    <div className="p-6 lg:p-8">
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: block.tint }}
      >
        <block.icon className="h-5 w-5 text-primary-foreground" />
      </span>
      <h3 className="mt-4 text-[1.25rem] font-extrabold tracking-[-0.03em]">
        {block.title}
      </h3>
      <p className="mt-3 max-w-[330px] text-[0.9rem] leading-[1.6] text-muted-foreground">
        {block.body}
      </p>
      <ul className="mt-5 space-y-2.5">
        {block.points.map((p) => (
          <li key={p} className="flex items-center gap-2.5 text-[0.85rem]">
            <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
            {p}
          </li>
        ))}
      </ul>
      <a
        href="#features"
        className="group mt-6 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-primary"
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
  );
}

export function FeatureShowcase() {
  return (
    <section className="bg-surface-tint pb-20 lg:pb-24">
      <div className="mx-auto max-w-[1400px] space-y-6 px-6 lg:px-14">
        {BLOCKS.map((block, i) => (
          <RevealDir key={block.title} direction={i % 2 === 0 ? "left" : "right"}>
            <article className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-card)]">
              <div className="grid items-center gap-4 lg:grid-cols-2">
                {block.previewRight ? (
                  <>
                    <Copyside block={block} />
                    <div className="p-4 lg:p-6">{block.preview()}</div>
                  </>
                ) : (
                  <>
                    <div className="order-2 p-4 lg:order-1 lg:p-6">
                      {block.preview()}
                    </div>
                    <div className="order-1 lg:order-2">
                      <Copyside block={block} />
                    </div>
                  </>
                )}
              </div>
            </article>
          </RevealDir>
        ))}
      </div>
    </section>
  );
}
