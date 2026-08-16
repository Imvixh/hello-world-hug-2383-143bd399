import * as React from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Eye, Heart, MessageCircle, Plus, Send } from "lucide-react";

import { AppShell } from "@/components/app/AppShell";
import { PostDetailSheet } from "@/components/app/PostDetailSheet";
import { PLATFORMS, type PlatformId } from "@/components/app/platforms";
import { platformSummary, publishedPosts, type PublishedPost } from "@/components/app/mockData";
import { Chip, EmptyState, Panel } from "@/components/app/ui";

const title = "Publish — Grodo";
const description = "Everything you have published across your connected channels.";

export const Route = createFileRoute("/publish")({
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
  component: PublishPage,
});

const FILTERS: (PlatformId | "all")[] = ["all", "instagram", "facebook", "youtube", "tiktok", "x"];
const SORTS = ["Newest", "Oldest", "Most viewed", "Most liked", "Best engagement"] as const;

function PublishPage() {
  const [filter, setFilter] = React.useState<PlatformId | "all">("all");
  const [sort, setSort] = React.useState<(typeof SORTS)[number]>("Newest");
  const [selected, setSelected] = React.useState<PublishedPost | null>(null);

  const posts = React.useMemo(() => {
    const list = publishedPosts.filter((p) => filter === "all" || p.platforms.includes(filter));
    const sorted = [...list];
    sorted.sort((a, b) => {
      switch (sort) {
        case "Oldest":
          return a.date.localeCompare(b.date);
        case "Most viewed":
          return b.views - a.views;
        case "Most liked":
          return b.likes - a.likes;
        case "Best engagement":
          return b.engagement - a.engagement;
        default:
          return b.date.localeCompare(a.date);
      }
    });
    return sorted;
  }, [filter, sort]);

  return (
    <AppShell>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="min-w-0">
          <h1 className="truncate text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">
            Publish
          </h1>
          <p className="mt-1 text-[0.88rem] text-muted-foreground">
            Published overview and content history. Demo data for the prototype.
          </p>
        </div>
        <Link
          to="/create"
          className="cta-gradient flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-[0.85rem] font-semibold text-primary-foreground"
        >
          <Plus className="h-4 w-4" /> New post
        </Link>
      </div>

      <h2 className="mt-6 text-[1rem] font-bold">Published overview</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {platformSummary.map((s) => {
          const { Icon, name } = PLATFORMS[s.platform];
          return (
            <div
              key={s.platform}
              className="rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <Icon className="h-5 w-5" />
                <p className="text-[0.88rem] font-semibold">{name}</p>
              </div>
              <p className="mt-3 text-[1.4rem] font-extrabold tracking-[-0.03em]">{s.posts}</p>
              <p className="text-[0.75rem] text-muted-foreground">Published posts</p>
              <dl className="mt-3 space-y-1 text-[0.78rem] text-muted-foreground">
                <div className="flex justify-between">
                  <dt>Views</dt>
                  <dd className="text-foreground">{s.views}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Likes</dt>
                  <dd className="text-foreground">{s.likes}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Followers</dt>
                  <dd className="text-foreground">{s.followers}</dd>
                </div>
              </dl>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:justify-between">
        <h2 className="text-[1rem] font-bold">Published content</h2>
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="sr-only">
            Sort posts
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
            className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-[0.78rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {SORTS.map((s) => (
              <option key={s} value={s} className="bg-card">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>
            {f === "all" ? "All" : PLATFORMS[f].name}
          </Chip>
        ))}
      </div>

      {posts.length === 0 ? (
        <Panel className="mt-4">
          <EmptyState
            icon={Send}
            title="No published posts"
            description="Your published content will appear here."
          />
        </Panel>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setSelected(p)}
              className="rounded-2xl border border-border bg-card p-5 text-left transition-transform hover:-translate-y-0.5"
            >
              <div className="flex h-28 items-center justify-center rounded-xl bg-white/5 text-[0.75rem] text-muted-foreground">
                Thumbnail
              </div>
              <p className="mt-3 truncate text-[0.92rem] font-bold">{p.title}</p>
              <p className="mt-1 line-clamp-2 text-[0.8rem] leading-[1.55] text-muted-foreground">
                {p.caption}
              </p>
              <div className="mt-3 flex items-center gap-2">
                {p.platforms.map((pl) => {
                  const { Icon } = PLATFORMS[pl];
                  return <Icon key={pl} className="h-4 w-4" />;
                })}
                <span className="ml-auto text-[0.75rem] text-muted-foreground">{p.date}</span>
              </div>
              <div className="mt-3 flex items-center gap-4 border-t border-border pt-3 text-[0.78rem] text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" /> {p.views.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="h-3.5 w-3.5" /> {p.likes.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" /> {p.engagement}%
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      <PostDetailSheet post={selected} onClose={() => setSelected(null)} />
    </AppShell>
  );
}
