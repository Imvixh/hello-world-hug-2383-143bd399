import { Link } from "@tanstack/react-router";

import {
  DriveIcon,
  DropboxIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "./BrandIcons";
import { Reveal } from "./Reveal";

const ICONS = [
  InstagramIcon,
  FacebookIcon,
  TikTokIcon,
  LinkedInIcon,
  YouTubeIcon,
  XIcon,
  PinterestIcon,
  DriveIcon,
  DropboxIcon,
];

export function Integrations() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-14">
        <Reveal>
          <span className="inline-flex rounded-full bg-primary-soft px-3.5 py-1.5 text-[0.8rem] font-semibold text-primary">
            Integrations
          </span>
        </Reveal>

        <Reveal delay={70}>
          <h2 className="mt-5 text-[1.9rem] font-extrabold tracking-[-0.035em] sm:text-[2.4rem]">
            Connect your favorite tools
          </h2>
        </Reveal>

        <Reveal delay={130}>
          <p className="mx-auto mt-3 max-w-[560px] text-[0.98rem] text-muted-foreground">
            Grodo works seamlessly with the platforms and tools you already use.
          </p>
        </Reveal>

        <Reveal delay={190}>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-5">
            {ICONS.map((Icon, i) => (
              <li key={i}>
                <Link
                  to="/"
                  aria-label="Integration"
                  className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-border/70 bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-float)]"
                >
                  <Icon className="h-8 w-8" />
                </Link>
              </li>
            ))}
            <li className="flex h-[68px] w-[68px] flex-col items-center justify-center rounded-full border border-border/70 bg-card text-[0.78rem] font-semibold leading-tight text-muted-foreground shadow-[var(--shadow-card)]">
              <span className="text-foreground">+20</span>
              <span>more</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={250}>
          <a
            href="#features"
            className="group mt-10 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-primary"
          >
            View all integrations
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
