type IconProps = { className?: string };

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.004 3C8.82 3 3 8.82 3 16c0 2.296.602 4.534 1.745 6.508L3 29l6.66-1.738A12.96 12.96 0 0 0 16.004 29C23.184 29 29 23.18 29 16S23.184 3 16.004 3Zm0 23.6a10.61 10.61 0 0 1-5.4-1.473l-.388-.23-3.952 1.031 1.054-3.853-.252-.398A10.6 10.6 0 1 1 16.004 26.6Zm5.81-7.937c-.318-.16-1.886-.93-2.178-1.036-.293-.106-.506-.16-.72.16-.211.318-.823 1.036-1.01 1.249-.187.213-.372.24-.69.08-.319-.16-1.345-.495-2.563-1.578-.948-.844-1.587-1.884-1.773-2.203-.187-.318-.02-.49.14-.65.144-.143.319-.372.479-.559.16-.187.213-.318.319-.531.106-.213.053-.4-.027-.559-.08-.16-.72-1.737-.987-2.378-.26-.624-.524-.539-.72-.55l-.612-.011a1.18 1.18 0 0 0-.852.4c-.293.318-1.12 1.094-1.12 2.67 0 1.577 1.146 3.1 1.306 3.314.16.213 2.255 3.443 5.466 4.829.764.33 1.36.527 1.825.673.766.244 1.464.21 2.015.128.615-.092 1.886-.77 2.152-1.516.266-.745.266-1.384.187-1.515-.08-.133-.292-.213-.61-.373Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6 0h3.83v1.5h.05a4.2 4.2 0 0 1 3.78-2.08c4.05 0 4.8 2.67 4.8 6.13v5.45h-4v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.91H9v-11Z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21.5v-8h2.7l.4-3.13H13.5V8.5c0-.9.25-1.51 1.55-1.51h1.66V4.18C16.42 4.13 15.43 4 14.28 4 11.86 4 10.2 5.49 10.2 8.22v2.15H7.5v3.13h2.7v8h3.3Z" />
    </svg>
  );
}
