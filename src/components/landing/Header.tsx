import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Logo } from "./Logo";
import { NAV, type NavEntry } from "./navData";

const OPEN_DELAY = 60;
const CLOSE_DELAY = 140;
const EXIT_DURATION = 170;

const SPAN: Record<number, string> = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
};
const COLS: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};
const OUTER: Record<number, string> = {
  2: "sm:grid-cols-2",
  5: "sm:grid-cols-5",
};

function MegaPanel({ entry }: { entry: NavEntry }) {
  const groups = entry.groups ?? [];
  const outer = entry.outerCols ?? (groups.length > 1 ? 2 : 1);
  return (
    <div className="p-6 sm:p-7">
      <div className={`grid gap-x-8 gap-y-1 ${OUTER[outer] ?? ""}`}>
        {groups.map((group, gi) => (
          <div
            key={group.heading ?? gi}
            className={`flex flex-col gap-1 ${group.span ? SPAN[group.span] : ""}`}
          >
            {group.heading ? (
              <p className="mb-2 px-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {group.heading}
              </p>
            ) : null}
            <div className={`grid gap-1 ${group.cols ? COLS[group.cols] : ""}`}>

            {group.items.map((item) => (
              <a
                key={item.title}
                href="#features"
                data-mega-item
                className="group flex items-start gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
              >
                <item.icon className="mt-0.5 h-[1.15rem] w-[1.15rem] shrink-0 text-primary" />
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="text-[0.95rem] font-semibold text-foreground">{item.title}</span>
                    {item.badge ? (
                      <span className="rounded-md bg-primary-soft px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                        {item.badge}
                      </span>
                    ) : null}
                  </span>
                  {item.description ? (
                    <span className="mt-0.5 block text-[0.85rem] leading-snug text-muted-foreground">
                      {item.description}
                    </span>
                  ) : null}
                </span>
              </a>
            ))}
            </div>
          </div>

        ))}
      </div>
      {entry.footerLink ? (
        <a
          href="#features"
          data-mega-item
          className="mt-4 inline-block border-t border-border pt-4 text-[0.85rem] font-semibold text-primary transition-opacity hover:opacity-80 focus-visible:outline-none"
        >
          {entry.footerLink} →
        </a>
      ) : null}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);
  const exitTimer = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const clearTimers = () => {
    [openTimer, closeTimer, exitTimer].forEach((t) => {
      if (t.current) window.clearTimeout(t.current);
      t.current = null;
    });
  };

  const openMenu = useCallback((label: string, delay = OPEN_DELAY) => {
    clearTimers();
    openTimer.current = window.setTimeout(() => {
      setActive(label);
      window.requestAnimationFrame(() => setVisible(true));
    }, delay);
  }, []);

  const closeMenu = useCallback((delay = CLOSE_DELAY) => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => {
      setVisible(false);
      exitTimer.current = window.setTimeout(() => setActive(null), EXIT_DURATION);
    }, delay);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu(0);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  const onPanelKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    const items = Array.from(
      panelRef.current?.querySelectorAll<HTMLElement>("[data-mega-item]") ?? [],
    );
    if (!items.length) return;
    e.preventDefault();
    const idx = items.indexOf(document.activeElement as HTMLElement);
    const next =
      e.key === "ArrowDown"
        ? items[(idx + 1 + items.length) % items.length]
        : items[(idx - 1 + items.length) % items.length];
    next?.focus();
  };

  const activeEntry = NAV.find((n) => n.label === active);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_20px_-12px_oklch(0.4_0.14_280/0.3)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 lg:px-14">
        <a href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <Logo />
        </a>

        <nav
          className="relative hidden items-center gap-8 lg:flex"
          onMouseLeave={() => closeMenu()}
        >
          {NAV.map((item) =>
            item.groups ? (
              <button
                key={item.label}
                type="button"
                aria-expanded={active === item.label}
                aria-haspopup="true"
                onMouseEnter={() => openMenu(item.label)}
                onFocus={() => openMenu(item.label, 0)}
                onClick={() =>
                  active === item.label ? closeMenu(0) : openMenu(item.label, 0)
                }
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    openMenu(item.label, 0);
                    window.setTimeout(() => {
                      panelRef.current
                        ?.querySelector<HTMLElement>("[data-mega-item]")
                        ?.focus();
                    }, 30);
                  }
                }}
                className={`group flex items-center gap-1.5 text-[0.95rem] font-medium transition-colors hover:text-primary ${
                  active === item.label ? "text-primary" : "text-foreground/85"
                }`}
              >
                {item.label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    active === item.label
                      ? "rotate-180 text-primary"
                      : "text-muted-foreground group-hover:translate-y-0.5"
                  }`}
                />
              </button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => closeMenu(0)}
                className="text-[0.95rem] font-medium text-foreground/85 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ),
          )}

          {activeEntry ? (
            <div
              ref={panelRef}
              onMouseEnter={() => clearTimers()}
              onMouseLeave={() => closeMenu()}
              onKeyDown={onPanelKeyDown}
              style={{ width: activeEntry.width }}
              className={`absolute left-1/2 top-full z-50 -translate-x-1/2 overflow-hidden rounded-[22px] border border-border bg-popover shadow-[0_24px_60px_-24px_oklch(0.4_0.14_280/0.35)] ${
                visible
                  ? "pointer-events-auto translate-y-3 scale-100 opacity-100 transition-[opacity,transform] duration-200 ease-out"
                  : "pointer-events-none translate-y-0 scale-[0.98] opacity-0 transition-[opacity,transform] duration-[165ms] ease-out"
              }`}
            >
              <MegaPanel entry={activeEntry} />
            </div>
          ) : null}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-xl border border-border px-5 py-2.5 text-[0.95rem] font-semibold text-foreground transition-colors hover:bg-secondary sm:block"
          >
            Log in
          </Link>
          <button
            type="button"
            className="cta-gradient hidden items-center gap-2 rounded-xl px-5 py-2.5 text-[0.95rem] font-semibold text-primary-foreground shadow-[0_8px_20px_-8px_oklch(0.45_0.24_280/0.6)] transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Get started for free <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background px-6 pb-8 pt-2 lg:hidden">
          {NAV.map((item) =>
            item.groups ? (
              <div key={item.label} className="border-b border-border/70">
                <button
                  type="button"
                  aria-expanded={mobileSection === item.label}
                  onClick={() =>
                    setMobileSection((s) => (s === item.label ? null : item.label))
                  }
                  className="flex w-full items-center justify-between py-4 text-left text-[1rem] font-semibold text-foreground"
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                      mobileSection === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileSection === item.label ? (
                  <div className="animate-fade-in pb-3">
                    <MegaPanel entry={item} />
                  </div>
                ) : null}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-border/70 py-4 text-[1rem] font-semibold text-foreground"
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      ) : null}
    </header>
  );
}
