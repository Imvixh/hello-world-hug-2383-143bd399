import * as React from "react";
import { Sparkles } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ScheduleDialog({
  open,
  onOpenChange,
  onScheduled,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onScheduled?: (date: string, time: string) => void;
}) {
  const [date, setDate] = React.useState("2026-08-18");
  const [time, setTime] = React.useState("19:30");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="grodo-dark border-border bg-card text-foreground sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle className="text-[1.05rem] font-bold">Schedule post</DialogTitle>
          <DialogDescription className="text-[0.85rem] text-muted-foreground">
            Pick a slot, or use Grodo&apos;s recommended time.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-xl border border-border bg-white/[0.03] p-4">
          <p className="flex items-center gap-2 text-[0.85rem] font-semibold">
            <Sparkles className="h-4 w-4 text-primary-light" /> AI recommended time
          </p>
          <p className="mt-2 text-[1.05rem] font-extrabold tracking-[-0.02em]">
            Tuesday, August 18 · 7:30 PM
          </p>
          <p className="mt-1 text-[0.75rem] leading-[1.55] text-muted-foreground">
            Based on audience activity, previous performance, platform and content type.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setDate("2026-08-18");
                setTime("19:30");
              }}
              className="cta-gradient rounded-lg px-3.5 py-2 text-[0.8rem] font-semibold text-primary-foreground"
            >
              Use recommendation
            </button>
            <span className="rounded-lg border border-border px-3.5 py-2 text-[0.8rem] text-muted-foreground">
              Or choose manually below
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="sch-date" className="text-[0.8rem] text-muted-foreground">
              Date
            </label>
            <input
              id="sch-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.85rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="sch-time" className="text-[0.8rem] text-muted-foreground">
              Time
            </label>
            <input
              id="sch-time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 text-[0.85rem] outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>

        <DialogFooter className="gap-2">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="rounded-xl border border-border px-4 py-2.5 text-[0.83rem] font-semibold"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onScheduled?.(date, time);
              onOpenChange(false);
            }}
            className="cta-gradient rounded-xl px-4 py-2.5 text-[0.83rem] font-semibold text-primary-foreground"
          >
            Schedule post
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
