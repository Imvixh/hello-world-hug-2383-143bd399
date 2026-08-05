import {
  Blocks,
  BookOpen,
  Boxes,
  Building2,
  CalendarClock,
  Cloud,
  Code2,
  FileStack,
  FileText,
  GraduationCap,
  Heart,
  Image,
  Instagram,
  Layers,
  Layout,
  LifeBuoy,
  Linkedin,
  MessageCircle,
  Palette,
  PenSquare,
  PieChart,
  Rocket,
  Send,
  Share2,
  Sparkles,
  Store,
  TrendingUp,
  Twitter,
  Users,
  Wrench,
  Youtube,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type MenuItem = {
  title: string;
  description?: string;
  icon: LucideIcon;
  badge?: string;
};

export type MenuGroup = {
  heading?: string;
  items: MenuItem[];
  /** outer grid span */
  span?: number;
  /** inner column count */
  cols?: number;
};

export type NavEntry = {
  label: string;
  outerCols?: number;
  href?: string;
  groups?: MenuGroup[];
  footerLink?: string;
  width?: string;
};

export const NAV: NavEntry[] = [
  {
    label: "Features",
    width: "min(720px,calc(100vw - 3rem))",
    groups: [
      {
        items: [
          {
            title: "Create",
            description: "Build your own library of content ideas",
            icon: PenSquare,
          },
          {
            title: "Insights",
            description: "Understand your performance and what to post next",
            icon: TrendingUp,
            badge: "New",
          },
          {
            title: "Collaborate",
            description: "Work together seamlessly, from planning to publishing",
            icon: Users,
          },
          {
            title: "AI Assistant",
            description: "Get help creating, refining, and repurposing content",
            icon: Sparkles,
          },
        ],
      },
      {
        items: [
          {
            title: "Publish",
            description: "Plan and schedule your content across social platforms",
            icon: CalendarClock,
          },
          {
            title: "Community",
            description: "Easily engage with your community",
            icon: MessageCircle,
          },
          {
            title: "Start Page",
            description: "Build a custom link-in-bio page in minutes",
            icon: Layout,
          },
          {
            title: "API",
            description: "Connect Grodo to your agents, automation tools, or build something entirely new",
            icon: Code2,
          },
        ],
      },
    ],
  },
  {
    label: "Integrations",
    width: "min(940px,calc(100vw - 3rem))",
    outerCols: 5,
    footerLink: "See all integrations",
    groups: [
      {
        heading: "Channels",
        span: 3,
        cols: 3,
        items: [
          { title: "Instagram", icon: Instagram },
          { title: "LinkedIn", icon: Linkedin },
          { title: "Threads", icon: Send },
          { title: "Bluesky", icon: Cloud },
          { title: "Facebook", icon: Share2 },
          { title: "X (Twitter)", icon: Twitter },
          { title: "Pinterest", icon: Heart },
          { title: "Mastodon", icon: Boxes },
          { title: "TikTok", icon: Rocket },
          { title: "YouTube", icon: Youtube },
          { title: "Google Business Profile", icon: Building2 },
        ],
      },
      {
        heading: "Tools",
        span: 2,
        cols: 2,
        items: [
          { title: "Canva", icon: Palette },
          { title: "Zapier", icon: Zap },
          { title: "Dropbox", icon: Layers },
          { title: "Google Drive", icon: FileStack },
          { title: "Unsplash", icon: Image },
          { title: "OneDrive", icon: Blocks },
        ],
      },
    ],
  },
  {
    label: "Made For",
    width: "min(620px,calc(100vw - 3rem))",
    groups: [
      {
        items: [
          {
            title: "Creators",
            description: "Grow your community with confidence, not complexity",
            icon: Sparkles,
          },
          {
            title: "Agencies",
            description: "Run every client's social with clarity",
            icon: Building2,
          },
          {
            title: "Higher Education",
            description: "Social media management built for schools and universities",
            icon: GraduationCap,
          },
        ],
      },
      {
        items: [
          {
            title: "Small Business",
            description: "A simpler way to manage your small business' social media",
            icon: Store,
          },
          {
            title: "Nonprofits",
            description: "Made for small teams doing big things",
            icon: Heart,
          },
          {
            title: "Developers",
            description: "Add a social layer for whatever you're building",
            icon: Code2,
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    width: "min(680px,calc(100vw - 3rem))",
    groups: [
      {
        items: [
          {
            title: "Blog",
            description: "Real-life stories and resources on growing an engaged audience",
            icon: FileText,
          },
          {
            title: "Free Tools",
            description: "Easy-to-use tools to grow your presence across social media",
            icon: Wrench,
          },
          {
            title: "Support",
            description: "Help articles and tutorials to get the most out of Grodo",
            icon: LifeBuoy,
          },
          {
            title: "Case Studies",
            description: "How power users get more from Grodo",
            icon: PieChart,
          },
        ],
      },
      {
        items: [
          {
            title: "Templates",
            description: "Plug-and-play content templates to jump-start your planning",
            icon: FileStack,
          },
          {
            title: "Our Community",
            description: "Learn, connect, and grow with creators around the world",
            icon: Users,
          },
          {
            title: "Developer Docs",
            description: "Connect Grodo to your agents, automation tools, or build something new",
            icon: BookOpen,
          },
        ],
      },
    ],
  },
  { label: "Pricing", href: "#pricing" },
];
