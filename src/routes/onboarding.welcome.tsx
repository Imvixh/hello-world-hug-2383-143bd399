import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";

import { OnboardingShell } from "@/components/app/OnboardingShell";
import { previewUser } from "@/components/app/mockUser";

const title = "Welcome to Grodo — Get started";
const description = "Set up your Grodo workspace in a few quick steps.";

export const Route = createFileRoute("/onboarding/welcome")({
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
  component: WelcomePage,
});

function WelcomePage() {
  return (
    <OnboardingShell>
      <div className="reveal reveal-in text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary-light">
          <Sparkles className="h-3.5 w-3.5" /> Let&apos;s get started
        </span>

        <h1 className="mt-8 text-[2.4rem] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[3.4rem]">
          Welcome to <span className="text-primary-light">Grodo</span>,
          <br />
          {previewUser.firstName} 👋
        </h1>

        <p className="mx-auto mt-6 max-w-[560px] text-[1rem] leading-[1.7] text-muted-foreground sm:text-[1.05rem]">
          We&apos;ll ask you a few quick questions so your workspace, insights and content
          suggestions feel made for you.
        </p>

        <Link
          to="/onboarding/role"
          className="cta-gradient mt-10 inline-flex items-center justify-center gap-2.5 rounded-xl px-9 py-4 text-[1rem] font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          Get started <ArrowRight className="h-4 w-4" />
        </Link>

        <p className="mt-5 text-[0.85rem] text-muted-foreground">Takes less than a minute</p>
      </div>
    </OnboardingShell>
  );
}
