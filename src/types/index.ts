export type SocialPlatform = "github" | "linkedin" | "twitter" | "email" | "website" | "instagram";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface Education {
  degree: string;
  institution: string;
  startDate: string; // "YYYY-MM"
  endDate?: string;  // omit if ongoing
  grade?: string;
}

export interface Language {
  name: string;
  proficiency: "Native" | "Fluent" | "Intermediate" | "Basic";
}

export interface Hobby {
  name: string;
  icon: string; // lucide-react icon name, e.g. "Camera"
}

export interface Profile {
  name: string;
  roles: string[]; // used for the rotating typewriter text
  tagline: string;
  photo: string;   // path in /public
  about: string;
  description: string;
  email: string;
  phone?: string;
  location: string;
  socials: SocialLink[];
  domains: string[];     // technical domains
  industries: string[];  // industries you've worked in
  education: Education[];
  languages: Language[];
  hobbies: Hobby[];
}

export type ExperienceType = "professional" | "internship";

export interface Experience {
  id: string;
  type: ExperienceType;
  company: string;
  role: string;
  location?: string;
  startDate: string; // "YYYY-MM"
  endDate?: string;  // omit if current
  points: string[];
  tech: string[];
}

export type SkillCategory = "technical" | "framework" | "general";

export interface Skill {
  name: string;
  category: SkillCategory;
  startDate: string; // "YYYY-MM", experience is computed from this
  level: number;     // 1-100, used for the progress ring/bar
  icon?: string;
}

export type ProjectType = "personal" | "organisation" | "achievement" | "publication";

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  description: string;
  tech: string[];
  startDate: string; // "YYYY-MM"
  endDate?: string;  // omit if ongoing
  liveUrl?: string;
  githubUrl?: string;
  link?: string;     // certificate or paper link for achievements/publications
  image?: string;
  featured?: boolean;
}

export interface ResumeInfo {
  fileUrl: string;      // path in /public
  fileName: string;
  uid: string;
  shareUrl: string;
  lastUpdated: string;  // "YYYY-MM-DD"
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ChatbotConfig {
  botName: string;
  greeting: string;
  persona: string;              // system prompt personality text
  suggestedQuestions: string[];
  fallbackReplies: { keywords: string[]; reply: string }[];
  defaultReply: string;
}