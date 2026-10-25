import {
  UserRound,
  BriefcaseBusiness,
  Cpu,
  Rocket,
  FileText,
  Bot,
  type LucideIcon,
} from "lucide-react";

import { profile } from "@/data/profile";

export interface SectionMeta {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export const SECTIONS: SectionMeta[] = [
  {
    id: "profile",
    label: "Profile",
    title: `Hello, I'm ${profile.name}`,
    subtitle: "A quick look at who I am.",
    icon: UserRound,
  },
  {
    id: "experience",
    label: "Experience",
    title: "Where I've worked",
    subtitle: "Professional roles and internships.",
    icon: BriefcaseBusiness,
  },
  {
    id: "skills",
    label: "Skills",
    title: "What I work with",
    subtitle: "Technologies, frameworks, and strengths.",
    icon: Cpu,
  },
  {
    id: "projects",
    label: "Projects",
    title: "Things I've built",
    subtitle: "Personal work, org projects, and achievements.",
    icon: Rocket,
  },
  {
    id: "resume",
    label: "Resume",
    title: "My resume",
    subtitle: "Download it or share the link.",
    icon: FileText,
  },
  {
    id: "chatbot",
    label: "Chatbot",
    title: "Ask me anything",
    subtitle: "A slightly sarcastic version of me.",
    icon: Bot,
  },
];