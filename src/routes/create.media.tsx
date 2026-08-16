import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, Loader2, Sparkles, Trash2, Upload } from "lucide-react";

import { createDraft, useCreateDraft } from "@/components/app/createStore";
import { Panel } from "@/components/app/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/create/media")({
  component: CreateMedia,
});

const STAGES = [
  "Uploading media",
  "Analyzing visual content",
  "Analyzing audio",
  "Understanding scenes",
  "Extracting topics",
  "Identifying important moments",
  "Generating content insights",
  "Preparing recommendations",
];

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function CreateMedia() {
  const draft = useCreateDraft();
  const navigate = useNavigate();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [stage, setStage] = React.useState(-1);

  const accept = draft.contentType === "video" ? "video/*" : "image/*";

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    const kind: "image" | "video" = file.type.startsWith("video") ? "video" : "image";
    createDraft.set({
      media: {
        name: file.name,
        size: file.size,
        type: file.type || kind,
        url: URL.createObjectURL(file),
        kind,
      },
      analyzed: false,
    });
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          return 100;
        }
        return p + 10;
      });
    }, 80);
  };

  React.useEffect(() => {
    if (stage < 0 || stage >= STAGES.length) return;
    const id = setTimeout(() => setStage((s) => s + 1), 550);
    return () => clearTimeout(id);
  }, [stage]);

  React.useEffect(() => {
    if (stage === STAGES.length) {
      createDraft.set({ analyzed: true });
    }
  }, [stage]);

  const analyzing = stage >= 0 && stage < STAGES.length;

  return (
    <div className="grid gap-4 xl:grid-cols-[1.3fr_1fr]">
      <Panel>
        <h2 className="text-[1rem] font-bold">Upload media</h2>
        <p className="mt-1 text-[0.85rem] text-muted-foreground">
          {draft.contentType === "video" ? "Add the video" : "Add the image"} for “
          {draft.postName || "Untitled post"}”.
        </p>

        {!draft.media ? (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              handleFiles(e.dataTransfer.files);
            }}
            className={cn(
              "mt-5 flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-16 text-center transition-colors",
              dragging ? "border-primary bg-primary-soft/40" : "border-border",
            )}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <Upload className="h-5 w-5 text-primary-light" />
            </span>
            <p className="mt-4 text-[0.95rem] font-semibold">Drop your media here</p>
            <p className="mt-1 text-[0.82rem] text-muted-foreground">or</p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="cta-gradient mt-3 rounded-xl px-4 py-2.5 text-[0.83rem] font-semibold text-primary-foreground"
            >
              Browse files
            </button>
            <input
              ref={inputRef}
              type="file"
              accept={accept}
              aria-label="Upload media"
              className="sr-only"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </div>
        ) : (
          <div className="mt-5 space-y-4">
            <div className="overflow-hidden rounded-2xl border border-border bg-white/[0.03]">
              {draft.media.kind === "video" ? (
                <video src={draft.media.url} controls className="max-h-[320px] w-full bg-black" />
              ) : (
                <img
                  src={draft.media.url}
                  alt={`Preview of ${draft.media.name}`}
                  className="max-h-[320px] w-full object-contain"
                />
              )}
            </div>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border p-3.5">
              <div className="min-w-0">
                <p className="truncate text-[0.85rem] font-semibold">{draft.media.name}</p>
                <p className="text-[0.75rem] text-muted-foreground">
                  {formatSize(draft.media.size)} · {draft.media.type}
                </p>
                {progress < 100 ? (
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                ) : (
                  <p className="mt-1 flex items-center gap-1 text-[0.72rem] font-semibold text-icon-green">
                    <Check className="h-3 w-3" /> Upload complete
                  </p>
                )}
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="rounded-xl border border-border px-3 py-2 text-[0.78rem] font-semibold"
                >
                  Replace
                </button>
                <button
                  type="button"
                  aria-label="Remove media"
                  onClick={() => {
                    createDraft.set({ media: null, analyzed: false });
                    setStage(-1);
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border text-muted-foreground"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <input
                ref={inputRef}
                type="file"
                accept={accept}
                aria-label="Replace media"
                className="sr-only"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>
          </div>
        )}
      </Panel>

      <Panel>
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-soft">
            <Sparkles className="h-4 w-4 text-primary-light" />
          </span>
          <h2 className="text-[1rem] font-bold">AI analysis</h2>
        </div>

        {!draft.media ? (
          <p className="mt-4 text-[0.85rem] leading-[1.6] text-muted-foreground">
            Upload media to let Grodo analyse scenes, topics, tone and key moments.
          </p>
        ) : stage < 0 ? (
          <>
            <p className="mt-4 text-[0.85rem] leading-[1.6] text-muted-foreground">
              Grodo will review the {draft.media.kind}, extract topics, tone and key moments, then
              tailor suggestions per platform.
            </p>
            <button
              type="button"
              disabled={progress < 100}
              onClick={() => setStage(0)}
              className="cta-gradient mt-5 w-full rounded-xl px-4 py-2.5 text-[0.85rem] font-semibold text-primary-foreground disabled:opacity-40"
            >
              Analyze with AI
            </button>
          </>
        ) : (
          <ol className="mt-5 space-y-2.5">
            {STAGES.map((s, i) => {
              const done = i < stage;
              const active = i === stage;
              return (
                <li
                  key={s}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-[0.82rem] transition-colors",
                    active
                      ? "border-primary bg-primary-soft text-primary-light"
                      : done
                        ? "border-border text-foreground"
                        : "border-border text-muted-foreground",
                  )}
                >
                  {done ? (
                    <Check className="h-3.5 w-3.5 shrink-0 text-icon-green" />
                  ) : active ? (
                    <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin" />
                  ) : (
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                  )}
                  {s}
                </li>
              );
            })}
          </ol>
        )}

        {draft.analyzed ? (
          <div className="mt-5 rounded-xl border border-border bg-white/[0.03] p-4">
            <p className="text-[0.85rem] font-semibold">Analysis ready</p>
            <p className="mt-1 text-[0.78rem] leading-[1.55] text-muted-foreground">
              Topics, tone and highlight moments are prepared. Demo output for the prototype.
            </p>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => navigate({ to: "/create" })}
            className="rounded-xl border border-border px-4 py-2.5 text-[0.83rem] font-semibold"
          >
            Back
          </button>
          <button
            type="button"
            disabled={!draft.media || analyzing}
            onClick={() => navigate({ to: "/create/editor" })}
            className="cta-gradient flex-1 rounded-xl px-4 py-2.5 text-[0.83rem] font-semibold text-primary-foreground disabled:opacity-40"
          >
            Continue to editor
          </button>
        </div>
      </Panel>
    </div>
  );
}
