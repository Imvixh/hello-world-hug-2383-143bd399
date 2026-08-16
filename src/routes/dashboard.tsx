import { Link, createFileRoute } from "@tanstack/react-router";
import { CalendarDays, ChevronDown, LineChart, Link2, Plus, Sparkles } from "lucide-react";

import { AppShell } from "@/components/app/AppShell";
import { previewUser } from "@/components/app/mockUser";

const title = "Home — Grodo";
const description = "Your Grodo workspace: content, analytics, planning and AI insights.";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const STATS = [
  { label: "Total Reach", value: "0" },
  { label: "Engagement", value: "0" },
  { label: "Content Score", value: "—" },
  { label: "Followers", value: "0" },
];

function DashboardPage() {
  return (
    <AppShell>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="min-w-0">
          <h1 className="truncate text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">
            Welcome back, {previewUser.firstName} 👋
          </h1>
          <p className="mt-1 text-[0.88rem] text-muted-foreground">
            Connect a channel to start seeing your content and performance here.
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-[0.8rem] text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" /> Last 7 days
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* connect banner */}
      <div className="banner-gradient mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-6 py-5 text-primary-foreground sm:flex sm:justify-between">
        <div className="flex min-w-0 items-center gap-3.5">
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 sm:flex">
            <Link2 className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-[1rem] font-bold">Connect your first channel</p>
            <p className="mt-0.5 text-[0.85rem] leading-[1.5] text-primary-foreground/85">
              Your metrics stay empty until an account is linked to Grodo.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-xl bg-card px-4 py-2.5 text-[0.85rem] font-semibold text-primary-light"
        >
          Connect account
        </button>
      </div>

      {/* stats */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
            <p className="text-[0.8rem] text-muted-foreground">{s.label}</p>
            <p className="mt-2 text-[1.6rem] font-extrabold tracking-[-0.03em]">{s.value}</p>
            <p className="mt-1 text-[0.75rem] text-muted-foreground">No data yet</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[1.6fr_1fr]">
        {/* chart zero state */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between">
            <p className="truncate text-[1rem] font-bold">Performance overview</p>
            <span className="shrink-0 rounded-lg border border-border px-2.5 py-1 text-[0.72rem] text-muted-foreground">
              Last 7 days
            </span>
          </div>
          <div className="mt-6 flex h-[240px] flex-col items-center justify-center rounded-xl border border-dashed border-border text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <LineChart className="h-5 w-5 text-primary-light" />
            </span>
            <p className="mt-4 text-[0.92rem] font-semibold">Nothing to chart yet</p>
            <p className="mt-1.5 max-w-[300px] text-[0.82rem] leading-[1.55] text-muted-foreground">
              Once you connect a channel and publish, your reach and engagement will appear here.
            </p>
          </div>
        </div>

        {/* AI assistant */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft">
              <Sparkles className="h-4 w-4 text-primary-light" />
            </span>
            <p className="text-[1rem] font-bold">AI Assistant</p>
          </div>
          <p className="mt-3 text-[0.85rem] leading-[1.6] text-muted-foreground">
            Ask Grodo to draft captions, suggest hashtags or plan your week.
          </p>
          <div className="mt-4 space-y-2.5">
            {[
              "Write a caption for my next post",
              "Suggest hashtags for my niche",
              "Plan my posting schedule",
            ].map((p) => (
              <Link
                key={p}
                to="/assistant"
                className="block w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-left text-[0.83rem] transition-colors hover:border-white/25"
              >
                {p}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-2">
        {/* upcoming posts zero state */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-[1rem] font-bold">Upcoming posts</p>
          <div className="mt-5 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <CalendarDays className="h-5 w-5 text-primary-light" />
            </span>
            <p className="mt-4 text-[0.92rem] font-semibold">No posts scheduled</p>
            <p className="mt-1.5 max-w-[280px] text-[0.82rem] leading-[1.55] text-muted-foreground">
              Schedule your first post and it will show up in your planner.
            </p>
            <Link
              to="/create"
              className="cta-gradient mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[0.83rem] font-semibold text-primary-foreground"
            >
              <Plus className="h-4 w-4" /> Create post
            </Link>
          </div>
        </div>

        {/* channels zero state */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-[1rem] font-bold">Your channels</p>
          <div className="mt-5 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <Link2 className="h-5 w-5 text-primary-light" />
            </span>
            <p className="mt-4 text-[0.92rem] font-semibold">No channels connected</p>
            <p className="mt-1.5 max-w-[280px] text-[0.82rem] leading-[1.55] text-muted-foreground">
              Link Instagram, YouTube, TikTok and more to manage them from one place.
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-[0.83rem] font-semibold"
            >
              Connect a channel
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
