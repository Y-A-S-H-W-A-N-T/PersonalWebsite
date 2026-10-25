"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { SECTIONS } from "@/lib/sections";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSectionScroll, ANIMATION_MS } from "@/hooks/useSectionScroll";
import SectionWrapper from "@/components/SectionWrapper";
import SideNav from "@/components/SideNav";
import AnimatedBackground from "@/components/AnimatedBackground";

const IDS = SECTIONS.map((s) => s.id);
const elId = (id: string) => `section-${id}`;

interface Props {
  content: Record<string, ReactNode>; // keyed by section id
}

export default function PortfolioShell({ content }: Props) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const { index, goTo, syncIndex } = useSectionScroll({
    ids: IDS,
    enabled: !isMobile,
  });
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Stop the browser from restoring an old scroll position on reload
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Desktop: the outer container must NEVER scroll natively (only the transform moves it)
  useEffect(() => {
    if (isMobile) return;
    const root = scrollerRef.current;
    if (!root) return;

    const reset = () => {
      if (root.scrollTop !== 0) root.scrollTop = 0;
      if (root.scrollLeft !== 0) root.scrollLeft = 0;
    };
    reset();
    root.addEventListener("scroll", reset);
    return () => root.removeEventListener("scroll", reset);
  }, [isMobile]);

  // Mobile: jump to hash on load, then track the visible section
  useEffect(() => {
    if (!isMobile) return;
    const root = scrollerRef.current;
    if (!root) return;

    const hash = window.location.hash.slice(1);
    if (hash)
      document.getElementById(elId(hash))?.scrollIntoView({ behavior: "auto" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            syncIndex(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { root, threshold: 0.6 },
    );

    root
      .querySelectorAll("section[data-index]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isMobile, syncIndex]);

  const handleSelect = (i: number) => {
    if (isMobile) {
      document
        .getElementById(elId(IDS[i]))
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      goTo(i);
    }
  };

  return (
    <div
      data-section={SECTIONS[index].id}
      className="theme-root relative isolate h-dvh w-full overflow-hidden bg-background"
    >
      <AnimatedBackground activeIndex={index} />
      <SideNav activeIndex={index} onSelect={handleSelect} />

      <div
        ref={scrollerRef}
        className={`h-full overscroll-none ${
          isMobile ? "snap-y snap-mandatory overflow-y-auto" : "overflow-hidden"
        }`}
      >
        <main
          className="will-change-transform"
          style={
            isMobile
              ? undefined
              : {
                  transform: `translate3d(0, -${index * 100}dvh, 0)`,
                  transition: `transform ${ANIMATION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
                }
          }
        >
          {SECTIONS.map((section, i) => (
            <SectionWrapper
              key={section.id}
              id={section.id}
              index={i}
              label={section.label}
              title={section.title}
              subtitle={section.subtitle}
              active={i === index}
              inert={!isMobile && i !== index}
              isLast={i === SECTIONS.length - 1}
              onNext={() => handleSelect(i + 1)}
            >
              {content[section.id]}
            </SectionWrapper>
          ))}
        </main>
      </div>
    </div>
  );
}
