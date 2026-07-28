"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".word");
      if (!words) return;

      gsap.from(words, {
        opacity: 0.15,
        y: 12,
        stagger: 0.03,
        scrollTrigger: {
          trigger: sectionRef.current,
          end: "bottom 60%",
        },
      });

      gsap.from(btnRef.current, {
        opacity: 0,
        y: 32,
        scrollTrigger: {
          trigger: btnRef.current,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Four forced lines; text turns #737373 starting at "understand"
  const lines = [
    "We embed into your problem the way a good hire",
    "would. Ask the questions, understand the domain,",
    "build the thing, and stay accountable for whether",
    "it actually works.",
  ];
  let grayStarted = false;
  const linesWithColor = lines.map((line) =>
    line.split(" ").map((word) => {
      if (word.startsWith("understand")) grayStarted = true;
      return { word, gray: grayStarted };
    })
  );

  return (
    <section
      ref={sectionRef}
      className="pt-[110px] md:pt-[200px] pb-0 px-6 md:px-12 max-w-[1000px] mx-auto"
    >
      <p
        ref={textRef}
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(26px, 3.1vw, 44px)",
          lineHeight: "160.45%", // 70.6px at 44px
        }}
      >
        {linesWithColor.map((line, li) => (
          <span key={li} className="mission-line">
            {line.map((item, wi) => (
              <span
                key={`${li}-${wi}`}
                className="word inline-block mr-[0.3em]"
                style={{ color: item.gray ? "#737373" : "#ffffff" }}
              >
                {item.word}
              </span>
            ))}
          </span>
        ))}
      </p>

      <a
        ref={btnRef}
        href="/contact"
        className="mt-10 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3.5 rounded-full transition-colors font-medium"
      >
        Book a Meeting
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
