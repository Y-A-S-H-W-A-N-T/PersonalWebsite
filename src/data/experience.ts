import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    type: "professional",
    company: "Company One Pvt Ltd",
    role: "Software Engineer",
    location: "Hyderabad, India",
    startDate: "2023-06",
    points: [
      "Built and shipped a customer dashboard used by 10k+ users.",
      "Improved page load time by 40% through code splitting and caching.",
      "Mentored 2 junior developers and led code reviews.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "exp-2",
    type: "professional",
    company: "Company Two Technologies",
    role: "Frontend Developer",
    location: "Bengaluru, India",
    startDate: "2022-07",
    endDate: "2023-05",
    points: [
      "Developed reusable UI components used across 5 products.",
      "Integrated REST and GraphQL APIs with robust error handling.",
    ],
    tech: ["React", "Redux", "Tailwind CSS", "Jest"],
  },
  {
    id: "int-1",
    type: "internship",
    company: "Startup Labs",
    role: "Web Development Intern",
    location: "Remote",
    startDate: "2022-01",
    endDate: "2022-06",
    points: [
      "Built landing pages and an admin panel from Figma designs.",
      "Wrote unit tests and fixed 30+ bugs.",
    ],
    tech: ["React", "JavaScript", "Firebase"],
  },
  {
    id: "int-2",
    type: "internship",
    company: "Tech Academy",
    role: "Frontend Intern",
    startDate: "2021-05",
    endDate: "2021-08",
    points: ["Created responsive UI screens for a learning platform."],
    tech: ["HTML", "CSS", "JavaScript"],
  },
];