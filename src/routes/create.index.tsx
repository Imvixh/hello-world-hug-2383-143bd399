import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, FileText, ImageIcon, Video } from "lucide-react";

import { connectedAccounts } from "@/components/app/mockData";
import { PLATFORMS } from "@/components/app/platforms";
import { CATEGORIES, createDraft, useCreateDraft } from "@/components/app/createStore";
import { Panel } from "@/components/app/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/create/")({
  component: CreateSetup,
});

const CONTENT_TYPES = [
  { id: "image", label: "Image", icon: ImageIcon },
  { id: "video", label: "Video", icon: Video },
  { id: "text", label: "Text", icon: FileText },
] as const;

function CreateSetup() {
  const draft = useCreateDraft();
  const navigate = useNavigate();

  const canContinue = draft.platforms.length > 0 && draft.postName.trim().length > 0;

  const next = () => {
    if (!canContinue) return;
    navigate({ to: draft.contentType === "text" ? "/create/editor" : "/create/media" });
  };

  return (
    <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
      <Panel>
        <h2 className="text-[1rem] font-bold">Where should this post go?</h2>
        <p className="mt-1 text-[0.85rem] text-muted-foreground">
          Select one or more connected accounts.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {connectedAccounts.map((a) => {
            const { Icon, name } = PLATFORMS[a.platform];
            const selected = draft.platforms.includes(a.platform);
            return (
              <button
                key={a.id}
                type="button"
                aria-pressed={selected}
                onClick={() => createDraft.togglePlatform(a.platform)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3.5 text-left transition-colors",
                  selected
                    ? "border-primary bg-primary-soft"
                    : "border-border bg-white/[0.03] hover:border-white/25",
                )}
              >
                <span className="relative shrink-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-[0.85rem] font-bold text-primary-foreground">
                    {a.displayName.charAt(0)}
                  </span>
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-card">
                    <Icon className="h-4 w-4" />
                  </span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.87rem] font-semibold">{a.handle}</span>
                  <span className="block text-[0.75rem] text-muted-foreground">{name}</span>
                </span>
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                    selected
                      ? "border-icon-green bg-icon-green text-background"
                      : "border-border text-transparent",
                  )}
                  aria-hidden
                >
                  <Check className="h-3 w-3" />
                </span>
              </button>
            );
          })}
        </div>
      </Panel>

      <Panel>
        <h2 className="text-[1rem] font-bold">Post details</h2>
        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor="postName" className="text-[0.8rem] font-medium text-muted-foreground">
              Post name
            </label>
            <input
              id="postName"
              value={draft.postName}
              onChange={(e) => createDraft.set({ postName: e.target.value })}
              placeholder="Summer Reel"
              className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.87rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="category" className="text-[0.8rem] font-medium text-muted-foreground">
              Category
            </label>
            <select
              id="category"
              value={draft.category}
              onChange={(e) => createDraft.set({ category: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.87rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select a category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c} className="bg-card">
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-[0.8rem] font-medium text-muted-foreground">Content type</p>
            <div className="mt-1.5 grid grid-cols-3 gap-2">
              {CONTENT_TYPES.map(({ id, label, icon: Icon }) => {
                const active = draft.contentType === id;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => createDraft.set({ contentType: id })}
                    className={cn(
                      "flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 text-[0.8rem] font-medium transition-colors",
                      active
                        ? "border-primary bg-primary-soft text-primary-light"
                        : "border-border text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                );
              })}
            </div>
            {draft.contentType === "text" ? (
              <p className="mt-2 text-[0.75rem] text-muted-foreground">
                Text posts skip media upload and go straight to the editor.
              </p>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={!canContinue}
          className="cta-gradient mt-6 w-full rounded-xl px-4 py-2.5 text-[0.85rem] font-semibold text-primary-foreground disabled:opacity-40"
        >
          Continue
        </button>
        {!canContinue ? (
          <p className="mt-2 text-center text-[0.75rem] text-muted-foreground">
            Select at least one account and name your post.
          </p>
        ) : null}
      </Panel>
    </div>
  );
}
