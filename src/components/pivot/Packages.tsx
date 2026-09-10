"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { Copy, Kicker, Lines } from "./Ph";
import { packages } from "@/content/site";

/**
 * No prices on this page, so the section is built on what IS true:
 * what is in and what is out, printed at the same size, side by side.
 */
export function Packages() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const item = packages.items[active];

  const select = (i: number) => {
    if (i === active) return;
    setActive(i);
    const el = panelRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      el.children,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power4.out", stagger: 0.04, overwrite: true },
    );
  };

  /* Arrow keys move between tabs, as a tablist should. */
  const onKey = (e: React.KeyboardEvent) => {
    const last = packages.items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
  };

  return (
    <section id="packages" className="section-pad bg-tint">
      <div className="wrap">
        <div className="grid items-end gap-8 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[900px]:gap-24">
          <div>
            <Kicker>{packages.kicker}</Kicker>
            <h2 className="d-l mt-4 max-w-[18ch]" data-lines>
              <Lines lines={[packages.heading[0]]} />
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-line className="accent block">
                  {packages.heading[1]}
                </span>
              </span>
            </h2>
          </div>
          <p className="t-body">{packages.lead}</p>
        </div>

        <div className="mt-16">
          <div
            ref={tabsRef}
            role="tablist"
            aria-label="Packages"
            onKeyDown={onKey}
            className="flex flex-wrap gap-2.5 border-b border-rule pb-6"
          >
            {packages.items.map((p, i) => (
              <button
                key={p.tab}
                role="tab"
                type="button"
                id={`pk-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`pk-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
                className="pk-tab"
              >
                {p.tab}
              </button>
            ))}
          </div>

          <div
            ref={panelRef}
            role="tabpanel"
            id={`pk-panel-${active}`}
            aria-labelledby={`pk-tab-${active}`}
            className="pt-12"
          >
            <p className="font-mono text-sm tracking-[0.01em] text-blue-ink">
              <Copy text={item.meta} />
            </p>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.62] text-ink-2">{item.desc}</p>

            <div className="mt-12 grid gap-8 min-[820px]:grid-cols-2 min-[820px]:gap-[clamp(32px,3.6vw,64px)]">
              <div className="pk-col in">
                <span className="label">Included</span>
                <ul className="mt-4 list-none p-0">
                  {item.included.map((li) => (
                    <li key={li}>
                      <Copy text={li} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pk-col out">
                <span className="label">Not included</span>
                <ul className="mt-4 list-none p-0">
                  {item.excluded.map((li) => (
                    <li key={li}>
                      <Copy text={li} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-8 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[900px]:gap-24">
          <p className="t-body">{packages.footNote}</p>
          <p className="t-small">
            <Copy text={packages.footSmall} />
          </p>
        </div>
      </div>
    </section>
  );
}
