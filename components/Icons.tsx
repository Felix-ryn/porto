// Shared SVG icons (stroke-based, currentColor) — no emoji, no icon library.
import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps, children: React.ReactNode) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const IconMail = (p: IconProps) =>
  base(p, <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>);

export const IconPhone = (p: IconProps) =>
  base(p, <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />);

export const IconMapPin = (p: IconProps) =>
  base(p, <>
    <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </>);

export const IconCheckCircle = (p: IconProps) =>
  base(p, <>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.3 2.3 4.7-5.1" />
  </>);

export const IconAlertTriangle = (p: IconProps) =>
  base(p, <>
    <path d="M12 3 2 20h20L12 3Z" />
    <path d="M12 10v4" />
    <path d="M12 17h.01" />
  </>);

export const IconZap = (p: IconProps) =>
  base(p, <path d="M12 2 4 14h6l-1 8 9-13h-6l0-7Z" />);

export const IconBriefcase = (p: IconProps) =>
  base(p, <>
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </>);

export const IconTarget = (p: IconProps) =>
  base(p, <>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" />
  </>);

export const IconGraduationCap = (p: IconProps) =>
  base(p, <>
    <path d="m2 9 10-5 10 5-10 5-10-5Z" />
    <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </>);

export const IconTrophy = (p: IconProps) =>
  base(p, <>
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
    <path d="M8 5H5a2 2 0 0 0 0 4h1" />
    <path d="M16 5h3a2 2 0 0 1 0 4h-1" />
    <path d="M10 16h4v2h-4z" />
    <path d="M8 21h8" />
    <path d="M12 18v3" />
  </>);

export const IconUser = (p: IconProps) =>
  base(p, <>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" />
  </>);

export const IconExternalLink = (p: IconProps) =>
  base(p, <>
    <path d="M14 5h5v5" />
    <path d="M19 5 10 14" />
    <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
  </>);

export const IconLink = (p: IconProps) =>
  base(p, <>
    <path d="M9 15 15 9" />
    <path d="M11 6l1-1a4 4 0 1 1 6 6l-1 1" />
    <path d="M13 18l-1 1a4 4 0 1 1-6-6l1-1" />
  </>);

export const IconImage = (p: IconProps) =>
  base(p, <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="1.5" />
    <path d="m21 16-5-5-4 4-2-2-5 5" />
  </>);

export const IconArrowLeft = (p: IconProps) =>
  base(p, <path d="M19 12H5m0 0 6-6m-6 6 6 6" />);

export const IconArrowRight = (p: IconProps) =>
  base(p, <path d="M5 12h14m0 0-6-6m6 6-6 6" />);

export const IconArrowUp = (p: IconProps) =>
  base(p, <path d="M12 19V5m0 0-6 6m6-6 6 6" />);

export const IconChevronDown = (p: IconProps) =>
  base(p, <path d="m6 9 6 6 6-6" />);

export const IconCode = (p: IconProps) =>
  base(p, <path d="m9 6-5 6 5 6M15 6l5 6-5 6" />);

export const IconServer = (p: IconProps) =>
  base(p, <>
    <rect x="3" y="4" width="18" height="7" rx="1.5" />
    <rect x="3" y="13" width="18" height="7" rx="1.5" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </>);

export const IconWorkflow = (p: IconProps) =>
  base(p, <>
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="15" width="6" height="6" rx="1" />
    <path d="M9 6h4a2 2 0 0 1 2 2v7" />
  </>);

export const IconBrain = (p: IconProps) =>
  base(p, <>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5h3Z" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5h-3Z" />
    <path d="M9 4v13M15 4v13" />
  </>);

export const IconDatabase = (p: IconProps) =>
  base(p, <>
    <ellipse cx="12" cy="5" rx="7" ry="2.5" />
    <path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
    <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
  </>);

export const IconSearch = (p: IconProps) =>
  base(p, <>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </>);

export const IconShoppingCart = (p: IconProps) =>
  base(p, <>
    <circle cx="9" cy="20" r="1.3" />
    <circle cx="18" cy="20" r="1.3" />
    <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h8.2a2 2 0 0 0 2-1.6L21 8H6" />
  </>);

export const IconBarChart = (p: IconProps) =>
  base(p, <>
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  </>);

export const IconBuilding = (p: IconProps) =>
  base(p, <>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" />
  </>);

export const IconSettings = (p: IconProps) =>
  base(p, <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </>);

export const IconGithub = (p: IconProps) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.001 12.001 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const IconLinkedin = (p: IconProps) => (
  <svg {...p} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.746 0-9.637h3.554v1.364c.429-.659 1.191-1.599 2.896-1.599 2.117 0 3.704 1.385 3.704 4.362v5.51zM5.337 9.432c-1.144 0-1.915-.758-1.915-1.71 0-.953.768-1.71 1.959-1.71 1.19 0 1.916.757 1.932 1.71 0 .952-.743 1.71-1.976 1.71zm1.958 11.02H3.38V9.814h3.915v10.638zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.204 0 22.225 0z" />
  </svg>
);

// Icon per project id (1-6), used on home, project card, and project detail pages.
export const projectIcons: Record<number, (p: IconProps) => React.ReactElement> = {
  1: IconShoppingCart,
  2: IconBarChart,
  3: IconBrain,
  4: IconWorkflow,
  5: IconSearch,
  6: IconBuilding,
};

export function getProjectIcon(id: number) {
  return projectIcons[id] ?? IconSettings;
}
