import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

import { createDraft, useCreateDraft } from "@/components/app/createStore";
import { PLATFORMS, type PlatformId } from "@/components/app/platforms";
import { PlatformPreview } from "@/components/app/PlatformPreview";
import { ScheduleDialog } from "@/components/app/ScheduleDialog";
import { Chip, EmptyState, Panel } from "@/components/app/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/create/editor")({
  component: CreateEditor,
});

type Field = {
  key: string;
  label: string;
  type: "input" | "textarea" | "select";
  options?: string[];
  ai?: boolean;
  placeholder?: string;
};

const FIELDS: Record<PlatformId, Field[]> = {
  instagram: [
    { key: "caption", label: "Caption", type: "textarea", ai: true, placeholder: "Write a caption" },
    { key: "hashtags", label: "Hashtags", type: "textarea", ai: true, placeholder: "#grodo #reels" },
    { key: "tags", label: "Tags", type: "input", placeholder: "@collaborator" },
    { key: "thumbnail", label: "Thumbnail (cover frame)", type: "input", placeholder: "00:03" },
    { key: "cta", label: "Call to action", type: "input", placeholder: "Link in bio" },
  ],
  facebook: [
    { key: "caption", label: "Caption", type: "textarea", ai: true, placeholder: "Write a caption" },
    { key: "hashtags", label: "Hashtags", type: "input", ai: true, placeholder: "#grodo" },
    { key: "tags", label: "Tags", type: "input", placeholder: "Tag a page or person" },
  ],
  youtube: [
    { key: "title", label: "Title", type: "input", ai: true, placeholder: "Video title" },
    { key: "description", label: "Description", type: "textarea", ai: true, placeholder: "Describe the video" },
    { key: "tags", label: "Tags", type: "input", ai: true, placeholder: "editing, workflow" },
    { key: "thumbnail", label: "Thumbnail", type: "input", placeholder: "Choose a frame or upload" },
    { key: "visibility", label: "Visibility", type: "select", options: ["Public", "Unlisted", "Private"] },
    {
      key: "category",
      label: "Category",
      type: "select",
      options: ["Entertainment", "Education", "Technology", "Lifestyle", "Gaming"],
    },
  ],
  tiktok: [
    { key: "caption", label: "Caption", type: "textarea", ai: true, placeholder: "Write a caption" },
    { key: "hashtags", label: "Hashtags", type: "input", ai: true, placeholder: "#fyp" },
    { key: "thumbnail", label: "Cover", type: "input", placeholder: "Pick a cover frame" },
    { key: "duet", label: "Who can duet", type: "select", options: ["Everyone", "Friends", "Off"] },
  ],
  x: [
    { key: "text", label: "Post text", type: "textarea", ai: true, placeholder: "What's happening?" },
    { key: "hashtags", label: "Hashtags", type: "input", ai: true, placeholder: "#build" },
  ],
};

const AI_TEXT: Record<PlatformId, Record<string, string[]>> = {
  instagram: {
    caption: [
      "Golden hour hits different when the edit does the work. Save this for your next shoot ✨",
      "Three tweaks turned this clip into my best performing reel. Which one surprises you?",
    ],
    hashtags: ["#contentcreator #reels #editing #grodo", "#creatorlife #videoedit #socialmedia"],
  },
  facebook: {
    caption: [
      "Here's the full breakdown of how this post came together — start to finish in under an hour.",
      "We rebuilt our posting workflow this month. Here's what changed and what it did for reach.",
    ],
    hashtags: ["#creators #socialmedia", "#marketing #content"],
  },
  youtube: {
    title: ["The 3-Step Editing Workflow That Doubled My Reach", "My Full Content Setup in 2026"],
    description: [
      "In this video I break down the exact workflow I use to plan, edit and publish across every platform.\n\nChapters:\n00:00 Intro\n01:12 Setup\n04:30 Editing\n08:05 Publishing",
    ],
    tags: ["editing, content workflow, social media, creator tools"],
  },
  tiktok: {
    caption: ["Steal this hook — it works every single time.", "POV: your edit finally clicks 🎬"],
    hashtags: ["#fyp #editing #creator", "#contenttips #viral"],
  },
  x: {
    text: [
      "Shipped content every day for 30 days. The biggest lever wasn't quality — it was consistency of format.",
      "Your hook is 80% of the result. Everything else is polish.",
    ],
    hashtags: ["#build #creators"],
  },
};

