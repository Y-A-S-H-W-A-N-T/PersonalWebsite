import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Yashwant",
  roles: ["Full Stack Developer", "Mobile Developer", "Problem Solver"],
  tagline: "I build fast, clean, and delightful web experiences.",
  photo: "/images/profile.jpg",
  about:
    "I'm a developer who loves turning ideas into polished products. Replace this with a short, personal paragraph about who you are and what drives you.",
  description:
    "A longer description of your work, your approach, and what you're looking for. Replace this with your own text.",
  email: "raoyashwant132@gmail.com",
  phone: "+91 8179230511",
  location: "Hyderabad, India",
  socials: [
    { platform: "github", label: "GitHub", url: "https://github.com/yourusername" },
    { platform: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    { platform: "twitter", label: "Twitter", url: "https://twitter.com/yourusername" },
    { platform: "email", label: "Email", url: "mailto:raoyashwant132@gmail.com" },
  ],
  domains: ["Web Development", "Frontend Engineering", "API Design", "Cloud"],
  industries: ["FinTech", "E-commerce", "Healthcare", "EdTech"],
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Your University",
      startDate: "2018-08",
      endDate: "2022-05",
      grade: "8.5 CGPA",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Your College",
      startDate: "2016-06",
      endDate: "2018-04",
      grade: "95%",
    },
  ],
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" },
    { name: "Telugu", proficiency: "Native" },
  ],
  hobbies: [
    { name: "Photography", icon: "Camera" },
    { name: "Gaming", icon: "Gamepad2" },
    { name: "Music", icon: "Music" },
    { name: "Travel", icon: "Plane" },
  ],
};