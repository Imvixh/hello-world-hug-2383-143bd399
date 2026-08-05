import { createFileRoute } from "@tanstack/react-router";

import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Integrations } from "@/components/landing/Integrations";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyGrodo } from "@/components/landing/WhyGrodo";

const title = "Grodo — Your AI Social Media Workspace";
const description =
  "Create, analyze, schedule, and grow – all in one place. Smart insights to help you post better and grow faster.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>

        <Hero />
        <LogoStrip />
        <Features />
        <Integrations />
        <WhyGrodo />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
