import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TrendingDown, TrendingUp } from "lucide-react";

import { AppShell } from "@/components/app/AppShell";
import { analyticsCards, analyticsSeries, publishedPosts } from "@/components/app/mockData";
import { PLATFORMS } from "@/components/app/platforms";
import { Chip, Panel } from "@/components/app/ui";

const title = "Analytics — Grodo";
const description = "Performance analytics across all your connected social channels.";

export const Route = createFileRoute("/analytics")({
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
  component: AnalyticsPage,
});

const RANGES = ["7 days", "30 days", "90 days"] as const;

function AnalyticsPage() {
  const [range, setRange] = React.useState<(typeof RANGES)[number]>("7 days");
  const max = Math.max(...analyticsSeries.map((d) => d.views));

  return (
    <AppShell>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="min-w-0">
          <h1 className="truncate text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">
            Analytics
          </h1>
          <p className="mt-1 text-[0.88rem] text-muted-foreground">
            Demo performance data for the prototype.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          {RANGES.map((r) => (
            <Chip key={r} active={range === r} onClick={() => setRange(r)}>
              {r}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {analyticsCards.map((c) => {
          const up = c.change >= 0;
          const Icon = up ? TrendingUp : TrendingDown;
          return (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-5">
              <p className="text-[0.8rem] text-muted-foreground">{c.label}</p>
              <p className="mt-2 text-[1.6rem] font-extrabold tracking-[-0.03em]">{c.value}</p>
              <p
                className={`mt-1 flex items-center gap-1 text-[0.75rem] font-semibold ${
                  up ? "text-icon-green" : "text-destructive"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {up ? "+" : ""}
                {c.change}% <span className="font-normal text-muted-foreground">{c.period}</span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[1.6fr_1fr]">
        <Panel>
          <p className="text-[1rem] font-bold">Views over time</p>
          <div className="mt-6 flex h-[240px] items-end gap-3">
            {analyticsSeries.map((d) => (
              <div key={d.day} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-lg bg-primary/80 transition-all"
                  style={{ height: `${(d.views / max) * 100}%` }}
                  title={`${d.views} views`}
                />
                <span className="text-[0.72rem] text-muted-foreground">{d.day}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <p className="text-[1rem] font-bold">Platform breakdown</p>
          <ul className="mt-5 space-y-3">
            {Object.entries(PLATFORMS).map(([id, p], i) => (
              <li key={id} className="flex items-center gap-3">
                <p.Icon className="h-4 w-4 shrink-0" />
                <span className="w-24 shrink-0 text-[0.82rem]">{p.name}</span>
                <span className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span
                    className="block h-full rounded-full bg-primary"
                    style={{ width: `${80 - i * 13}%` }}
                  />
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="mt-5">
        <p className="text-[1rem] font-bold">Top performing content</p>
        <div className="mt-4 space-y-3">
          {[...publishedPosts]
            .sort((a, b) => b.engagement - a.engagement)
            .slice(0, 5)
            .map((p) => (
              <div
                key={p.id}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border px-4 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-[0.87rem] font-semibold">{p.title}</p>
                  <p className="text-[0.75rem] text-muted-foreground">{p.date}</p>
                </div>
                <p className="shrink-0 text-[0.82rem] font-semibold text-primary-light">
                  {p.engagement}% engagement
                </p>
              </div>
            ))}
        </div>
      </Panel>
    </AppShell>
  );
}
