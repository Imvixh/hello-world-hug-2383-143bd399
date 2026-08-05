export function QuoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 24V13.4C0 6.3 3.6 1.7 10.8 0l1.5 3.6C8 5.2 5.9 7.7 5.7 11h5.6v13zm18.7 0V13.4C18.7 6.3 22.3 1.7 29.5 0L31 3.6c-4.3 1.6-6.4 4.1-6.6 7.4H30v13z"
      />
    </svg>
  );
}
