import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PLATFORM_LIST } from "@/components/app/platforms";

export function ConnectChannelDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="grodo-dark border-border bg-card text-foreground sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle className="text-[1.05rem] font-bold">Connect a channel</DialogTitle>
          <DialogDescription className="text-[0.85rem] text-muted-foreground">
            Choose a platform to link. Account authorisation happens in a separate step.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {PLATFORM_LIST.map(({ id, name, Icon }) => (
            <button
              key={id}
              type="button"
              className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-left text-[0.87rem] font-medium transition-colors hover:border-white/25"
            >
              <Icon className="h-5 w-5 shrink-0" />
              {name}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
