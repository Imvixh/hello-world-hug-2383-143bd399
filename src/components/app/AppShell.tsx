import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, ChevronDown, Menu, Plus, Search } from "lucide-react";

import { AppSidebar } from "@/components/app/AppSidebar";
import { ConnectChannelDialog } from "@/components/app/ConnectChannelDialog";
import { previewUser } from "@/components/app/mockUser";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [collapsed, setCollapsed] = React.useState(() => pathname !== "/dashboard");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [connectOpen, setConnectOpen] = React.useState(false);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="grodo-dark flex h-dvh overflow-hidden bg-background text-foreground">
        {/* fixed desktop sidebar */}
        <aside
          className={cn(
            "hidden shrink-0 border-r border-border transition-[width] duration-200 ease-out lg:block",
            collapsed ? "w-[72px]" : "w-[236px]",
          )}
        >
          <div className="h-full min-h-0">
            <AppSidebar
              collapsed={collapsed}
              onToggle={() => setCollapsed((c) => !c)}
              onConnect={() => setConnectOpen(true)}
            />
          </div>
        </aside>

        {/* mobile drawer */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent side="left" className="grodo-dark w-[264px] border-border p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <AppSidebar
              collapsed={false}
              onNavigate={() => setMobileOpen(false)}
              onConnect={() => {
                setMobileOpen(false);
                setConnectOpen(true);
              }}
            />
          </SheetContent>
        </Sheet>

        {/* main column */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="grid shrink-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-5 py-4 sm:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                aria-label="Open navigation"
                onClick={() => setMobileOpen(true)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-muted-foreground lg:hidden"
              >
                <Menu className="h-4 w-4" />
              </button>
              <span className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-border bg-white/[0.03] px-3.5 py-2.5 sm:max-w-[340px]">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  aria-label="Search"
                  placeholder="Search content, posts, analytics"
                  className="min-w-0 flex-1 bg-transparent text-[0.85rem] outline-none placeholder:text-muted-foreground"
                />
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-2.5">
              <Link
                to="/create"
                className="cta-gradient hidden items-center gap-2 rounded-xl px-4 py-2.5 text-[0.85rem] font-semibold text-primary-foreground sm:inline-flex"
              >
                <Plus className="h-4 w-4" /> Create post
              </Link>
              <Link
                to="/inbox"
                aria-label="Notifications"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:text-foreground"
              >
                <Bell className="h-4 w-4" />
              </Link>
              <Link
                to="/settings"
                aria-label="Account"
                className="flex items-center gap-2 rounded-xl border border-border px-2.5 py-1.5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[0.75rem] font-bold text-primary-foreground">
                  {previewUser.firstName.charAt(0)}
                </span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </Link>
            </div>
          </header>

          <main className="min-h-0 flex-1 overflow-y-auto px-5 py-7 sm:px-8">
            <div className="mx-auto w-full max-w-[1440px]">{children}</div>
          </main>
        </div>

        <ConnectChannelDialog open={connectOpen} onOpenChange={setConnectOpen} />
      </div>
    </TooltipProvider>
  );
}
