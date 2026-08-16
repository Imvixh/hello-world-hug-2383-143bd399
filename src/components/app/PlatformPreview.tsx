import { Heart, MessageCircle, Play, Repeat2, Send, ThumbsUp } from "lucide-react";

import { PLATFORMS, type PlatformId } from "@/components/app/platforms";
import { previewUser } from "@/components/app/mockUser";
import type { MediaFile } from "@/components/app/createStore";

function Media({ media }: { media: MediaFile | null }) {
  if (!media) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-border text-[0.8rem] text-muted-foreground">
        No media added
      </div>
    );
  }
  return media.kind === "video" ? (
    <div className="relative overflow-hidden rounded-xl bg-black">
      <video src={media.url} className="max-h-[280px] w-full" muted />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Play className="h-8 w-8 text-white/80" />
      </span>
    </div>
  ) : (
    <img
      src={media.url}
      alt="Post media preview"
      className="max-h-[280px] w-full rounded-xl object-cover"
    />
  );
}

export function PlatformPreview({
  platform,
  fields,
  media,
}: {
  platform: PlatformId;
  fields: Record<string, string>;
  media: MediaFile | null;
}) {
  const { name } = PLATFORMS[platform];
  const avatar = (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[0.75rem] font-bold text-primary-foreground">
      {previewUser.firstName.charAt(0)}
    </span>
  );

  return (
    <div className="rounded-2xl border border-border bg-white/[0.03] p-4">
      <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-wide text-muted-foreground">
        {name} preview
      </p>

      {platform === "youtube" ? (
        <div className="space-y-3">
          <Media media={media} />
          <p className="text-[0.95rem] font-bold leading-snug">
            {fields["title"] || "Your video title appears here"}
          </p>
          <div className="flex items-center gap-2.5">
            {avatar}
            <span className="text-[0.8rem] text-muted-foreground">Spradha Studio · just now</span>
          </div>
          <p className="whitespace-pre-wrap text-[0.82rem] leading-[1.6] text-muted-foreground">
            {fields["description"] || "Your description appears here."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            {avatar}
            <span className="min-w-0">
              <span className="block truncate text-[0.85rem] font-semibold">
                {previewUser.handle}
              </span>
              <span className="block text-[0.72rem] text-muted-foreground">just now</span>
            </span>
          </div>
          {platform === "x" ? (
            <>
              <p className="whitespace-pre-wrap text-[0.87rem] leading-[1.6]">
                {fields["text"] || "Your post text appears here."}
              </p>
              <Media media={media} />
            </>
          ) : (
            <>
              <Media media={media} />
              <p className="whitespace-pre-wrap text-[0.85rem] leading-[1.6]">
                {fields["caption"] || "Your caption appears here."}
              </p>
            </>
          )}
          {fields["hashtags"] ? (
            <p className="text-[0.82rem] text-primary-light">{fields["hashtags"]}</p>
          ) : null}
          <div className="flex items-center gap-4 border-t border-border pt-3 text-muted-foreground">
            {platform === "facebook" ? (
              <ThumbsUp className="h-4 w-4" />
            ) : (
              <Heart className="h-4 w-4" />
            )}
            <MessageCircle className="h-4 w-4" />
            {platform === "x" ? <Repeat2 className="h-4 w-4" /> : <Send className="h-4 w-4" />}
          </div>
        </div>
      )}
    </div>
  );
}
