"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const words = textRef.current?.querySelectorAll(".word");
    if (!words) return;

    gsap.from(words, {
      opacity: 0.15,
      y: 20,
      stagger: 0.03,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(btnRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: btnRef.current,
        start: "top 85%",
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const parts = [
    { text: "We join forces with enterprise companies &", white: true },
    { text: "visionary startups leveraging our full-cycle digital", white: true },
    { text: "expertise to", white: true },
    { text: "create brands, experiences, and", white: false },
    { text: "products that drive growth and transformation", white: false },
    { text: "impacting millions every day", white: false },
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-[200px] pb-0 px-6 md:px-12 max-w-[1000px] mx-auto"
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
        {parts.map((part, pi) =>
          part.text.split(" ").map((word, wi) => (
            <span
              key={`${pi}-${wi}`}
              className={`word inline-block mr-[0.3em] ${
                part.white ? "text-white" : "text-gray-500"
              }`}
            >
              {word}
            </span>
          ))
        )}
      </p>

      <a
        ref={btnRef}
        href="#"
        className="mt-10 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3.5 rounded-full transition-colors font-medium"
      >
        Share your idea
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
