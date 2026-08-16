import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, PanelLeftClose, PanelLeftOpen, Plus, Search } from "lucide-react";

import { GrodoMark } from "@/components/landing/GrodoMark";
import { APP_NAV } from "@/components/app/appNav";
import { PLATFORMS } from "@/components/app/platforms";
import { connectedAccounts } from "@/components/app/mockData";
import { previewUser } from "@/components/app/mockUser";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Props = {
  collapsed: boolean;
  onToggle?: () => void;
  onNavigate?: () => void;
  onConnect?: () => void;
};

export function AppSidebar({ collapsed, onToggle, onNavigate, onConnect }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (to: string) => pathname === to || pathname.startsWith(to + "/");

  const wrap = (label: string, node: React.ReactElement) =>
    collapsed ? (
      <Tooltip>
        <TooltipTrigger asChild>{node}</TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    ) : (
      node
    );

  return (
    <div className="flex h-full min-h-0 flex-col bg-[oklch(0.045_0.012_275)] text-foreground">
      {/* brand */}
      <div
        className={cn(
          "flex items-center gap-2 px-4 pb-3 pt-5",
          collapsed && "justify-center px-2",
        )}
      >
        <Link to="/dashboard" className="flex items-center gap-2" aria-label="Grodo home">
          <GrodoMark className="h-7 w-7 shrink-0" id="shell-mark" />
          {!collapsed && (
            <span className="text-[1.15rem] font-extrabold tracking-[-0.03em]">Grodo</span>
          )}
        </Link>
        {!collapsed && onToggle ? (
          <button
            type="button"
            onClick={onToggle}
            aria-label="Collapse sidebar"
            className="ml-auto hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground lg:flex"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      {collapsed && onToggle ? (
        <div className="flex justify-center pb-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={onToggle}
                aria-label="Expand sidebar"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <PanelLeftOpen className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right">Expand sidebar</TooltipContent>
          </Tooltip>
        </div>
      ) : null}

      {/* new */}
      <div className={cn("px-3.5", collapsed && "px-2")}>
        {wrap(
          "New post",
          <Link
            to="/create"
            onClick={onNavigate}
            aria-label="New post"
            className={cn(
              "cta-gradient flex items-center justify-center gap-2 rounded-xl py-2.5 text-[0.85rem] font-semibold text-primary-foreground transition-transform hover:-translate-y-px",
              collapsed ? "h-10 w-10 p-0" : "w-full px-4",
            )}
          >
            <Plus className="h-4 w-4 shrink-0" />
            {!collapsed && "New"}
          </Link>,
        )}
      </div>

      {/* nav */}
      <nav
        className={cn("mt-4 space-y-1 overflow-y-auto px-3.5", collapsed && "px-2")}
        aria-label="Main"
      >
        {APP_NAV.map(({ label, to, icon: Icon, badge, count }) => {
          const active = isActive(to);
          return (
            <div key={label}>
              {wrap(
                label,
                <Link
                  to={to}
                  onClick={onNavigate}
                  aria-label={label}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-xl text-[0.88rem] font-medium transition-colors",
                    collapsed ? "h-10 w-10 justify-center" : "px-3.5 py-2.5",
                    active
                      ? "bg-primary-soft text-primary-light"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {!collapsed && (
                    <>
                      <span className="truncate">{label}</span>
                      {badge ? (
                        <span className="ml-auto rounded-md bg-primary px-1.5 py-0.5 text-[0.6rem] font-semibold text-primary-foreground">
                          {badge}
                        </span>
                      ) : null}
                      {count !== undefined ? (
                        <span className="ml-auto text-[0.78rem] text-muted-foreground">{count}</span>
                      ) : null}
                    </>
                  )}
                </Link>,
              )}
            </div>
          );
        })}
      </nav>

      {/* channels */}
      <div className={cn("mt-5 border-t border-border px-3.5 pt-4", collapsed && "px-2")}>
        {!collapsed && (
          <div className="mb-3 flex items-center gap-2">
            <span className="text-[0.78rem] text-muted-foreground">Connect channels</span>
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <button
              type="button"
              onClick={onConnect}
              aria-label="Connect a channel"
              className="ml-auto flex h-6 w-6 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}
        <div className={cn("flex flex-wrap items-center gap-2.5", collapsed && "justify-center")}>
          {connectedAccounts.map((a) => {
            const { Icon, name } = PLATFORMS[a.platform];
            return (
              <Tooltip key={a.id}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={onConnect}
                    aria-label={`${name} — ${a.handle}`}
                    className="flex h-7 w-7 items-center justify-center rounded-lg transition-transform hover:-translate-y-px"
                  >
                    <Icon className="h-6 w-6" />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {name} · {a.handle}
                </TooltipContent>
              </Tooltip>
            );
          })}
          {collapsed ? (
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={onConnect}
                  aria-label="Connect a channel"
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-border text-muted-foreground"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">Connect a channel</TooltipContent>
            </Tooltip>
          ) : null}
        </div>
      </div>

      {/* profile */}
      <div className={cn("mt-auto border-t border-border p-3.5", collapsed && "px-2")}>
        {wrap(
          `${previewUser.firstName} — ${previewUser.plan}`,
          <Link
            to="/settings"
            onClick={onNavigate}
            aria-label={`Account settings for ${previewUser.firstName}`}
            className={cn(
              "flex items-center gap-3 rounded-xl transition-colors hover:bg-white/5",
              collapsed ? "h-10 w-10 justify-center" : "px-2 py-2",
            )}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[0.8rem] font-bold text-primary-foreground">
              {previewUser.firstName.charAt(0)}
            </span>
            {!collapsed && (
              <>
                <span className="min-w-0">
                  <span className="block truncate text-[0.85rem] font-semibold">
                    {previewUser.firstName}
                  </span>
                  <span className="block truncate text-[0.75rem] text-muted-foreground">
                    {previewUser.plan}
                  </span>
                </span>
                <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
              </>
            )}
          </Link>,
        )}
      </div>
    </div>
  );
}
