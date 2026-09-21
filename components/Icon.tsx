import type { ReactNode } from "react";

type IconProps = { size?: number; color?: string; className?: string };

function Svg({
  size = 24,
  children,
  viewBox = "0 0 24 24",
}: {
  size?: number;
  children: ReactNode;
  viewBox?: string;
}) {
  return (
    <svg width={size} height={size} viewBox={viewBox} fill="none" aria-hidden="true">
      {children}
    </svg>
  );
}

export function IconHome({ size = 26, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9.5 21v-6h5v6" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconHeart({ size = 26, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 21s-7.5-4.6-7.5-10A4.5 4.5 0 0112 8.5 4.5 4.5 0 0119.5 11c0 5.4-7.5 10-7.5 10z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconPath({ size = 26, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M4 12h12M12 6l6 6-6 6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4v16" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function IconShield({ size = 26, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconWallet({ size = 26, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M4 7h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V7z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 7l3-3h10l3 3M9 13h6" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconSpanner({ size = 26, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M14.5 5.5a4 4 0 00-5.4 5.2L4 15.8 6.2 18l5.1-5.1a4 4 0 005.2-5.4l-2.3 2.3-1.8-1.8 2.1-2z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconPeople({ size = 26, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <circle cx="9" cy="8" r="3.2" stroke={color} strokeWidth="1.6" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 7.5a2.6 2.6 0 010 5M18 19c0-2.2-1-3.9-2.6-4.7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function IconDoc({ size = 26, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="4" y="3.5" width="16" height="17" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M8 8.5h8M8 12h8M8 15.5h5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function IconPhone({ size = 24, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M5 4.5h3l1.5 4-2 1.5a12 12 0 006.5 6.5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.7 1.5C9.9 19.6 4.4 14.1 3.5 6.2A1.5 1.5 0 015 4.5z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconMail({ size = 24, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} strokeWidth="1.6" />
      <path d="M3.5 6.5l8.5 6 8.5-6" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconPin({ size = 24, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" stroke={color} strokeWidth="1.6" />
    </Svg>
  );
}

export function IconImage({ size = 40, color = "#6ba7af" }: IconProps) {
  return (
    <Svg size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke={color} strokeWidth="1.5" />
      <circle cx="8.5" cy="10" r="1.8" stroke={color} strokeWidth="1.5" />
      <path d="M4 17l5-5 4.5 4.5L17 13l3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconCheck({ size = 20, color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={size}>
      <path d="M20 6L9 17l-5-5" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconArrow({ size = 18, color = "#23b296" }: IconProps) {
  return (
    <svg width={size} height={(size * 14) / 18} viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path d="M1 7h15M11 2l5 5-5 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevron({ color = "#2996b7" }: IconProps) {
  return (
    <svg className="nav__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1l4 4 4-4" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMenu({ color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={22}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}

export function IconClose({ color = "#0b4b55" }: IconProps) {
  return (
    <Svg size={20}>
      <path d="M6 6l12 12M18 6L6 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}

export function IconFacebook() {
  return (
    <Svg size={18}>
      <path d="M14 8.5h2.5V5.5H14c-2 0-3.5 1.5-3.5 3.5v2H8v3h2.5V21h3v-7H16l.5-3h-3V9.5c0-.6.4-1 1-1z" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
    </Svg>
  );
}

export function IconLinkedIn() {
  return (
    <Svg size={18}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M8 10.5V17M8 7.6v.1M12 17v-3.6c0-1.1.9-1.9 2-1.9s2 .8 2 1.9V17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}

export function IconInstagram() {
  return (
    <Svg size={18}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.6" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1" fill="#ffffff" />
    </Svg>
  );
}
