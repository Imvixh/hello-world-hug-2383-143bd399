import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "fade";

const CLASS: Record<Direction, string> = {
  up: "rv-up",
  left: "rv-left",
  right: "rv-right",
  fade: "rv-fade",
};

/**
 * Reveals children once, when they first enter the viewport.
 * Subtle fade + slide, 520ms ease-out, no scale, no bounce.
 */
export function RevealDir({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("rv", shown && CLASS[direction], className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
