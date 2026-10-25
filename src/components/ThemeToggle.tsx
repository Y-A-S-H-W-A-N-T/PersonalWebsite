"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      className="group relative flex size-14 shrink-0 items-center justify-center rounded-full border border-card-border bg-background text-foreground shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 md:size-18"
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex"
          >
            {isDark ? (
              <Sun className="size-7 text-amber-400 md:size-9" />
            ) : (
              <Moon className="size-7 text-primary md:size-9" />
            )}
          </motion.span>
        </AnimatePresence>
      )}

      {/* Hover label (desktop only) */}
      <span className="glass pointer-events-none absolute right-full mr-3 hidden translate-x-2 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap text-foreground opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}