/**
 * ISOLATED DEMO DATA FOR THE PROTOTYPE UI ONLY.
 *
 * Nothing here is real backend data. Replace this module with real queries
 * when the Grodo backend exists — no component imports data from anywhere else.
 */
import type { PlatformId } from "./platforms";

export type ConnectedAccount = {
  id: string;
  platform: PlatformId;
  handle: string;
  displayName: string;
  avatar?: string;
};

export const connectedAccounts: ConnectedAccount[] = [
  { id: "ig", platform: "instagram", handle: "@spradha.gec", displayName: "Spradha" },
  { id: "fb", platform: "facebook", handle: "Spradha Page", displayName: "Spradha" },
  { id: "tt", platform: "tiktok", handle: "@spradha", displayName: "Spradha" },
  { id: "yt", platform: "youtube", handle: "Spradha Studio", displayName: "Spradha Studio" },
  { id: "x", platform: "x", handle: "@spradha", displayName: "Spradha" },
];

export type PublishedPost = {
  id: string;
  title: string;
  caption: string;
  platforms: PlatformId[];
  date: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  reach: number;
  followerChange: number;
  engagement: number;
  score: number;
  tone: string;
};

export const publishedPosts: PublishedPost[] = [
  {
    id: "p1",
    title: "Summer Reel",
    caption: "Golden hour edits that actually convert. Full breakdown in the reel.",
    platforms: ["instagram", "facebook"],
    date: "2026-08-12",
    views: 18420,
    likes: 2140,
    comments: 186,
    shares: 92,
    saves: 411,
    reach: 15230,
    followerChange: 128,
    engagement: 6.4,
    score: 87,
    tone: "Energetic",
  },
  {
    id: "p2",
    title: "Studio setup tour",
    caption: "Everything on my desk in 60 seconds.",
    platforms: ["youtube"],
    date: "2026-08-09",
    views: 41230,
    likes: 3890,
    comments: 402,
    shares: 210,
    saves: 780,
    reach: 36110,
    followerChange: 340,
    engagement: 8.1,
    score: 92,
    tone: "Informative",
  },
  {
    id: "p3",
    title: "3 hooks that never fail",
    caption: "Steal these hooks for your next short.",
    platforms: ["tiktok", "instagram"],
    date: "2026-08-05",
    views: 9120,
    likes: 1240,
    comments: 96,
    shares: 61,
    saves: 220,
    reach: 8010,
    followerChange: 54,
    engagement: 4.9,
    score: 74,
    tone: "Direct",
  },
  {
    id: "p4",
    title: "Weekly thread",
    caption: "What I learned shipping content daily for 30 days.",
    platforms: ["x"],
    date: "2026-07-30",
    views: 6320,
    likes: 540,
    comments: 48,
    shares: 33,
    saves: 90,
    reach: 5400,
    followerChange: 21,
    engagement: 3.6,
    score: 68,
    tone: "Reflective",
  },
];

export type ScheduledPost = {
  id: string;
  name: string;
  date: string; // yyyy-mm-dd
  time: string;
  platforms: PlatformId[];
};

export const scheduledPosts: ScheduledPost[] = [
  {
    id: "s1",
    name: "Summer Reel v2",
    date: "2026-08-18",
    time: "7:30 PM",
    platforms: ["instagram", "youtube"],
  },
  { id: "s2", name: "Behind the scenes", date: "2026-08-20", time: "11:00 AM", platforms: ["tiktok"] },
  { id: "s3", name: "Client case study", date: "2026-08-24", time: "6:00 PM", platforms: ["facebook", "x"] },
  { id: "s4", name: "Monthly recap", date: "2026-08-29", time: "9:15 AM", platforms: ["instagram"] },
];

export type InboxItem = {
  id: string;
  type: "comment" | "message" | "mention" | "follower" | "notification";
  platform: PlatformId;
  name: string;
  preview: string;
  body: string;
  time: string;
  unread: boolean;
};

export const inboxItems: InboxItem[] = [
  {
    id: "i1",
    type: "comment",
    platform: "instagram",
    name: "maya.creates",
    preview: "This edit is unreal — what LUT is that?",
    body: "This edit is unreal — what LUT is that? I've been trying to get this warm tone for weeks.",
    time: "12m",
    unread: true,
  },
  {
    id: "i2",
    type: "message",
    platform: "facebook",
    name: "Nolan Reid",
    preview: "Hey! Are you open for a brand collab in September?",
    body: "Hey! Are you open for a brand collab in September? We'd love to sponsor two reels.",
    time: "1h",
    unread: true,
  },
  {
    id: "i3",
    type: "mention",
    platform: "x",
    name: "@buildwithsam",
    preview: "Mentioned you in a post about content workflows",
    body: "Everyone should look at how @spradha runs their content calendar. Genuinely the cleanest setup.",
    time: "3h",
    unread: false,
  },
  {
    id: "i4",
    type: "follower",
    platform: "youtube",
    name: "Lina Park",
    preview: "Subscribed to your channel",
    body: "Lina Park subscribed to Spradha Studio.",
    time: "6h",
    unread: false,
  },
  {
    id: "i5",
    type: "notification",
    platform: "tiktok",
    name: "Grodo",
    preview: "Your post reached 10k views",
    body: "“3 hooks that never fail” passed 10,000 views — 42% above your average.",
    time: "1d",
    unread: false,
  },
];

export const analyticsSeries = [
  { day: "Mon", views: 3200, reach: 2600, likes: 380, engagement: 4.1, followers: 12 },
  { day: "Tue", views: 4100, reach: 3300, likes: 470, engagement: 4.8, followers: 21 },
  { day: "Wed", views: 3800, reach: 3100, likes: 420, engagement: 4.4, followers: 9 },
  { day: "Thu", views: 5200, reach: 4300, likes: 610, engagement: 5.6, followers: 34 },
  { day: "Fri", views: 6100, reach: 5000, likes: 720, engagement: 6.2, followers: 41 },
  { day: "Sat", views: 7400, reach: 6100, likes: 910, engagement: 7.1, followers: 58 },
  { day: "Sun", views: 6800, reach: 5600, likes: 840, engagement: 6.6, followers: 47 },
];

export const analyticsCards = [
  { label: "Total Views", value: "36,600", change: 18.4, period: "vs previous 7 days" },
  { label: "Total Likes", value: "4,350", change: 12.1, period: "vs previous 7 days" },
  { label: "Avg. Engagement", value: "5.5%", change: -2.3, period: "vs previous 7 days" },
  { label: "Content Score", value: "84", change: 4.0, period: "vs previous 7 days" },
  { label: "Total Followers", value: "9,812", change: 3.2, period: "vs previous 7 days" },
  { label: "Total Reach", value: "30,000", change: 9.7, period: "vs previous 7 days" },
];

export const platformSummary = [
  { platform: "instagram" as PlatformId, posts: 12, views: "18.4k", likes: "2.1k", followers: "4.3k" },
  { platform: "facebook" as PlatformId, posts: 7, views: "6.2k", likes: "740", followers: "1.9k" },
  { platform: "youtube" as PlatformId, posts: 4, views: "41.2k", likes: "3.9k", followers: "2.6k" },
  { platform: "tiktok" as PlatformId, posts: 9, views: "9.1k", likes: "1.2k", followers: "820" },
  { platform: "x" as PlatformId, posts: 15, views: "6.3k", likes: "540", followers: "190" },
];
