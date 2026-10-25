import {
  Mail,
  Globe,
  Camera,
  Gamepad2,
  Music,
  Plane,
  Book,
  BookOpen,
  Dumbbell,
  Bike,
  Coffee,
  Film,
  Palette,
  Code2,
  Headphones,
  Mountain,
  Utensils,
  Heart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { SocialPlatform } from "@/types";

/* ---------- Hobby icons: add more here if you need them ---------- */
const HOBBY_ICONS: Record<string, LucideIcon> = {
  Camera, Gamepad2, Music, Plane, Book, BookOpen, Dumbbell, Bike,
  Coffee, Film, Palette, Code2, Headphones, Mountain, Utensils, Heart,
};

export function getHobbyIcon(name: string): LucideIcon {
  return HOBBY_ICONS[name] ?? Sparkles;
}

/* ---------- Social icons ---------- */
interface IconProps {
  className?: string;
}

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function GithubIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className} aria-hidden>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className} aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className} aria-hidden>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className} aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function SocialIcon({
  platform,
  className,
}: {
  platform: SocialPlatform;
  className?: string;
}) {
  switch (platform) {
    case "github":
      return <GithubIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "twitter":
      return <TwitterIcon className={className} />;
    case "instagram":
      return <InstagramIcon className={className} />;
    case "email":
      return <Mail className={className} aria-hidden />;
    default:
      return <Globe className={className} aria-hidden />;
  }
}