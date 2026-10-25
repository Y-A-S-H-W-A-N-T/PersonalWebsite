"use client";

import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

/* ---------- helpers ---------- */

// Deterministic pseudo-random (0..1), rounded so values are stable
const rnd = (i: number, salt: number) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return Math.round((x - Math.floor(x)) * 1000) / 1000;
};

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

const GLOW_STYLE = (color: string, size: string) => ({
  width: size,
  height: size,
  background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
  opacity: "var(--blob-opacity)",
});

/** Two big soft glows so every scene keeps the section's color mood */
function Glows() {
  return (
    <>
      <div
        className="absolute -top-[10%] -left-[10%] rounded-full blur-[100px]"
        style={GLOW_STYLE("var(--blob-1)", "45vmax")}
      />
      <div
        className="absolute -right-[10%] -bottom-[15%] rounded-full blur-[100px]"
        style={GLOW_STYLE("var(--blob-2)", "50vmax")}
      />
    </>
  );
}

/* ---------- Scene 1: Profile, retro checks ---------- */
function ChecksScene() {
  const check = "color-mix(in srgb, var(--primary) 16%, transparent)";
  const line = "color-mix(in srgb, var(--primary) 10%, transparent)";
  return (
    <>
      <Glows />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `conic-gradient(${check} 25%, transparent 0 50%, ${check} 0 75%, transparent 0), linear-gradient(${line} 1px, transparent 1px)`,
          backgroundSize: "64px 64px, 32px 32px",
          animation: "checks-move 14s linear infinite",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 78%)",
        }}
      />
    </>
  );
}

/* ---------- Scene 2: Experience, rising bubbles ---------- */
function BubblesScene() {
  return (
    <>
      <Glows />
      {Array.from({ length: 20 }).map((_, i) => {
        const size = 18 + Math.round(rnd(i, 1) * 80);
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.round(rnd(i, 2) * 96)}%`,
              bottom: -130,
              width: size,
              height: size,
              border: "1px solid color-mix(in srgb, var(--primary) 45%, transparent)",
              background:
                "radial-gradient(circle at 30% 28%, color-mix(in srgb, var(--blob-3) 55%, transparent), color-mix(in srgb, var(--blob-1) 10%, transparent) 60%, transparent 72%)",
              animation: `bubble-rise ${10 + Math.round(rnd(i, 3) * 14)}s linear ${-Math.round(
                rnd(i, 4) * 20
              )}s infinite`,
            }}
          />
        );
      })}
    </>
  );
}

/* ---------- Scene 3: Skills, dot matrix + scan line ---------- */
function DotsScene() {
  return (
    <>
      <Glows />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 55%, transparent) 1.6px, transparent 1.8px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 80%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-[30vh]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--primary-2) 22%, transparent), transparent)",
          animation: "scan 7s linear infinite",
        }}
      />
    </>
  );
}

/* ---------- Scene 4: Projects, floating geometric shapes ---------- */
function ShapesScene() {
  const kinds = ["triangle", "square", "ring", "circle"] as const;
  const colors = ["var(--primary)", "var(--primary-2)", "var(--secondary)", "var(--blob-4)"];
  return (
    <>
      <Glows />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, color-mix(in srgb, var(--primary) 7%, transparent) 0 2px, transparent 2px 28px)",
        }}
      />
      {Array.from({ length: 16 }).map((_, i) => {
        const kind = kinds[i % kinds.length];
        const color = colors[i % colors.length];
        const size = 24 + Math.round(rnd(i, 5) * 56);
        const base: React.CSSProperties = {
          left: `${Math.round(rnd(i, 6) * 94)}%`,
          top: `${Math.round(rnd(i, 7) * 90)}%`,
          width: size,
          height: size,
          animation: `spin-float ${8 + Math.round(rnd(i, 8) * 8)}s ease-in-out ${-Math.round(
            rnd(i, 9) * 10
          )}s infinite`,
        };
        const shape: React.CSSProperties =
          kind === "triangle"
            ? { background: color, opacity: 0.35, clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }
            : kind === "square"
            ? { background: color, opacity: 0.28, borderRadius: 8 }
            : kind === "ring"
            ? { border: `3px solid ${color}`, opacity: 0.45, borderRadius: "9999px" }
            : { background: color, opacity: 0.3, borderRadius: "9999px" };
        return <span key={i} className="absolute" style={{ ...base, ...shape }} />;
      })}
    </>
  );
}

/* ---------- Scene 5: Resume, gold sparkles + ruled lines ---------- */
function SparklesScene() {
  return (
    <>
      <Glows />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 39px, color-mix(in srgb, var(--primary) 12%, transparent) 39px 40px)",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />
      {Array.from({ length: 36 }).map((_, i) => {
        const size = 3 + Math.round(rnd(i, 10) * 7);
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${Math.round(rnd(i, 11) * 98)}%`,
              top: `${Math.round(rnd(i, 12) * 96)}%`,
              width: size,
              height: size,
              background: i % 3 === 0 ? "var(--secondary)" : "var(--primary)",
              clipPath:
                "polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%)",
              transform: "scale(3)",
              animation: `twinkle ${2 + Math.round(rnd(i, 13) * 4)}s ease-in-out ${-Math.round(
                rnd(i, 14) * 6
              )}s infinite`,
            }}
          />
        );
      })}
    </>
  );
}

