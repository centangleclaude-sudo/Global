"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function StagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(headingRef.current, { y: 60, opacity: 0, duration: 1, ease: "power3.out" })
      .from(subtitleRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5");

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="pt-[200px] pb-0 px-6 text-center">
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
