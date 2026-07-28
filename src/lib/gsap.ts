"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Motion tokens.
 *
 * Every entrance on the site pulls from these, so sections enter at the same
 * speed, travel the same distance, and fire at the same scroll position.
 * Components rely on the defaults set below rather than restating ease /
 * duration / start on each tween — change it here and the whole site follows.
 */
export const MOTION = {
  duration: { fast: 0.4, base: 0.7, slow: 0.9 },
  ease: { out: "power3.out", inOut: "power3.inOut" },
  /** How far an element travels into place. */
  distance: { sm: 12, md: 32 },
  stagger: { tight: 0.03, base: 0.08 },
  /** Fires as the element's top passes 85% down the viewport. */
  start: "top 85%",
  toggleActions: "play none none reverse",
} as const;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typeof window !== "undefined") {
  gsap.defaults({ ease: MOTION.ease.out, duration: MOTION.duration.base });
  ScrollTrigger.defaults({
    start: MOTION.start,
    toggleActions: MOTION.toggleActions,
  });

  // Everything animates `from` a start state, so collapsing the timeline still
  // lands every element in its natural final position — it just gets there
  // instantly. timeScale covers tweens that set their own duration.
  if (prefersReducedMotion()) {
    gsap.globalTimeline.timeScale(200);
  }

  // Mobile browsers fire `resize` every time the URL bar hides or shows.
  // Recalculating every trigger on that makes sections jump mid-scroll.
  ScrollTrigger.config({ ignoreMobileResize: true });

  const refresh = () => ScrollTrigger.refresh();

  // Web fonts and images settle after first paint and change element heights,
  // which leaves every cached start/end position stale.
  document.fonts?.ready.then(refresh);
  window.addEventListener("load", refresh);

  // Rotating a device changes the viewport without a normal resize sequence.
  window.addEventListener("orientationchange", () => {
    requestAnimationFrame(refresh);
  });
}

export { gsap, ScrollTrigger };
