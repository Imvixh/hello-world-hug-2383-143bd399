import { GrodoMark } from "./GrodoMark";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <GrodoMark className="h-8 w-8" />
      <span
        className={`text-[1.6rem] font-extrabold tracking-[-0.03em] ${
          dark ? "text-footer-foreground" : "text-foreground"
        }`}
      >
        Grodo
      </span>
    </span>
  );
}
