import { Check, Heart, Mail, Shield, Sparkles, Zap } from "lucide-react";

import { GrodoMark } from "./GrodoMark";
import { InstagramIcon, LinkedInIcon, TikTokIcon, XIcon, YouTubeIcon } from "./BrandIcons";

const COLUMNS = [
  {
    title: "Platform",
    links: ["Features", "Integrations", "AI Tools", "Analytics", "Pricing", "What's New"],
  },
  {
    title: "Solutions",
    links: [
      "For Creators",
      "For Small Business",
      "For Agencies",
      "For Enterprises",
      "Content Calendar",
      "Social Inbox",
    ],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides & Tutorials", "Resource Library", "Templates", "Help Center", "Status"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Partner Program", "Affiliate", "Contact Us"],
  },
];

const BADGES = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    body: "Smart tools that work for you",
  },
  { icon: Shield, title: "Secure & Reliable", body: "Your data is safe with us" },
  {
    icon: Zap,
    title: "Built for Creators",
    body: "Designed by creators,\nfor creators",
  },
];

const SOCIALS = [InstagramIcon, TikTokIcon, YouTubeIcon, XIcon, LinkedInIcon];

export function Footer() {
  return (
    <footer className="bg-background px-3 pb-3">
      <div className="mx-auto max-w-[1400px] rounded-3xl bg-footer px-7 py-12 text-footer-foreground lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr]">
          {/* brand column */}
          <div>
            <span className="flex items-center gap-2">
              <GrodoMark
                className="h-8 w-8"
                id="grodo-mark-footer"
                from="oklch(0.72 0.19 295)"
                to="oklch(0.55 0.24 280)"
              />
              <span className="text-[1.6rem] font-extrabold tracking-[-0.03em]">Grodo</span>
            </span>

            <p className="mt-5 max-w-[250px] text-[0.9rem] leading-[1.65] text-footer-muted">
              All-in-one AI platform to plan, create, post, and grow your social media smarter.
            </p>

            <ul className="mt-7 space-y-5">
              {BADGES.map((b) => (
                <li key={b.title} className="flex gap-3">
                  <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary-light" />
                  <span>
                    <span className="block text-[0.92rem] font-semibold">{b.title}</span>
                    <span className="block whitespace-pre-line text-[0.85rem] leading-[1.5] text-footer-muted">
                      {b.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* link columns + newsletter */}
          <div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {COLUMNS.map((col) => (
                <div key={col.title}>
                  <h3 className="text-[0.95rem] font-bold">{col.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#features"
                          className="text-[0.9rem] text-footer-muted transition-colors duration-200 hover:text-footer-foreground"
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-footer-border pt-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                <span className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-2xl bg-primary-light/20">
                  <Mail className="h-7 w-7 text-primary-light" />
                </span>
                <div className="max-w-[300px]">
                  <h3 className="text-[1.15rem] font-bold">Stay in the loop</h3>
                  <p className="mt-2 text-[0.88rem] leading-[1.6] text-footer-muted">
                    Get creator tips, product updates, and exclusive offers straight to your inbox.
                  </p>
                </div>
                <div className="flex-1">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-2 sm:flex-row"
                  >
                    <input
                      type="email"
                      aria-label="Enter your email"
                      placeholder="Enter your email..."
                      className="min-w-0 flex-1 rounded-xl border border-footer-border bg-footer-card px-4 py-3 text-[0.9rem] text-footer-foreground outline-none placeholder:text-footer-muted focus:border-primary-light"
                    />
                    <button
                      type="submit"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary-light px-6 py-3 text-[0.9rem] font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Subscribe <span aria-hidden="true">→</span>
                    </button>
                  </form>
                  <ul className="mt-3.5 flex flex-wrap gap-x-6 gap-y-2 text-[0.8rem] text-footer-muted">
                    {["No spam, ever", "Unsubscribe anytime", "Helpful content only"].map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-primary-light" strokeWidth={3} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-footer-border pt-7 lg:flex-row lg:justify-between">
          <p className="text-[0.85rem] text-footer-muted">© 2026 Grodo. All rights reserved.</p>
          <ul className="flex flex-wrap justify-center gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <li key={l}>
                <a
                  href="#features"
                  className="text-[0.88rem] text-footer-muted transition-colors hover:text-footer-foreground"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-3">
            {SOCIALS.map((Icon, i) => (
              <li key={i}>
                <a
                  href="#features"
                  aria-label="Grodo social profile"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-footer-card transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon className="h-[18px] w-[18px] [&_path]:fill-white [&_rect]:fill-transparent [&_circle]:fill-transparent" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
