import type { LinkProps } from "@tanstack/react-router";
import {
  BarChart3,
  Bot,
  CalendarClock,
  Home,
  Inbox,
  PenLine,
  Send,
  Settings,
} from "lucide-react";

export type NavItem = {
  label: string;
  to: NonNullable<LinkProps["to"]>;
  icon: typeof Home;
  badge?: string;
  count?: number;
};

export const APP_NAV: NavItem[] = [
  { label: "Home", to: "/dashboard", icon: Home },
  { label: "Create", to: "/create", icon: PenLine },
  { label: "Publish", to: "/publish", icon: Send, count: 0 },
  { label: "Analytics", to: "/analytics", icon: BarChart3 },
  { label: "Scheduled Posts", to: "/scheduled", icon: CalendarClock },
  { label: "Inbox", to: "/inbox", icon: Inbox },
  { label: "AI Assistant", to: "/assistant", icon: Bot, badge: "New" },
  { label: "Settings", to: "/settings", icon: Settings },
];
