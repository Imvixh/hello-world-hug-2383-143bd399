import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { GrodoMark } from "@/components/landing/GrodoMark";

type Props = {
  /** 0-based index of the active step dot; omit to hide the indicator. */
  step?: number;
  steps?: number;
  backTo?: string;
  children: ReactNode;
};

export function OnboardingShell({ step, steps = 4, backTo, children }: Props) {
  return (
    <div className="grodo-dark starfield min-h-screen bg-background text-foreground">
      <header className="relative z-10 flex items-center gap-4 px-5 py-5 sm:px-9 sm:py-6">
        {backTo ? (
          <Link
            to={backTo}
            aria-label="Go back"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-white/5"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        ) : null}
        <span className="flex items-center gap-2">
          <GrodoMark className="h-7 w-7" id="onb-mark" />
          <span className="text-[1.25rem] font-extrabold tracking-[-0.03em]">Grodo</span>
        </span>

        {typeof step === "number" ? (
          <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 sm:flex">
            {Array.from({ length: steps }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === step ? "bg-primary-light" : "bg-white/18"
                }`}
              />
            ))}
          </span>
        ) : null}
      </header>

      {typeof step === "number" ? (
        <div className="relative z-10 flex items-center justify-center gap-2.5 pb-2 sm:hidden">
          {Array.from({ length: steps }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === step ? "bg-primary-light" : "bg-white/18"}`}
            />
          ))}
        </div>
      ) : null}

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] w-full max-w-[1100px] flex-col items-center justify-center px-5 pb-16 pt-6 sm:px-8">
        {children}
      </main>
    </div>
  );
}

export function ContinueButton({
  children = "Continue",
  disabled,
  onClick,
  className = "",
}: {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex w-full max-w-[320px] items-center justify-center gap-2.5 rounded-xl px-8 py-4 text-[1rem] font-semibold text-primary-foreground transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 ${
        disabled ? "bg-primary/60" : "cta-gradient hover:-translate-y-0.5"
      } ${className}`}
    >
      {children}
    </button>
  );
}
