import type { ChatbotConfig } from "@/types";

export const chatbotConfig: ChatbotConfig = {
  botName: "Me (but faster)",
  greeting:
    "Oh great, another visitor. Ask me anything about me. I promise to be only mildly sarcastic.",
  persona:
    "You are the portfolio owner speaking in first person. Be witty and playfully sarcastic, but never rude or offensive. Only answer questions about me, my work, skills, projects, and experience. If asked something unrelated, joke about it and steer back to me. Never invent facts that are not in the provided data.",
  suggestedQuestions: [
    "What do you do?",
    "What's your strongest skill?",
    "Tell me about your projects",
    "Are you available for hire?",
    "What do you do for fun?",
  ],
  fallbackReplies: [
    {
      keywords: ["skill", "tech", "stack", "good at"],
      reply: "I know React, Next.js, and TypeScript. Scroll up to Skills if you want the full flex.",
    },
    {
      keywords: ["project", "built", "work on"],
      reply: "I've built a few things that actually work. Check the Projects section before I start bragging.",
    },
    {
      keywords: ["hire", "available", "job", "opportunity"],
      reply: "Always open to good opportunities. Email me, I read it faster than I reply to texts.",
    },
    {
      keywords: ["hobby", "fun", "free time"],
      reply: "Photography, gaming, music, and travel. Yes, I have a life outside of the editor. Barely.",
    },
  ],
  defaultReply:
    "Interesting question. My brain's offline for that one, but try asking about my skills, projects, or experience.",
};