"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function ServicesHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".services-hero-title", { y: 32, opacity: 0 }).from(
        ".services-hero-sub",
        { y: 32, opacity: 0 },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center text-center px-6 pt-[130px] md:pt-[170px] pb-[80px] md:pb-[120px]"
    >
      {/* Hero video + gradient scrim */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1432.802px",
          height: "702px",
          maxWidth: "100vw",
          zIndex: 0,
        }}
      >
        <video
          src="/Hero video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Scrim: linear-gradient(180deg, #04080B 0%, rgba(4,8,11,0) 75.42%) */}
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.9,
            background:
              "linear-gradient(180deg, #04080B 0%, rgba(4, 8, 11, 0.00) 75.42%)",
          }}
        />

        {/* Bottom fade into the page background */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "45%",
            background:
              "linear-gradient(180deg, rgba(10, 10, 15, 0) 0%, #0a0a0f 92%)",
          }}
        />
      </div>

      <h1
        className="services-hero-title relative text-white"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(44px, 5.3vw, 75px)",
          lineHeight: "112.8%",
        }}
      >
        Our Services
      </h1>

      <p className="services-hero-sub relative mt-6 text-[#737373] text-sm md:text-[15px] leading-relaxed max-w-[420px]">
        See how thoughtful design and cutting-edge technology create
        meaningful digital experiences.
      </p>
    </section>
  );
}
