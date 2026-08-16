import * as React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  actions,
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
      <div className="min-w-0">
        <h1 className="truncate text-[1.4rem] font-extrabold tracking-[-0.03em] sm:text-[1.7rem]">
          {title}
        </h1>
        {description ? (
          <p className="mt-1 text-[0.88rem] text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2.5">{actions}</div> : null}
    </div>
  );
}

export function Panel({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card p-6", className)} {...rest}>
      {children}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  change,
  period,
  hint,
}: {
  label: string;
  value: string;
  change?: number;
  period?: string;
  hint?: string;
}) {
  const positive = (change ?? 0) >= 0;
  return (
    <div className="rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-0.5">
      <p className="text-[0.8rem] text-muted-foreground">{label}</p>
      <p className="mt-2 text-[1.6rem] font-extrabold tracking-[-0.03em]">{value}</p>
      {change !== undefined ? (
        <p
          className={cn(
            "mt-1 flex items-center gap-1 text-[0.78rem] font-semibold",
            positive ? "text-icon-green" : "text-destructive",
          )}
        >
          {positive ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}
          {positive ? "+" : ""}
          {change}%
          {period ? <span className="font-normal text-muted-foreground">{period}</span> : null}
        </p>
      ) : null}
      {hint ? <p className="mt-1 text-[0.75rem] text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border px-6 py-12 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
        <Icon className="h-5 w-5 text-primary-light" />
      </span>
      <p className="mt-4 text-[0.92rem] font-semibold">{title}</p>
      <p className="mt-1.5 max-w-[320px] text-[0.82rem] leading-[1.55] text-muted-foreground">
        {description}
      </p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

export function Chip({
  active,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-lg border px-3 py-1.5 text-[0.78rem] font-medium transition-colors",
        active
          ? "border-primary bg-primary-soft text-primary-light"
          : "border-border text-muted-foreground hover:text-foreground",
        className,
      )}
      {...rest}
    />
  );
}

export function SkeletonBlock({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-xl bg-white/5", className)} />;
}

export function ErrorState({
  title,
  description,
  onRetry,
}: {
  title: string;
  description: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-destructive/40 px-6 py-10 text-center">
      <p className="text-[0.92rem] font-semibold">{title}</p>
      <p className="mt-1.5 max-w-[320px] text-[0.82rem] text-muted-foreground">{description}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-xl border border-border px-4 py-2 text-[0.83rem] font-semibold"
        >
          Try again
        </button>
      ) : null}
    </div>
  );
}
