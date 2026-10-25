"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const ANIMATION_MS = 850;
const INERTIA_GAP_MS = 150;   // quiet time required after a change before new gestures count
const SWIPE_THRESHOLD = 50;   // touch swipe distance in px
const WHEEL_TRIGGER = 10;     // accumulated delta needed to change section
const WHEEL_RESET_MS = 120;   // pause that counts as a new gesture

type Direction = 1 | -1;

/** Can this element scroll further in the given direction? */
function canScrollEl(el: HTMLElement, dir: Direction): boolean {
  if (el.scrollHeight <= el.clientHeight + 1) return false;
  if (dir === 1) return el.scrollTop + el.clientHeight < el.scrollHeight - 1;
  return el.scrollTop > 0;
}

/** Walk up from the event target looking for a scrollable ancestor that can still scroll. */
function canScrollInside(target: EventTarget | null, dir: Direction): boolean {
  let el = target instanceof HTMLElement ? target : null;
  while (el && el !== document.body) {
    const { overflowY } = getComputedStyle(el);
    if ((overflowY === "auto" || overflowY === "scroll") && canScrollEl(el, dir)) {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}

interface Options {
  ids: string[];
  enabled: boolean; // paging runs only when enabled (desktop/tablet)
}

export function useSectionScroll({ ids, enabled }: Options) {
  const count = ids.length;
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const lockUntil = useRef(0);

  const updateHash = useCallback(
    (i: number) => {
      window.history.replaceState(null, "", `#${ids[i]}`);
    },
    [ids]
  );

  /** Animated change (wheel, touch, keys, nav click). */
  const goTo = useCallback(
    (target: number) => {
      const next = Math.max(0, Math.min(count - 1, target));
      if (next === indexRef.current) return;
      indexRef.current = next;
      setIndex(next);
      lockUntil.current = performance.now() + ANIMATION_MS;
      updateHash(next);
    },
    [count, updateHash]
  );

  /** Silent sync (mobile IntersectionObserver). No lock. */
  const syncIndex = useCallback(
    (next: number) => {
      if (next === indexRef.current) return;
      indexRef.current = next;
      setIndex(next);
      updateHash(next);
    },
    [updateHash]
  );

  // Read the hash on mount and on hashchange
  useEffect(() => {
    const readHash = () => {
      const i = ids.indexOf(window.location.hash.slice(1));
      if (i >= 0 && i !== indexRef.current) {
        indexRef.current = i;
        setIndex(i);
      }
    };
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, [ids]);

  // Wheel / touch / keyboard paging
  useEffect(() => {
    if (!enabled) return;

    const getActiveScroller = () =>
      document.querySelector<HTMLElement>('[data-section-scroll][data-active="true"]');

    /* ---------- Wheel / trackpad ---------- */
    let wheelAcc = 0;
    let lastWheelTime = 0;

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // pinch zoom
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; // horizontal gesture
      if (e.deltaY === 0) return;

      // Normalise line-based wheels (Firefox) to pixels
      const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
      const dir: Direction = delta > 0 ? 1 : -1;
      const now = performance.now();

      // Let tall sections scroll internally first
      if (canScrollInside(e.target, dir)) {
        lockUntil.current = Math.max(lockUntil.current, now + 200);
        wheelAcc = 0;
        return;
      }

      e.preventDefault();

      // During lock: swallow the event and extend the lock while inertia keeps coming
      if (now < lockUntil.current) {
        lockUntil.current = Math.max(lockUntil.current, now + INERTIA_GAP_MS);
        wheelAcc = 0;
        lastWheelTime = now;
        return;
      }

      // New gesture or direction change: restart the accumulator
      if (now - lastWheelTime > WHEEL_RESET_MS || Math.sign(wheelAcc) !== dir) {
        wheelAcc = 0;
      }
      lastWheelTime = now;
      wheelAcc += delta;

      if (Math.abs(wheelAcc) >= WHEEL_TRIGGER) {
        wheelAcc = 0;
        goTo(indexRef.current + dir);
      }
    };

    /* ---------- Touch ---------- */
    let touchStartY: number | null = null;
    let edgeDown = true;
    let edgeUp = true;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      // Remember whether the inner scroller was already at an edge when the touch began
      edgeDown = !canScrollInside(e.target, 1);
      edgeUp = !canScrollInside(e.target, -1);
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY === null) return;
      const dy = touchStartY - e.changedTouches[0].clientY;
      touchStartY = null;

      if (Math.abs(dy) < SWIPE_THRESHOLD) return;
      if (performance.now() < lockUntil.current) return;

      const dir: Direction = dy > 0 ? 1 : -1;
      if (dir === 1 && !edgeDown) return;
      if (dir === -1 && !edgeUp) return;
      goTo(indexRef.current + dir);
    };

    /* ---------- Keyboard ---------- */
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (e.altKey || e.ctrlKey || e.metaKey) return;

      let dir: Direction | null = null;
      let jump: number | null = null;
      let step = 0; // px to scroll inside a tall section, -1 means "one page"

      switch (e.key) {
        case "ArrowDown":
          dir = 1; step = 120; break;
        case "ArrowUp":
          dir = -1; step = 120; break;
        case "PageDown":
          dir = 1; step = -1; break;
        case "PageUp":
          dir = -1; step = -1; break;
        case " ":
          if (target.closest("button, a")) return;
          dir = e.shiftKey ? -1 : 1; step = -1; break;
        case "Home":
          jump = 0; break;
        case "End":
          jump = count - 1; break;
        default:
          return;
      }

      e.preventDefault();
      if (performance.now() < lockUntil.current) return;

      if (jump !== null) {
        goTo(jump);
        return;
      }

      // Scroll inside a tall section first
      const scroller = getActiveScroller();
      if (dir && scroller && canScrollEl(scroller, dir)) {
        const amount = step === -1 ? scroller.clientHeight * 0.9 : step;
        scroller.scrollBy({ top: dir * amount, behavior: "smooth" });
        return;
      }

      if (dir) goTo(indexRef.current + dir);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [enabled, count, goTo]);

  return { index, goTo, syncIndex };
}