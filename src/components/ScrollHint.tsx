"use client";

import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

interface Props {
  visible: boolean;
  onClick: () => void;
}

export default function ScrollHint({ visible, onClick }: Props) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center pr-20 md:bottom-5 md:pr-32">
      <motion.button
        onClick={onClick}
        aria-label="Scroll to next section"
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12 }}
        transition={{ duration: 0.6, delay: visible ? 1.1 : 0 }}
        className="glass pointer-events-auto flex size-10 items-center justify-center rounded-full text-primary shadow-lg transition-colors hover:text-foreground"
      >
        <ChevronsDown
          className="size-5"
          style={{ animation: "hint-bounce 1.6s ease-in-out infinite" }}
        />
      </motion.button>
    </div>
  );
}