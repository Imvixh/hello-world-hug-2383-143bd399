import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Megaphone,
  ShoppingBag,
  Sparkles,
  User,
  Users,
} from "lucide-react";

import { ContinueButton, OnboardingShell } from "@/components/app/OnboardingShell";

const title = "What best describes you? — Grodo";
const description = "Tell Grodo how you work so your workspace fits your goals.";

export const Route = createFileRoute("/onboarding/role")({
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
  component: RolePage,
});

const ROLES = [
  { icon: User, label: "Solo creator", body: "I create and post content on my own" },
  { icon: Megaphone, label: "Influencer", body: "I grow an audience and work with brands" },
  { icon: Building2, label: "Small business", body: "I market my own business online" },
  { icon: Briefcase, label: "Marketing agency", body: "I manage social media for clients" },
  { icon: Users, label: "Marketing team", body: "We run social as part of a bigger team" },
  { icon: ShoppingBag, label: "E-commerce brand", body: "I sell products and drive traffic" },
];

function RolePage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <OnboardingShell step={0} backTo="/onboarding/welcome">
      <div className="w-full max-w-[880px] text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary-light">
          <Sparkles className="h-3.5 w-3.5" /> Step 1 of 3
        </span>
        <h1 className="mt-6 text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[2.4rem]">
          What best describes you?
        </h1>
        <p className="mx-auto mt-3 max-w-[520px] text-[0.95rem] leading-[1.6] text-muted-foreground">
          This helps us tailor your dashboard, insights and content suggestions.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map(({ icon: Icon, label, body }) => {
            const active = selected === label;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(label)}
                className={`relative rounded-2xl border p-5 text-left transition-all duration-300 ${
                  active
                    ? "border-primary-light bg-primary-soft/60 shadow-[0_0_0_1px_var(--primary-light)]"
                    : "border-white/10 bg-white/[0.03] hover:-translate-y-0.5 hover:border-white/20"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    active ? "bg-primary text-primary-foreground" : "bg-white/8 text-primary-light"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="mt-4 block text-[1rem] font-bold">{label}</span>
                <span className="mt-1.5 block text-[0.83rem] leading-[1.55] text-muted-foreground">
                  {body}
                </span>
                {active ? (
                  <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <ContinueButton
            disabled={!selected}
            onClick={() => void navigate({ to: "/onboarding/channels" })}
          >
            Continue <ArrowRight className="h-4 w-4" />
          </ContinueButton>
        </div>
      </div>
    </OnboardingShell>
  );
}
