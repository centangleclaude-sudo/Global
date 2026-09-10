"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** gsap.quickTo types its setter for numbers; CSS variables take unit strings. */
type VarSetter = (value: string | number) => void;
const quickVar = (target: Element, prop: string, vars: gsap.TweenVars): VarSetter =>
  gsap.quickTo(target, prop, vars) as unknown as VarSetter;

/**
 * The page's motion, in one place.
 *
 * Rules this follows:
 *  - Everything is enhancement. The markup is complete and readable without it,
 *    and `prefers-reduced-motion` reveals all of it instantly with no movement.
 *  - Short and sharp: 0.5–0.9s, expo/power4 out, small stagger. No drifting.
 *  - Targets are data attributes, so the sections stay server components.
 */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    /* The inline script armed a timer that un-hides everything if this never
       runs. We are running, so stand it down. */
    const w = window as Window & { __revealFailsafe?: number };
    if (w.__revealFailsafe) window.clearTimeout(w.__revealFailsafe);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* Dropping the class removes every hiding rule at once. */
    const revealAll = () => root.classList.remove("js");

    if (reduce.matches) {
      revealAll();
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      /* ---------- Hero: one orchestrated entrance, then it is done. ------ */
      const heroLines = gsap.utils.toArray<HTMLElement>("#hero [data-line]");
      const intro = gsap.timeline({ defaults: { ease: "expo.out" } });

      /* fromTo, never from: the stylesheet has already set opacity to 0, so a
         .from() tween would animate 0 -> 0 and the element would never appear.
         Selectors that match nothing on a given page are skipped, so the
         homepage and the landing pages can share one timeline. */
      const beat = (sel: string, from: gsap.TweenVars, to: gsap.TweenVars, at?: string) => {
        if (!document.querySelector(sel)) return;
        intro.fromTo(sel, from, to, at);
      };

      beat("#hero [data-hero='tag']", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 });
      if (heroLines.length) intro.from(heroLines, { yPercent: 108, duration: 0.95, stagger: 0.07 }, "-=0.45");
      beat("#hero [data-hero='price']", { y: 18, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.8 }, "-=0.6");
      beat("#hero [data-hero='sub']", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6");
      beat("#hero [data-hero='cta']", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.06 }, "-=0.62");
      beat(
        "#hero [data-hero='field']",
        { y: 26, opacity: 0, scale: 0.985 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1 },
        "-=0.95",
      );

      /* ---------- Reveal-on-scroll -------------------------------------
         A class toggle, not a tween. GSAP's ScrollTrigger.refresh() — which
         fires whenever images finish loading and change the page height — can
         revert tween state and silently re-hide content that already played.
         A class it does not manage cannot be reverted. */
      const revealOnce = (el: HTMLElement, targets: HTMLElement[], start: string, stagger: number) => {
        if (!targets.length) return;
        ScrollTrigger.create({
          trigger: el,
          start,
          once: true,
          onEnter: () => {
            targets.forEach((t, i) => {
              t.style.transitionDelay = `${(i * stagger).toFixed(3)}s`;
              t.classList.add("in");
            });
          },
        });
      };

      /* Section headings wipe up on approach (the container carries .in). */
      gsap.utils.toArray<HTMLElement>("[data-lines]").forEach((el) => {
        const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-line]"));
        if (!lines.length) return;
        lines.forEach((l, i) => (l.style.transitionDelay = `${(i * 0.06).toFixed(3)}s`));
        ScrollTrigger.create({ trigger: el, start: "top 86%", once: true, onEnter: () => el.classList.add("in") });
      });

      /* Grouped content rises together, with a tight stagger. */
      gsap.utils.toArray<HTMLElement>("[data-rv-group]").forEach((group) => {
        revealOnce(group, Array.from(group.querySelectorAll<HTMLElement>("[data-rv]")), "top 84%", 0.055);
      });

      /* Any stray [data-rv] outside a group reveals on its own. */
      gsap.utils.toArray<HTMLElement>("[data-rv]").forEach((el) => {
        if (el.closest("[data-rv-group]")) return;
        revealOnce(el, [el], "top 88%", 0);
      });

      /* ---------- Magnetic controls. ------------------------------------- */
      gsap.utils.toArray<HTMLElement>(".magnetic").forEach((el) => {
        const qx = quickVar(el, "--mx", { duration: 0.45, ease: "power3" });
        const qy = quickVar(el, "--my", { duration: 0.45, ease: "power3" });
        const reset = () => {
          qx(0);
          qy(0);
        };
        el.addEventListener("pointermove", (e) => {
          const r = el.getBoundingClientRect();
          qx((e.clientX - (r.left + r.width / 2)) * 0.28);
          qy((e.clientY - (r.top + r.height / 2)) * 0.42);
        });
        el.addEventListener("pointerleave", reset);
        el.addEventListener("blur", reset);
      });

      /* ---------- Hero light field tracks the pointer. ------------------- */
      const field = document.getElementById("field");
      const ring = field?.querySelector<HTMLElement>(".field-ring");
      if (field && ring) {
        const px = quickVar(field, "--px", { duration: 0.6, ease: "power3" });
        const py = quickVar(field, "--py", { duration: 0.6, ease: "power3" });
        const rx = quickVar(ring, "--rx", { duration: 0.8, ease: "power3" });
        const ry = quickVar(ring, "--ry", { duration: 0.8, ease: "power3" });
        const centre = () => {
          px("50%");
          py("50%");
          rx(field.clientWidth / 2 + "px");
          ry(field.clientHeight / 2 + "px");
        };
        centre();
        field.addEventListener("pointermove", (e) => {
          const r = field.getBoundingClientRect();
          const x = e.clientX - r.left;
          const y = e.clientY - r.top;
          px((x / r.width) * 100 + "%");
          py((y / r.height) * 100 + "%");
          rx(x + "px");
          ry(y + "px");
        });
        field.addEventListener("pointerleave", centre);
      }

      /* ---------- Aurora drifts with the pointer, parallaxes on scroll. -- */
      gsap.utils.toArray<HTMLElement>("[data-aurora]").forEach((au) => {
        const blobs = gsap.utils.toArray<HTMLElement>(au.children);
        const setters = blobs.map((b, i) => ({
          x: quickVar(b, "--ax", { duration: 1.4, ease: "power2" }),
          y: quickVar(b, "--ay", { duration: 1.4, ease: "power2" }),
          k: (i + 1) * 14,
        }));
        const host = au.parentElement;
        if (host) {
          host.addEventListener("pointermove", (e) => {
            const r = host.getBoundingClientRect();
            const nx = (e.clientX - r.left) / r.width - 0.5;
            const ny = (e.clientY - r.top) / r.height - 0.5;
            setters.forEach((s) => {
              s.x(nx * s.k + "px");
              s.y(ny * s.k + "px");
            });
          });
          gsap.to(blobs, {
            yPercent: -12,
            ease: "none",
            scrollTrigger: { trigger: host, start: "top bottom", end: "bottom top", scrub: 0.6 },
          });
        }
      });

      /* ---------- Marquee: driven by GSAP so scrolling can push it. ------
         Speed rises with scroll velocity and settles back — the detail that
         makes the strip feel connected to the page rather than looping past. */
      const track = document.querySelector<HTMLElement>("[data-marquee]");
      if (track) {
        const half = track.scrollWidth / 2;
        const loop = gsap.to(track, {
          x: -half,
          duration: 26,
          ease: "none",
          repeat: -1,
          modifiers: { x: (v) => gsap.utils.wrap(-half, 0, parseFloat(v)) + "px" },
        });
        const marquee = track.parentElement;
        marquee?.addEventListener("pointerenter", () => gsap.to(loop, { timeScale: 0.25, duration: 0.4 }));
        marquee?.addEventListener("pointerleave", () => gsap.to(loop, { timeScale: 1, duration: 0.5 }));
        ScrollTrigger.create({
          onUpdate: (self) => {
            const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 1400, 2.4);
            gsap.to(loop, { timeScale: boost, duration: 0.25, overwrite: true });
            gsap.to(loop, { timeScale: 1, duration: 0.9, delay: 0.25, overwrite: false });
          },
        });
      }

      /* ---------- Work images drift a little inside their frames. -------- */
      gsap.utils.toArray<HTMLElement>("[data-parallax-img]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 0.5 },
          },
        );
      });

      /* ---------- Footer wordmark rises as the footer arrives. ----------- */
      const mark = document.querySelector<HTMLElement>("[data-ftr-mark]");
      if (mark) {
        gsap.fromTo(
          mark,
          { yPercent: 16 },
          {
            yPercent: 0,
            ease: "none",
            scrollTrigger: { trigger: mark, start: "top bottom", end: "bottom bottom", scrub: 0.5 },
          },
        );
      }

      /* Fonts and images settle after first paint and change the page height;
         recompute trigger positions when they do. */
      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      const imgs = Array.from(document.images).filter((i) => !i.complete);
      let pending = imgs.length;
      imgs.forEach((i) => {
        const done = () => {
          if (--pending <= 0) ScrollTrigger.refresh();
        };
        i.addEventListener("load", done, { once: true });
        i.addEventListener("error", done, { once: true });
      });
    });

    /* Honour a mid-session change to the motion preference. */
    const onPrefChange = () => {
      if (reduce.matches) {
        ctx.revert();
        revealAll();
      }
    };
    reduce.addEventListener("change", onPrefChange);

    return () => {
      reduce.removeEventListener("change", onPrefChange);
      ctx.revert();
    };
  }, []);

  return null;
}
