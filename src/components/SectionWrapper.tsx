"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import ScrollHint from "@/components/ScrollHint";

const container: Variants = {
  hide: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const item: Variants = {
  hide: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface Props {
  id: string;
  index: number;
  label: string;
  title: string;
  subtitle: string;
  active: boolean;
  inert?: boolean;
  children: ReactNode;
  isLast?: boolean;
  onNext?: () => void;
}

export default function SectionWrapper({
  id,
  index,
  label,
  title,
  subtitle,
  active,
  inert,
  isLast,
  onNext,
  children,
}: Props) {
  return (
    <section
      id={`section-${id}`}
      aria-label={label}
      data-index={index}
      inert={inert}
      className="relative h-dvh w-full shrink-0 snap-start"
    >
      <div
        data-section-scroll
        data-active={active}
        className="no-scrollbar h-full overflow-y-auto pt-12 pr-20 pb-10 pl-5 sm:pl-8 sm:pr-24 md:pt-16 md:pr-32 md:pl-16 lg:pr-36 lg:pl-24"
      >
        <motion.div
          variants={container}
          initial="hide"
          animate={active ? "show" : "hide"}
          className="mx-auto flex min-h-full max-w-6xl flex-col justify-center gap-8"
        >
          <motion.header variants={item}>
            <p className="mb-3 font-display text-sm tracking-[0.3em] text-primary uppercase">
              {String(index + 1).padStart(2, "0")} / {label}
            </p>
            <h2 className="font-display text-4xl font-bold text-gradient sm:text-5xl md:text-6xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-muted">{subtitle}</p>
          </motion.header>

          <motion.div variants={item}>{children}</motion.div>
        </motion.div>
      </div>
      {!isLast && onNext && <ScrollHint visible={active} onClick={onNext} />}
    </section>
  );
}
