import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { ContinueButton, OnboardingShell } from "@/components/app/OnboardingShell";
import {
  BlueskyIcon,
  FacebookIcon,
  GoogleBusinessIcon,
  InstagramIcon,
  LinkedInIcon,
  MastodonIcon,
  PinterestIcon,
  ThreadsIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/landing/BrandIcons";

const title = "Connect your social channels — Grodo";
const description = "Choose the platforms you want to manage inside Grodo.";

export const Route = createFileRoute("/onboarding/channels")({
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
  component: ChannelsPage,
});

const CHANNELS = [
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: TikTokIcon, label: "TikTok" },
  { Icon: YouTubeIcon, label: "YouTube" },
  { Icon: XIcon, label: "X (Twitter)" },
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: PinterestIcon, label: "Pinterest" },
  { Icon: ThreadsIcon, label: "Threads" },
  { Icon: MastodonIcon, label: "Mastodon" },
  { Icon: BlueskyIcon, label: "Bluesky" },
  { Icon: GoogleBusinessIcon, label: "Google Business" },
];

function ChannelsPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) =>
    setSelected((s) => (s.includes(label) ? s.filter((x) => x !== label) : [...s, label]));

  return (
    <OnboardingShell step={1} backTo="/onboarding/role">
      <div className="w-full max-w-[900px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary-light">
          <Sparkles className="h-3.5 w-3.5" /> Step 2 of 3
        </span>
        <h1 className="mt-6 text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[2.4rem]">
          Which channels do you use?
        </h1>
        <p className="mx-auto mt-3 max-w-[520px] text-[0.95rem] leading-[1.6] text-muted-foreground">
          Select all the platforms you want to plan, publish and track with Grodo.
        </p>

        <div className="mt-9 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
          {CHANNELS.map(({ Icon, label }) => {
            const active = selected.includes(label);
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(label)}
                className={`relative flex flex-col items-center gap-3 rounded-2xl border px-4 py-6 transition-all duration-300 ${
                  active
                    ? "border-primary-light bg-primary-soft/60 shadow-[0_0_0_1px_var(--primary-light)]"
                    : "border-white/10 bg-white/[0.03] hover:-translate-y-0.5 hover:border-white/20"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/8">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="text-[0.85rem] font-semibold">{label}</span>
                {active ? (
                  <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-[0.85rem] text-muted-foreground">
          {selected.length === 0
            ? "Select at least one channel to continue"
            : `${selected.length} channel${selected.length > 1 ? "s" : ""} selected`}
        </p>

        <div className="mt-6 flex justify-center">
          <ContinueButton
            disabled={selected.length === 0}
            onClick={() => void navigate({ to: "/onboarding/source" })}
          >
            Continue <ArrowRight className="h-4 w-4" />
          </ContinueButton>
        </div>
      </div>
    </OnboardingShell>
  );
}
