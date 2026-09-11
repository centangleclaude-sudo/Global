"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { nav, site } from "@/content/site";

/**
 * `minimal` drops the section nav and points the wordmark home. The legal
 * pages have no sections to jump to, so a nav of dead in-page anchors would
 * be worse than none.
 */
export function Header({ minimal = false }: { minimal?: boolean }) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 980 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-60 border-b backdrop-blur-[14px] backdrop-saturate-150 transition-[border-color,box-shadow] duration-300 ${
          stuck ? "border-rule shadow-[0_1px_20px_-8px_rgb(11_11_12/0.25)]" : "border-transparent"
        }`}
        style={{ background: "rgb(245 242 236 / 0.85)" }}
      >
        <div className="wrap flex min-h-[72px] items-center justify-between gap-8">
          <a href={minimal ? "/" : "#top"} className="inline-flex min-h-11 items-center gap-3 rounded-lg px-1 font-display text-[18px] font-bold tracking-[-0.03em] no-underline">
            <Image src="/brand/mark.png" alt="" width={34} height={34} className="rounded-full" priority />
            {site.name}
          </a>

          {!minimal && (
          <nav aria-label="Primary" className="hidden items-center gap-2 min-[980px]:flex">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="inline-flex min-h-11 items-center rounded-full px-3.5 text-[15.5px] font-medium text-ink-2 no-underline transition-colors duration-200 hover:bg-[rgb(11_11_12/0.055)] hover:text-ink"
              >
                {i.label}
              </a>
            ))}
          </nav>
          )}

          <a
            href={minimal ? "/#start" : "#start"}
            /* Without a burger beside it, the minimal CTA is the only
               control in the bar — so it has to show at every width. */
            className={`btn btn-ink btn-sm magnetic ${minimal ? "inline-flex" : "hidden min-[980px]:inline-flex"}`}
          >
            Start a project
          </a>

          {!minimal && (
          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-12 items-center justify-center rounded-xl transition-colors duration-200 hover:bg-[rgb(11_11_12/0.06)] min-[980px]:hidden"
          >
            <span className="relative block h-[1.5px] w-[22px] bg-ink transition-colors duration-200 data-[x=true]:bg-transparent" data-x={open}>
              <span
                className="absolute left-0 block h-[1.5px] w-[22px] bg-ink transition-transform duration-[400ms] ease-out-expo"
                style={{ top: -7, transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
              />
              <span
                className="absolute left-0 block h-[1.5px] w-[22px] bg-ink transition-transform duration-[400ms] ease-out-expo"
                style={{ top: 7, transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
          )}
        </div>
      </header>

      {!minimal && (
      <div
        id="menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] z-55 flex flex-col gap-2 overflow-y-auto overscroll-contain bg-cream px-[var(--gutter)] pb-24 pt-8 min-[980px]:hidden"
      >
        {nav.map((i) => (
          <a
            key={i.href}
            href={i.href}
            onClick={() => setOpen(false)}
            className="flex min-h-15 items-center border-b border-rule font-display text-[26px] font-semibold tracking-[-0.03em] text-ink no-underline last-of-type:border-b-0"
          >
            {i.label}
          </a>
        ))}
        <a href="#start" onClick={() => setOpen(false)} className="btn btn-primary mt-8 w-full">
          Start a project
        </a>
      </div>
      )}
    </>
  );
}
