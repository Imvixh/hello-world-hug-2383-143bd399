import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Send, Sparkles } from "lucide-react";

import { AppShell } from "@/components/app/AppShell";
import { Panel } from "@/components/app/ui";
import { cn } from "@/lib/utils";

const title = "AI Assistant — Grodo";
const description = "Ask Grodo to draft captions, plan content and suggest hashtags.";

export const Route = createFileRoute("/assistant")({
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
  component: AssistantPage,
});

const PROMPTS = [
  "Write a caption for my next post",
  "Suggest hashtags for my niche",
  "Plan my posting schedule",
  "Give me 5 content ideas",
  "Rewrite this hook to be punchier",
];

const REPLIES = [
  "Here are three caption options:\n\n1. Golden hour, zero filters.\n2. The edit that took 9 tries.\n3. Save this one for later ✨",
  "Try this hashtag set: #contentcreator #editing #reels #creatorlife #grodo — mix 3 broad with 2 niche tags.",
  "Best slots this week: Tue 7:30 PM, Thu 6:00 PM, Sat 11:00 AM. Your audience peaks in the evening.",
  "Five ideas: behind the scenes, a 30s tutorial, a myth-buster, a before/after edit, and a Q&A.",
];

type Msg = { role: "user" | "ai"; text: string };

function AssistantPage() {
  const [messages, setMessages] = React.useState<Msg[]>([]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    const reply = REPLIES[messages.length % REPLIES.length]!;
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: reply }]);
      setTyping(false);
    }, 900);
  };

  return (
    <AppShell>
      <h1 className="text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">
        AI Assistant
      </h1>
      <p className="mt-1 text-[0.88rem] text-muted-foreground">
        Demo responses for the prototype.
      </p>

      <Panel className="mt-5 flex min-h-[520px] flex-col">
        <div className="flex-1 space-y-3 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                <Sparkles className="h-5 w-5 text-primary-light" />
              </span>
              <p className="mt-4 text-[0.95rem] font-semibold">How can I help today?</p>
              <p className="mt-1.5 max-w-[320px] text-[0.82rem] leading-[1.55] text-muted-foreground">
                Pick a prompt below or ask anything about your content.
              </p>
            </div>
          ) : (
            messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-[0.85rem] leading-[1.6]",
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "border border-border bg-white/[0.03]",
                )}
              >
                {m.text}
              </div>
            ))
          )}
          {typing ? (
            <p className="text-[0.8rem] text-muted-foreground">Grodo is thinking…</p>
          ) : null}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {PROMPTS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => send(p)}
              className="rounded-xl border border-border bg-white/[0.03] px-3.5 py-2 text-[0.78rem] transition-colors hover:border-white/25"
            >
              {p}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-2.5"
        >
          <label htmlFor="ai-input" className="sr-only">
            Message
          </label>
          <input
            id="ai-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Grodo anything"
            className="min-w-0 rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.85rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="cta-gradient flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-[0.83rem] font-semibold text-primary-foreground disabled:opacity-40"
          >
            <Send className="h-4 w-4" /> Send
          </button>
        </form>
      </Panel>
    </AppShell>
  );
}
