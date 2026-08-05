import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/landing/Footer";
import { GrowCta } from "@/components/landing/GrowCta";
import { Header } from "@/components/landing/Header";
import { Integrations } from "@/components/landing/Integrations";
import { Pricing } from "@/components/landing/Pricing";

const title = "Pricing — Grodo AI Social Media Workspace";
const description =
  "Simple plans, powerful growth. Compare Grodo's Free, Standard, and Advanced plans with monthly and yearly billing.";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Pricing />
        <Integrations />
        <GrowCta />
      </main>
      <Footer />
    </div>
  );
}
