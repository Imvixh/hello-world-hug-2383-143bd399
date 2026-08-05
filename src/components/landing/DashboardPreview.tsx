import {
  Bot,
  Calendar,
  CalendarDays,
  Home,
  Inbox,
  LayoutGrid,
  LineChart,
  Settings,
} from "lucide-react";

import avatar1 from "@/assets/avatar-1.jpg";

import { GrodoMark } from "./GrodoMark";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "./BrandIcons";

const NAV = [
  { label: "Home", icon: Home, active: true },
  { label: "Content", icon: LayoutGrid, active: false },
  { label: "Analytics", icon: LineChart, active: false },
  { label: "Planner", icon: CalendarDays, active: false },
  { label: "Inbox", icon: Inbox, active: false },
  { label: "AI Assistant", icon: Bot, active: false, badge: "New" },
  { label: "Settings", icon: Settings, active: false },
];

const STATS = [
  { label: "Total Reach", value: "128.7K", delta: "12.5%" },
  { label: "Engagement", value: "7.6K", delta: "18.3%" },
  { label: "Content Score", value: "85", delta: "9.2%" },
  { label: "Followers", value: "24.5K", delta: "7.1%" },
];

export function DashboardPreview() {
  return (
    <div className="mx-auto w-full max-w-[1180px] overflow-hidden rounded-t-[20px] border border-border/70 bg-card shadow-[var(--shadow-app)]">
      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-[200px] shrink-0 border-r border-border/70 px-3 py-5 md:block">
          <div className="mb-5 flex items-center gap-2 px-2">
            <GrodoMark className="h-5 w-5" id="grodo-mark-dash" />
            <span className="text-[0.95rem] font-extrabold tracking-tight">
              Grodo
            </span>
          </div>
          <ul className="space-y-0.5">
            {NAV.map(({ label, icon: Icon, active, badge }) => (
              <li key={label}>
                <span
                  className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.8rem] font-medium ${
                    active
                      ? "bg-primary-soft text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                  {badge ? (
                    <em className="ml-auto rounded-md bg-primary-soft px-1.5 py-0.5 text-[0.6rem] font-semibold not-italic text-primary">
                      {badge}
                    </em>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* main */}
        <div className="min-w-0 flex-1 px-5 py-5 sm:px-7">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-[1.05rem] font-bold tracking-tight">
                Welcome back, Ankit 👋
              </h3>
              <p className="mt-0.5 text-[0.75rem] text-muted-foreground">
                Here's what's happening with your content today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-[0.72rem] text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                May 20 – May 26, 2024
                <span aria-hidden="true">⌄</span>
              </span>
              <img
                src={avatar1}
                alt=""
                width={512}
                height={512}
                loading="lazy"
                className="h-7 w-7 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border/80 bg-card p-3.5 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
              >
                <p className="text-[0.72rem] text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-1.5 flex items-baseline gap-2 text-[1.25rem] font-bold tracking-tight">
                  {s.value}
                  <span className="text-[0.65rem] font-semibold text-icon-green">
                    ▲ {s.delta}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            <div className="rounded-xl border border-border/80 bg-card p-4">
              <p className="text-[0.85rem] font-bold">AI Content Score</p>
              <p className="mt-1 text-[0.72rem] text-muted-foreground">
                Get AI-powered insights to improve your content performance.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-1.5 flex-1 rounded-full bg-secondary">
                  <div className="h-full w-[85%] rounded-full bg-primary" />
                </div>
                <span className="text-[0.75rem] font-semibold">85/100</span>
              </div>
            </div>

            <div className="rounded-xl border border-border/80 bg-card p-4">
              <div className="flex items-center justify-between">
                <p className="text-[0.85rem] font-bold">Platform Performance</p>
                <span className="rounded-md border border-border px-2 py-1 text-[0.65rem] font-medium text-muted-foreground">
                  View all
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2.5">
                {[
                  InstagramIcon,
                  FacebookIcon,
                  TikTokIcon,
                  LinkedInIcon,
                  YouTubeIcon,
                  XIcon,
                ].map((Icon, i) => (
                  <Icon key={i} className="h-6 w-6" />
                ))}
              </div>
              <svg
                viewBox="0 0 400 70"
                className="mt-3 h-[70px] w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="oklch(0.55 0.2 285)"
                      stopOpacity="0.35"
                    />
                    <stop
                      offset="100%"
                      stopColor="oklch(0.55 0.2 285)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M0 55 L50 46 L100 52 L150 30 L200 38 L250 20 L300 28 L350 12 L400 18 L400 70 L0 70 Z"
                  fill="url(#spark)"
                />
                <path
                  d="M0 55 L50 46 L100 52 L150 30 L200 38 L250 20 L300 28 L350 12 L400 18"
                  fill="none"
                  stroke="oklch(0.5 0.22 280)"
                  strokeWidth="1.6"
                />
                {[
                  [50, 46],
                  [100, 52],
                  [150, 30],
                  [200, 38],
                  [250, 20],
                  [300, 28],
                  [350, 12],
                ].map(([x, y]) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={y}
                    r="2.4"
                    fill="oklch(0.4 0.22 280)"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