function CreateEditor() {
  const draft = useCreateDraft();
  const navigate = useNavigate();
  const [active, setActive] = React.useState<PlatformId | null>(draft.platforms[0] ?? null);
  const [scheduleOpen, setScheduleOpen] = React.useState(false);
  const [mobileView, setMobileView] = React.useState<"edit" | "preview">("edit");

  React.useEffect(() => {
    if (!active && draft.platforms[0]) setActive(draft.platforms[0]);
  }, [active, draft.platforms]);

  if (draft.platforms.length === 0 || !active) {
    return (
      <Panel>
        <EmptyState
          icon={Sparkles}
          title="No platforms selected"
          description="Go back to step 1 and pick where this post should be published."
          action={
            <button
              type="button"
              onClick={() => navigate({ to: "/create" })}
              className="cta-gradient rounded-xl px-4 py-2.5 text-[0.83rem] font-semibold text-primary-foreground"
            >
              Back to setup
            </button>
          }
        />
      </Panel>
    );
  }

  const fields = FIELDS[active];
  const values = draft.content[active] ?? {};

  const suggest = (key: string) => {
    const pool = AI_TEXT[active][key];
    if (!pool) return;
    const current = values[key];
    const next = pool.find((t) => t !== current) ?? pool[0]!;
    createDraft.setField(active, key, next);
    toast.success(`AI suggestion generated for ${PLATFORMS[active].name}`);
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[0.8rem] text-muted-foreground">Selected platforms:</span>
        {draft.platforms.map((p) => {
          const { Icon, name } = PLATFORMS[p];
          const isActive = p === active;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(p)}
              className={cn(
                "flex items-center gap-2 rounded-xl border px-3.5 py-2 text-[0.82rem] font-semibold transition-colors",
                isActive
                  ? "border-primary bg-primary-soft text-primary-light"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {name}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex gap-2 lg:hidden">
        <Chip active={mobileView === "edit"} onClick={() => setMobileView("edit")}>
          Edit
        </Chip>
        <Chip active={mobileView === "preview"} onClick={() => setMobileView("preview")}>
          Preview
        </Chip>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Panel className={cn(mobileView === "preview" && "hidden lg:block")}>
          <h2 className="text-[1rem] font-bold">{PLATFORMS[active].name} content</h2>
          <div className="mt-5 space-y-4">
            {fields.map((f) => {
              const id = `${active}-${f.key}`;
              return (
                <div key={f.key}>
                  <div className="flex items-center justify-between gap-3">
                    <label htmlFor={id} className="text-[0.8rem] font-medium text-muted-foreground">
                      {f.label}
                    </label>
                    {f.ai ? (
                      <button
                        type="button"
                        onClick={() => suggest(f.key)}
                        className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1 text-[0.72rem] font-semibold text-primary-light transition-colors hover:border-white/25"
                      >
                        <Sparkles className="h-3 w-3" />
                        {values[f.key] ? "Regenerate" : "AI Suggest"}
                      </button>
                    ) : null}
                  </div>
                  {f.type === "textarea" ? (
                    <textarea
                      id={id}
                      rows={4}
                      value={values[f.key] ?? ""}
                      placeholder={f.placeholder ?? ""}
                      onChange={(e) => createDraft.setField(active, f.key, e.target.value)}
                      className="mt-1.5 w-full resize-y rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.87rem] leading-[1.6] outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  ) : f.type === "select" ? (
                    <select
                      id={id}
                      value={values[f.key] ?? ""}
                      onChange={(e) => createDraft.setField(active, f.key, e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.87rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select</option>
                      {f.options?.map((o) => (
                        <option key={o} value={o} className="bg-card">
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={id}
                      value={values[f.key] ?? ""}
                      placeholder={f.placeholder ?? ""}
                      onChange={(e) => createDraft.setField(active, f.key, e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.87rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Panel>

        <Panel className={cn(mobileView === "edit" && "hidden lg:block")}>
          <PlatformPreview platform={active} fields={values} media={draft.media} />
        </Panel>
      </div>

      <div className="mt-5 flex flex-wrap justify-end gap-2.5">
        <button
          type="button"
          onClick={() => toast.success("Draft saved")}
          className="rounded-xl border border-border px-4 py-2.5 text-[0.85rem] font-semibold"
        >
          Save as Draft
        </button>
        <button
          type="button"
          onClick={() => setScheduleOpen(true)}
          className="rounded-xl border border-primary bg-primary-soft px-4 py-2.5 text-[0.85rem] font-semibold text-primary-light"
        >
          Schedule
        </button>
        <button
          type="button"
          onClick={() => toast.success("Post published")}
          className="cta-gradient rounded-xl px-5 py-2.5 text-[0.85rem] font-semibold text-primary-foreground"
        >
          Publish
        </button>
      </div>

      <ScheduleDialog
        open={scheduleOpen}
        onOpenChange={setScheduleOpen}
        onScheduled={(d, t) => toast.success(`Scheduled for ${d} at ${t}`)}
      />
    </>
  );
}
