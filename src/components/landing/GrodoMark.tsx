/** The Grodo "G" mark — bold geometric G with the horizontal bar, purple gradient. */
export function GrodoMark({
  className = "h-8 w-8",
  from = "oklch(0.6 0.24 292)",
  to = "oklch(0.42 0.235 275)",
  id = "grodo-mark",
}: {
  className?: string;
  from?: string;
  to?: string;
  id?: string;
}) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        d="M20.6 3.2c4.6 0 8.7 1.8 11.4 4.8l-4.6 4.3a10.4 10.4 0 0 0-7-2.7c-5.9 0-10.2 4.4-10.2 10.4S14.6 30.4 20.7 30.4c4.7 0 8-2.4 9.2-6.3h-9.3v-5.9h16.1c.2 1 .3 2 .3 3 0 9.8-6.6 15.6-16.4 15.6C10.1 36.8 2.7 29.4 2.7 20S10.4 3.2 20.6 3.2"
      />
    </svg>
  );
}
