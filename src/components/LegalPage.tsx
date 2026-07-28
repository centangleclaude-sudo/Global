"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export interface LegalSection {
  heading: string;
  /** Anchor target, so the footer can deep-link to a single clause. */
  id?: string;
  body?: string[];
  list?: string[];
}

/**
 * Shared shell for /privacy and /terms.
 *
 * Text may contain `[TODO: ...]` markers for details only the company can
 * supply. They render highlighted rather than silently blending into the copy,
 * so nothing ships looking finished when it isn't.
 */
function withTodos(text: string, keyPrefix: string) {
  return text.split(/(\[TODO:[^\]]*\])/g).map((part, i) =>
    part.startsWith("[TODO:") ? (
      <mark
        key={`${keyPrefix}-${i}`}
        className="rounded px-1.5 py-0.5 font-medium"
        style={{ background: "rgba(255, 179, 0, 0.16)", color: "#ffc94d" }}
      >
        {part}
      </mark>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    )
  );
}

export default function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".legal-title", { y: 32, opacity: 0 })
        .from(".legal-meta", { y: 32, opacity: 0 }, "-=0.5");

      gsap.from(".legal-section", {
        y: 32,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: { trigger: ".legal-body" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 max-w-[820px] mx-auto pt-[130px] md:pt-[180px] pb-[100px] md:pb-[140px]"
    >
      <h1
        className="legal-title text-white"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(36px, 5.3vw, 75px)",
          lineHeight: 1.12,
        }}
      >
        {title}
      </h1>

      <div className="legal-meta mt-6">
        <p className="text-[#737373] text-[13px]">Last updated: {lastUpdated}</p>
        <p className="text-[#9a9aa0] text-[15px] leading-[1.8] mt-5">
          {withTodos(intro, "intro")}
        </p>
      </div>

      <div className="legal-body mt-14 flex flex-col gap-11">
        {sections.map((s, si) => (
          <div key={s.heading} id={s.id} className="legal-section scroll-mt-28">
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(20px, 2.4vw, 26px)",
                lineHeight: 1.3,
              }}
            >
              {s.heading}
            </h2>

            {s.body?.map((para, pi) => (
              <p
                key={pi}
                className="text-[#9a9aa0] text-[15px] leading-[1.8] mb-4 last:mb-0"
              >
                {withTodos(para, `s${si}-p${pi}`)}
              </p>
            ))}

            {s.list && (
              <ul className="mt-2 flex flex-col gap-2.5">
                {s.list.map((item, li) => (
                  <li
                    key={li}
                    className="flex items-start gap-3 text-[#9a9aa0] text-[15px] leading-[1.7]"
                  >
                    <span className="mt-[9px] w-1 h-1 rounded-full bg-[#737373] flex-shrink-0" />
                    <span>{withTodos(item, `s${si}-l${li}`)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
