import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/landing/BrandIcons";

export type PlatformId = "instagram" | "facebook" | "tiktok" | "youtube" | "x";

export const PLATFORMS: Record<
  PlatformId,
  { id: PlatformId; name: string; Icon: (p: { className?: string }) => React.ReactElement }
> = {
  instagram: { id: "instagram", name: "Instagram", Icon: InstagramIcon },
  facebook: { id: "facebook", name: "Facebook", Icon: FacebookIcon },
  tiktok: { id: "tiktok", name: "TikTok", Icon: TikTokIcon },
  youtube: { id: "youtube", name: "YouTube", Icon: YouTubeIcon },
  x: { id: "x", name: "X", Icon: XIcon },
};

export const PLATFORM_LIST = Object.values(PLATFORMS);

export function PlatformIcon({
  id,
  className = "h-4 w-4",
}: {
  id: PlatformId;
  className?: string;
}) {
  const { Icon, name } = PLATFORMS[id];
  return (
    <span role="img" aria-label={name} className="inline-flex">
      <Icon className={className} />
    </span>
  );
}
