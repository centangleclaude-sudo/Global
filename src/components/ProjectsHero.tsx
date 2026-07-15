"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function ProjectsHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".projects-hero-title", { y: 60, opacity: 0, duration: 1 }).from(
        ".projects-hero-sub",
        { y: 30, opacity: 0, duration: 0.8 },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center text-center px-6 pt-[180px] pb-[100px]"
    >
      <h1
        className="projects-hero-title text-white max-w-[1250px]"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(48px, 8.24vw, 118.58px)",
          lineHeight: "112.8%",
        }}
      >
        Where Great Ideas
        <br />
        Take Shape
      </h1>

      <p className="projects-hero-sub mt-6 text-[#737373] text-sm md:text-[15px] leading-relaxed max-w-[430px]">
        See how thoughtful design and cutting-edge technology create
        meaningful digital experiences.
      </p>
    </section>
  );
}
