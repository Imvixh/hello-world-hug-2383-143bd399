import * as React from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Plus } from "lucide-react";

import { AppShell } from "@/components/app/AppShell";
import { scheduledPosts } from "@/components/app/mockData";
import { PLATFORMS } from "@/components/app/platforms";
import { Chip, EmptyState, Panel } from "@/components/app/ui";

const title = "Scheduled posts — Grodo";
const description = "Calendar and list view of every post queued for publishing.";

export const Route = createFileRoute("/scheduled")({
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
  component: ScheduledPage,
});

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function ScheduledPage() {
  const [view, setView] = React.useState<"calendar" | "list">("calendar");

  // August 2026 starts on a Saturday
  const cells = React.useMemo(() => {
    const lead = 5;
    return [
      ...Array.from({ length: lead }, () => null),
      ...Array.from({ length: 31 }, (_, i) => i + 1),
    ];
  }, []);

  const byDay = React.useMemo(() => {
    const map = new Map<number, typeof scheduledPosts>();
    for (const p of scheduledPosts) {
      const day = Number(p.date.slice(-2));
      map.set(day, [...(map.get(day) ?? []), p]);
    }
    return map;
  }, []);

  return (
    <AppShell>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="min-w-0">
          <h1 className="truncate text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">
            Scheduled posts
          </h1>
          <p className="mt-1 text-[0.88rem] text-muted-foreground">August 2026</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Chip active={view === "calendar"} onClick={() => setView("calendar")}>
            Calendar
          </Chip>
          <Chip active={view === "list"} onClick={() => setView("list")}>
            List
          </Chip>
          <Link
            to="/create"
            className="cta-gradient flex items-center gap-2 rounded-xl px-4 py-2.5 text-[0.83rem] font-semibold text-primary-foreground"
          >
            <Plus className="h-4 w-4" /> New post
          </Link>
        </div>
      </div>

      {scheduledPosts.length === 0 ? (
        <Panel className="mt-6">
          <EmptyState
            icon={CalendarDays}
            title="No posts scheduled"
            description="Schedule your first post and it will show up here."
          />
        </Panel>
      ) : view === "calendar" ? (
        <Panel className="mt-6 overflow-x-auto">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-7 gap-2 text-[0.72rem] font-semibold text-muted-foreground">
              {DAYS.map((d) => (
                <span key={d} className="px-1">
                  {d}
                </span>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-2">
              {cells.map((day, i) => (
                <div
                  key={i}
                  className={`min-h-[92px] rounded-xl border p-2 ${
                    day ? "border-border" : "border-transparent"
                  }`}
                >
                  {day ? (
                    <>
                      <p className="text-[0.72rem] text-muted-foreground">{day}</p>
                      <div className="mt-1 space-y-1">
                        {(byDay.get(day) ?? []).map((p) => (
                          <div
                            key={p.id}
                            className="rounded-lg bg-primary-soft px-2 py-1 text-[0.7rem] font-medium text-primary-light"
                          >
                            <span className="block truncate">{p.name}</span>
                            <span className="text-[0.65rem] opacity-80">{p.time}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Panel>
      ) : (
        <div className="mt-6 space-y-3">
          {scheduledPosts.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4"
            >
              <div className="min-w-0">
                <p className="truncate text-[0.92rem] font-semibold">{p.name}</p>
                <p className="text-[0.78rem] text-muted-foreground">
                  {p.date} · {p.time}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {p.platforms.map((pl) => {
                  const { Icon } = PLATFORMS[pl];
                  return <Icon key={pl} className="h-4 w-4" />;
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
