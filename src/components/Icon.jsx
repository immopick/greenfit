const PATHS = {
  strength: (
    <>
      <path d="M6.5 6.5v11M17.5 6.5v11M4 9v6M20 9v6M6.5 12h11" />
    </>
  ),
  studio: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  wellness: (
    <path d="M12 3c3.5 4 6 6.4 6 10a6 6 0 0 1-12 0c0-1.6.6-3 1.5-4.4C8.7 10 10 11.2 12 11.2 12 8 11 5.6 12 3Z" />
  ),
  coaching: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.5a3 3 0 0 1 0 6M17.5 19a5.5 5.5 0 0 0-3-4.9" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h3.5l1.6 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.6V20a1.5 1.5 0 0 1-1.6 1.5C9.8 21 3 14.2 3 5.6A1.5 1.5 0 0 1 4.5 4Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  bike: (
    <>
      <circle cx="6" cy="16" r="3.3" />
      <circle cx="18" cy="16" r="3.3" />
      <path d="m6 16 3.5-6.5h5l3 6.5M9 9.5h4.5" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="5" r="1.9" />
      <path d="M12 7v6m0 0-3 5m3-5 3 5M7.5 10l4.5 1 4.5-1" />
    </>
  ),
  pulse: <path d="M3 12h3.5l2-5.5L12 17l2.2-6 1.3 1H21" />,
  users: (
    <>
      <circle cx="10" cy="9" r="3" />
      <path d="M4 19a6 6 0 0 1 12 0" />
      <path d="M17 7a3 3 0 0 1 0 6M20 19a6 6 0 0 0-3.2-5.3" />
    </>
  ),
  spark: (
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6.3 6.3l3 3M14.7 14.7l3 3M17.7 6.3l-3 3M9.3 14.7l-3 3" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
}

export default function Icon({ name, size = 22, stroke = 1.6, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  )
}
