"use client";

import { motion } from "framer-motion";
import { SECTIONS } from "@/lib/sections";
import ThemeToggle from "@/components/ThemeToggle";

interface Props {
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function SideNav({ activeIndex, onSelect }: Props) {
  const progress = activeIndex / (SECTIONS.length - 1);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-0 right-1.5 z-50 flex h-dvh flex-col items-center gap-3 py-3 md:right-5 md:gap-5 md:py-5"
    >
      <ThemeToggle />

      <div className="relative flex w-full flex-1 flex-col items-center justify-between">
        {/* Track line: first icon center to last icon center */}
        <div
          aria-hidden
          className="absolute inset-y-[28px] left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-card-border md:inset-y-[36px]"
        >
          <motion.div
            className="h-full w-full origin-top rounded-full bg-linear-to-b from-primary to-secondary"
            animate={{ scaleY: progress }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>

        {SECTIONS.map((section, i) => {
          const Icon = section.icon;
          const active = i === activeIndex;

          return (
            <button
              key={section.id}
              onClick={() => onSelect(i)}
              aria-label={`Go to ${section.label}`}
              aria-current={active ? "true" : undefined}
              className={`group relative flex size-14 shrink-0 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 md:size-18 ${
                active
                  ? "border-transparent text-white"
                  : "border-card-border bg-background text-muted hover:scale-110 hover:text-foreground"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-primary-2 shadow-[0_0_28px_var(--primary)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              <Icon className="relative z-10 size-7 md:size-9" strokeWidth={active ? 2.2 : 1.8} />

              <span className="glass pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap text-foreground opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}