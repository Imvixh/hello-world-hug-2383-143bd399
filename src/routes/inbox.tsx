import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Inbox as InboxIcon, Send } from "lucide-react";
import { toast } from "sonner";

import { AppShell } from "@/components/app/AppShell";
import { inboxItems, type InboxItem } from "@/components/app/mockData";
import { PLATFORMS } from "@/components/app/platforms";
import { Chip, EmptyState, Panel } from "@/components/app/ui";
import { cn } from "@/lib/utils";

const title = "Inbox — Grodo";
const description = "Comments, messages, mentions and notifications from every channel.";

export const Route = createFileRoute("/inbox")({
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
  component: InboxPage,
});

const TABS = ["all", "comment", "message", "mention", "follower", "notification"] as const;

function InboxPage() {
  const [tab, setTab] = React.useState<(typeof TABS)[number]>("all");
  const [selected, setSelected] = React.useState<InboxItem | null>(inboxItems[0] ?? null);
  const [reply, setReply] = React.useState("");

  const items = inboxItems.filter((i) => tab === "all" || i.type === tab);

  return (
    <AppShell>
      <h1 className="text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">Inbox</h1>
      <p className="mt-1 text-[0.88rem] text-muted-foreground">
        Demo conversations for the prototype.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <Chip key={t} active={tab === t} onClick={() => setTab(t)}>
            {t === "all" ? "All" : `${t.charAt(0).toUpperCase()}${t.slice(1)}s`}
          </Chip>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,360px)_1fr]">
        <Panel className="p-0">
          {items.length === 0 ? (
            <div className="p-6">
              <EmptyState icon={InboxIcon} title="Nothing here" description="No items in this tab." />
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((i) => {
                const { Icon } = PLATFORMS[i.platform];
                return (
                  <li key={i.id}>
                    <button
                      type="button"
                      onClick={() => setSelected(i)}
                      className={cn(
                        "flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors",
                        selected?.id === i.id ? "bg-primary-soft/60" : "hover:bg-white/5",
                      )}
                    >
                      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2">
                          <span className="truncate text-[0.85rem] font-semibold">{i.name}</span>
                          {i.unread ? (
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-light" />
                          ) : null}
                          <span className="ml-auto shrink-0 text-[0.72rem] text-muted-foreground">
                            {i.time}
                          </span>
                        </span>
                        <span className="mt-0.5 block truncate text-[0.8rem] text-muted-foreground">
                          {i.preview}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </Panel>

        <Panel>
          {selected ? (
            <>
              <p className="text-[1rem] font-bold">{selected.name}</p>
              <p className="text-[0.75rem] text-muted-foreground">
                {PLATFORMS[selected.platform].name} · {selected.type} · {selected.time} ago
              </p>
              <p className="mt-4 rounded-xl border border-border bg-white/[0.03] p-4 text-[0.87rem] leading-[1.6]">
                {selected.body}
              </p>
              <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] gap-2.5">
                <label htmlFor="reply" className="sr-only">
                  Reply
                </label>
                <input
                  id="reply"
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Write a reply"
                  className="min-w-0 rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.85rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <button
                  type="button"
                  disabled={!reply.trim()}
                  onClick={() => {
                    toast.success("Reply sent");
                    setReply("");
                  }}
                  className="cta-gradient flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-[0.83rem] font-semibold text-primary-foreground disabled:opacity-40"
                >
                  <Send className="h-4 w-4" /> Reply
                </button>
              </div>
            </>
          ) : (
            <EmptyState
              icon={InboxIcon}
              title="Select a conversation"
              description="Pick an item on the left to read it."
            />
          )}
        </Panel>
      </div>
    </AppShell>
  );
}