/* ---------- Scene 6: Chatbot, GenZ aurora ---------- */
const AURORA = [
  { color: "var(--blob-1)", size: "46vmax", top: "-10%", left: "-8%", dur: "18s", delay: "0s" },
  { color: "var(--blob-2)", size: "50vmax", top: "30%", left: "55%", dur: "22s", delay: "-6s" },
  { color: "var(--blob-3)", size: "40vmax", top: "60%", left: "5%", dur: "20s", delay: "-3s" },
  { color: "var(--blob-4)", size: "34vmax", top: "-15%", left: "60%", dur: "24s", delay: "-9s" },
];

function AuroraScene() {
  return (
    <>
      {AURORA.map((b, i) => (
        <div key={i} className="absolute" style={{ top: b.top, left: b.left }}>
          <div
            className="rounded-full blur-[90px]"
            style={{
              ...GLOW_STYLE(b.color, b.size),
              animation: `blob-float ${b.dur} ease-in-out ${b.delay} infinite`,
            }}
          />
        </div>
      ))}
      {[
        { top: "14%", left: "8%", size: 46, ring: true, delay: "0s" },
        { top: "72%", left: "14%", size: 18, ring: false, delay: "-2s" },
        { top: "22%", left: "62%", size: 14, ring: false, delay: "-4s" },
        { top: "80%", left: "55%", size: 38, ring: true, delay: "-1s" },
        { top: "48%", left: "30%", size: 12, ring: false, delay: "-3s" },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            border: s.ring ? "2px solid var(--primary)" : "none",
            background: s.ring ? "transparent" : "var(--primary-2)",
            opacity: s.ring ? 0.4 : 0.55,
            animation: `shape-float 9s ease-in-out ${s.delay} infinite`,
          }}
        />
      ))}
    </>
  );
}

/* ---------- Scene registry (same order as SECTIONS) ---------- */
const SCENES: (() => ReactNode)[] = [
  () => <ChecksScene />,
  () => <BubblesScene />,
  () => <DotsScene />,
  () => <ShapesScene />,
  () => <SparklesScene />,
  () => <AuroraScene />,
];

/* ---------- Main component ---------- */
export default function AnimatedBackground({ activeIndex }: { activeIndex: number }) {
  // Cursor spotlight (desktop, fine pointers only)
  const mx = useMotionValue(-500);
  const my = useMotionValue(-500);
  const sx = useSpring(mx, { stiffness: 90, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 90, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* The scene for the active section, crossfading on change */}
      <AnimatePresence>
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          {SCENES[activeIndex]?.()}
        </motion.div>
      </AnimatePresence>

      {/* Cursor spotlight */}
      <motion.div
        className="absolute top-0 left-0 hidden size-[420px] rounded-full opacity-30 blur-3xl md:block"
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, var(--primary-2), transparent 65%)",
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay dark:opacity-[0.12]"
        style={{ backgroundImage: NOISE }}
      />

      {/* Vignette so text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, var(--background) 115%)",
        }}
      />
    </div>
  );
}