import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const STEPS = ["Setup", "Media", "Create Post"];

export function CreateSteps({ current }: { current: 1 | 2 | 3 }) {
  return (
    <ol className="mt-5 flex flex-wrap items-center gap-3">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const done = step < current;
        const active = step === current;
        return (
          <li key={label} className="flex items-center gap-3">
            <span
              className={cn(
                "flex items-center gap-2 rounded-xl border px-3.5 py-2 text-[0.82rem] font-semibold transition-colors",
                active
                  ? "border-primary bg-primary-soft text-primary-light"
                  : done
                    ? "border-border text-foreground"
                    : "border-border text-muted-foreground",
              )}
              aria-current={active ? "step" : undefined}
            >
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-[0.7rem] font-bold",
                  active || done
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-muted-foreground",
                )}
              >
                {done ? <Check className="h-3 w-3" /> : step}
              </span>
              {label}
            </span>
            {step < STEPS.length ? <span className="h-px w-6 bg-border sm:w-10" /> : null}
          </li>
        );
      })}
    </ol>
  );
}
