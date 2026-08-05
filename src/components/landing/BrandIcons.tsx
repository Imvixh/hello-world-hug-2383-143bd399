/** Brand marks used across the Grodo landing page, drawn inline as SVG. */
type P = { className?: string };

export const InstagramIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <defs>
      <radialGradient id="ig-g" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#FDD25C" />
        <stop offset="25%" stopColor="#FB7B3C" />
        <stop offset="50%" stopColor="#E5375F" />
        <stop offset="75%" stopColor="#C32AA3" />
        <stop offset="100%" stopColor="#7638FA" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig-g)" />
    <rect
      x="6"
      y="6"
      width="12"
      height="12"
      rx="4"
      fill="none"
      stroke="#fff"
      strokeWidth="1.7"
    />
    <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.7" />
    <circle cx="17" cy="7" r="1.1" fill="#fff" />
  </svg>
);

export const FacebookIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#1877F2" />
    <path
      fill="#fff"
      d="M15.4 12.9l.4-2.9h-2.8V8.1c0-.8.4-1.6 1.7-1.6h1.3V4a15 15 0 0 0-2.2-.2c-2.3 0-3.8 1.4-3.8 3.9V10H7.4v2.9H10v7h3.1v-7z"
    />
  </svg>
);

export const TikTokIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#000"
      d="M16.6 3h-2.7v11.6a2.4 2.4 0 1 1-1.9-2.3V9.5a5.3 5.3 0 1 0 4.6 5.2V9.2c.9.7 2 1.1 3.2 1.2V7.6a3.9 3.9 0 0 1-3.2-4.6z"
    />
  </svg>
);

export const LinkedInIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
    <path
      fill="#fff"
      d="M7.7 9.5H5.3V19h2.4zM6.5 8.3a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8M19 19h-2.4v-4.8c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1l-.1.8V19H11V9.5h2.4v1.3a2.4 2.4 0 0 1 2.2-1.2c1.6 0 3.4 1 3.4 3.9z"
    />
  </svg>
);

export const YouTubeIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="#FF0000" />
    <path fill="#fff" d="M10 8.6l6 3.4-6 3.4z" />
  </svg>
);

export const XIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#000"
      d="M17.3 3h3.3l-7.2 8.2L21.9 21h-6.6l-4.3-5.6L6 21H2.7l7.7-8.8L2.4 3H9l3.9 5.1zm-1.2 16h1.8L8 4.9H6z"
    />
  </svg>
);

export const PinterestIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#E60023" />
    <path
      fill="#fff"
      d="M12.3 5.4c-3.8 0-5.7 2.6-5.7 4.8 0 1.3.5 2.5 1.6 2.9.2.1.3 0 .4-.2l.1-.6c.1-.2 0-.3-.1-.4a2.4 2.4 0 0 1-.6-1.7c0-2.2 1.7-4.2 4.4-4.2 2.4 0 3.7 1.4 3.7 3.3 0 2.5-1.1 4.6-2.8 4.6-.9 0-1.6-.8-1.4-1.7l.7-2.7c.2-.7-.2-1.3-.9-1.3-.8 0-1.4.8-1.4 1.9l.3 1.2-1.1 4.4c-.2 1-.1 2.2 0 2.9l.1.1.2-.1c.3-.4 1-1.3 1.3-2.4l.5-1.9c.3.5 1.1 1 1.9 1 2.5 0 4.2-2.3 4.2-5.3 0-2.3-2-4.6-4.9-4.6"
    />
  </svg>
);

export const DriveIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M8.6 3.5h6.8L22 15.2h-6.8z" />
    <path fill="#0F9D58" d="M8.6 3.5L2 15.2h6.8L15.4 3.5z" />
    <path fill="#FFCD40" d="M2 15.2h20l-3.4 5.3H5.4z" />

  </svg>
);

export const DropboxIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#0061FF" d="M7 3l5 3.2L7 9.4 2 6.2z" />
    <path fill="#0061FF" d="M17 3l5 3.2-5 3.2-5-3.2z" />
    <path fill="#0061FF" d="M2 12.6l5-3.2 5 3.2-5 3.2z" />
    <path fill="#0061FF" d="M17 9.4l5 3.2-5 3.2-5-3.2z" />
    <path fill="#0061FF" d="M7 16.9l5-3.2 5 3.2-5 3.2z" />
  </svg>
);

export const MetaIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#0081FB"
      d="M4.3 15c0-3.6 1.8-7.4 4.3-7.4 1.4 0 2.5 1.3 3.7 3.4l-1.3 2.2C10.2 11.5 9.4 10 8.6 10c-1 0-2 1.9-2 4.7 0 1.3.4 2.2 1.2 2.2.9 0 1.8-1.1 3.3-3.6l1.1-1.8c1.6-2.6 2.9-4 4.6-4 3 0 4.9 3.6 4.9 7.7 0 2.8-1.3 4.6-3.5 4.6-2 0-3.2-1.2-4.9-4l-1.3-2.3-1 1.7C9.3 18.1 7.9 19.8 5.9 19.8c-2.1 0-3.6-1.8-3.6-4.8zm12.2-2.5l-.8 1.4c1.3 2.2 2 3.3 3 3.3.8 0 1.3-.7 1.3-2 0-2.9-1.1-5.5-2.5-5.5-.8 0-1.5.7-2.4 2.2z"
    />
  </svg>
);

export const ThreadsIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#000"
      d="M16.5 11.3a6 6 0 0 0-.5-.2c-.3-2.5-1.7-3.9-4-3.9-1.4 0-2.6.6-3.3 1.7l1.3.9c.5-.8 1.3-1 2-1 1.3 0 2 .7 2.2 2.1h-.5c-2.7 0-4.4 1.2-4.4 3 0 1.7 1.4 2.8 3.2 2.8 1.9 0 3.1-1.1 3.5-2.9.6.5.9 1.2.9 2 0 1.5-1.4 3.4-4.7 3.4-3.2 0-5.4-2.3-5.4-6.2S8.9 6.8 12.1 6.8c2.5 0 4.2 1.1 5 3l1.5-.5c-1-2.4-3.3-4-6.5-4-4.3 0-7.2 3.1-7.2 7.7s2.9 7.8 7.2 7.8c3.9 0 6.4-2.4 6.4-5 0-1.6-.7-2.8-2-3.5m-3.8 3.9c-.8 0-1.6-.4-1.6-1.2 0-.9.9-1.5 2.6-1.5h.7c-.2 1.9-1.1 2.7-1.7 2.7"
    />
  </svg>
);
