import { Sparkle } from "lucide-react";

import { RevealDir } from "./RevealDir";

export function GrowCta() {
  return (
    <section className="bg-background px-6 pb-20 lg:px-14 lg:pb-24">
      <RevealDir direction="up" className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden rounded-3xl bg-primary-soft px-7 py-10 lg:px-12">
          <Sparkle
            aria-hidden="true"
            className="twinkle absolute left-[4%] top-1/2 h-6 w-6 -translate-y-1/2 fill-primary-light/60 text-primary-light/60"
          />
          <Sparkle
            aria-hidden="true"
            className="twinkle absolute right-[5%] top-1/2 h-6 w-6 -translate-y-1/2 fill-primary-light/60 text-primary-light/60"
            style={{ animationDelay: "1.1s" }}
          />
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="text-[1.6rem] font-extrabold tracking-[-0.03em] text-primary">
                Ready to grow smarter?
              </h2>
              <p className="mt-2 text-[0.9rem] text-muted-foreground">
                Create your Grodo account and start planning better content today.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full flex-col gap-2 sm:flex-row lg:max-w-[480px]"
            >
              <input
                type="email"
                aria-label="Enter your email"
                placeholder="Enter your email..."
                className="min-w-0 flex-1 rounded-xl border border-border bg-card px-4 py-3.5 text-[0.92rem] outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="cta-gradient inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[0.92rem] font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Get started for free <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>
        </div>
      </RevealDir>
    </section>
  );
}
