"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".cta-button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center text-center px-6"
      style={{ background: "#2F7CFF", padding: "120px 24px 130px" }}
    >
      <h2
        className="cta-heading text-white max-w-[1250px]"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(56px, 8.2vw, 118px)",
          lineHeight: "112.8%",
        }}
      >
        Want to start a new
        <br />
        project with us ?
      </h2>

      <a
        href="#"
        className="cta-button mt-12 inline-flex items-center gap-[10px] text-white"
        style={{
          padding: "6px 6px 6px 16px",
          borderRadius: "43px",
          background: "linear-gradient(180deg, #191616 0%, #141212 100%)",
          boxShadow: "0 0 25px 0 #226BF0",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Share your idea
        <span
          style={{
            display: "flex",
            width: "44.189px",
            height: "44.189px",
            padding: "18px 15px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "22.095px",
            background: "rgba(255, 255, 255, 0.09)",
          }}
        >
          <Image
            src="/Arrow 1.png"
            alt=""
            width={28}
            height={28}
            className="object-contain flex-shrink-0"
            style={{ maxWidth: "none" }}
          />
        </span>
      </a>
    </section>
  );
}
