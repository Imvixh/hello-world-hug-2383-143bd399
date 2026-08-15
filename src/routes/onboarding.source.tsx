import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import { ContinueButton, OnboardingShell } from "@/components/app/OnboardingShell";

const title = "How did you hear about us? — Grodo";
const description = "One last question before your Grodo workspace is ready.";

export const Route = createFileRoute("/onboarding/source")({
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
  component: SourcePage,
});

const SOURCES = [
  "Google search",
  "Instagram",
  "YouTube",
  "TikTok",
  "LinkedIn",
  "Friend or colleague",
  "Blog or article",
  "Other",
];

function SourcePage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <OnboardingShell step={2} backTo="/onboarding/channels">
      <div className="w-full max-w-[620px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary-light">
          <Sparkles className="h-3.5 w-3.5" /> Step 3 of 3
        </span>
        <h1 className="mt-6 text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[2.4rem]">
          How did you hear about us?
        </h1>
        <p className="mx-auto mt-3 max-w-[460px] text-[0.95rem] leading-[1.6] text-muted-foreground">
          Last question — it helps us know where to show up next.
        </p>

        <div className="mt-9 space-y-3 text-left">
          {SOURCES.map((label) => {
            const active = selected === label;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(label)}
                className={`flex w-full items-center gap-3.5 rounded-xl border px-5 py-4 transition-all duration-300 ${
                  active
                    ? "border-primary-light bg-primary-soft/60 shadow-[0_0_0_1px_var(--primary-light)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    active ? "border-primary-light" : "border-white/25"
                  }`}
                >
                  {active ? <span className="h-2.5 w-2.5 rounded-full bg-primary-light" /> : null}
                </span>
                <span className="text-[0.95rem] font-semibold">{label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <ContinueButton disabled={!selected} onClick={() => void navigate({ to: "/dashboard" })}>
            Finish setup <ArrowRight className="h-4 w-4" />
          </ContinueButton>
        </div>
      </div>
    </OnboardingShell>
  );
}
