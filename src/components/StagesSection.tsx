"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function StagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
        },
      });

      tl.from(headingRef.current, { y: 32, opacity: 0 })
        .from(subtitleRef.current, { y: 32, opacity: 0 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-[110px] md:pt-[200px] pb-0 px-6 text-center">
      <h2
        ref={headingRef}
        className="max-w-3xl mx-auto"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(38px, 5.3vw, 75px)",
          lineHeight: "94.13%", // 70.6px at 75px
        }}
      >
        Work that&apos;s still running
      </h2>
      <p
        ref={subtitleRef}
        className="mt-5 text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed"
      >
        Selected from a thirteen-year portfolio. Complex, operational, and
        built to be extended.
      </p>
    </section>
  );
}
