import { PLATFORMS } from "@/components/app/platforms";
import type { PublishedPost } from "@/components/app/mockData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function PostDetailSheet({
  post,
  onClose,
}: {
  post: PublishedPost | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!post} onOpenChange={(v) => (v ? null : onClose())}>
      <DialogContent className="grodo-dark max-h-[85vh] overflow-y-auto border-border bg-card text-foreground sm:max-w-[560px]">
        {post ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-[1.05rem] font-bold">{post.title}</DialogTitle>
              <DialogDescription className="text-[0.85rem] text-muted-foreground">
                Published {post.date}
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-2">
              {post.platforms.map((p) => {
                const { Icon, name } = PLATFORMS[p];
                return (
                  <span
                    key={p}
                    className="flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1 text-[0.75rem]"
                  >
                    <Icon className="h-3.5 w-3.5" /> {name}
                  </span>
                );
              })}
            </div>

            <p className="text-[0.85rem] leading-[1.6] text-muted-foreground">{post.caption}</p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["Views", post.views.toLocaleString()],
                ["Likes", post.likes.toLocaleString()],
                ["Comments", post.comments.toLocaleString()],
                ["Shares", post.shares.toLocaleString()],
                ["Saves", post.saves.toLocaleString()],
                ["Reach", post.reach.toLocaleString()],
                ["Followers", `+${post.followerChange}`],
                ["Engagement", `${post.engagement}%`],
                ["Content score", `${post.score}/100`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-border bg-white/[0.03] p-3">
                  <p className="text-[0.72rem] text-muted-foreground">{label}</p>
                  <p className="mt-1 text-[0.95rem] font-bold">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-white/[0.03] p-4">
              <p className="text-[0.85rem] font-semibold">AI insight</p>
              <p className="mt-1 text-[0.8rem] leading-[1.55] text-muted-foreground">
                Tone: {post.tone}. This post performed above your average — keep the hook in the
                first two seconds and reuse this format.
              </p>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
