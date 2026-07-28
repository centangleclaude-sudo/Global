"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const partnerLogos = [
  { src: "/BritishCouncil.png", alt: "British Council" },
  { src: "/USAID.png", alt: "USAID" },
  { src: "/ignite.png", alt: "Ignite" },
  { src: "/world bank.png", alt: "The World Bank" },
  { src: "/united-states-institute.png", alt: "United States Institute" },
  { src: "/pmic.png", alt: "PMIC" },
];

// Unit 5-point star (outer radius 1), scaled per star below
const STAR_PATH =
  "M 0 -1 L 0.2939 -0.4045 L 0.9511 -0.309 L 0.4755 0.1545 L 0.5878 0.809 L 0 0.5 L -0.5878 0.809 L -0.4755 0.1545 L -0.9511 -0.309 L -0.2939 -0.4045 Z";

const scatteredStars: {
  x: number;
  y: number;
  size: number;
  fill?: string;
  stroke?: string;
}[] = [
  { x: 32, y: 22, size: 9, fill: "#d9d9d9" },
  { x: 140, y: 44, size: 13, stroke: "#737373" },
  { x: 241, y: 16, size: 8, stroke: "#e0e0e0" },
  { x: 303, y: 66, size: 7, fill: "#2F7CFF" },
  { x: 80, y: 118, size: 7, stroke: "#2F7CFF" },
  { x: 240, y: 122, size: 9, fill: "#8a8a8a" },
  { x: 43, y: 199, size: 5, fill: "#737373" },
  { x: 156, y: 196, size: 17, stroke: "#2F7CFF" },
];

export default function ProofSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proof-heading .word", {
        opacity: 0.15,
        y: 12,
        stagger: 0.03,
        scrollTrigger: {
          trigger: ".proof-heading",
        },
      });

      gsap.from(".proof-card", {
        y: 32,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".proof-grid",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // "We prove, design," is white; the rest is #737373
  const headingWords =
    "We prove, design, implement, and market your idea with absolute transparency and efficiency in it".split(" ");
  const whiteWordCount = 3;

  return (
    <section ref={sectionRef} className="pt-[110px] pb-[110px] md:pt-[200px] md:pb-[200px] px-6 md:px-12">
      {/* Heading */}
      <h2
        className="proof-heading text-center max-w-[760px] mx-auto"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(28px, 3.1vw, 44px)",
          lineHeight: 1.25,
        }}
      >
        {headingWords.map((word, i) => (
          <span
            key={i}
            className="word inline-block mr-[0.28em]"
            style={{ color: i < whiteWordCount ? "#ffffff" : "#737373" }}
          >
            {word}
          </span>
        ))}
      </h2>

      {/* Stats grid */}
      <div className="proof-grid flex flex-col md:flex-row items-start gap-[30px] max-w-6xl mx-auto mt-[70px] md:mt-[130px]">
        {/* Left column */}
        <div className="flex w-full md:w-[384.5px] flex-shrink-0 flex-col gap-[30px]">
        {/* 13+ Years */}
        <div
          className="proof-card justify-between"
          style={{
            width: "100%",
            maxWidth: "384.5px",
            minHeight: "267px",
            display: "flex",
            padding: "clamp(24px, 5vw, 40px)",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "stretch",
            borderRadius: "30.72px",
            border: "0.7px solid rgba(115, 115, 115, 0.25)",
          }}
        >
          {/* Business-driven UX badge */}
          <div
            className="flex items-center gap-3 px-4 py-2.5"
            style={{
              borderRadius: "96.001px",
              background: "linear-gradient(180deg, #2F7CFF 0%, #226BF0 100%)",
            }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "#ffffff",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 7L7 13L1 7L7 1Z" fill="#2F7CFF" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium whitespace-nowrap">
              Business-driven UX
            </span>
          </div>

          <p
            style={{
              color: "#737373",
              fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
              fontSize: "clamp(22px, 4.5vw, 30.72px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "120%",
            }}
          >
            <span style={{ color: "#ffffff", fontSize: "clamp(23px, 4.7vw, 32px)", fontWeight: 600 }}>
              13+ Years
            </span>{" "}
            of Delivering Innovative Software Solutions
          </p>
        </div>

        {/* Rated 5 stars */}
        <div
          className="proof-card justify-between"
          style={{
            width: "100%",
            maxWidth: "384.5px",
            minHeight: "415px",
            display: "flex",
            padding: "clamp(24px, 5vw, 40px)",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "stretch",
            borderRadius: "30.72px",
            border: "0.7px solid rgba(115, 115, 115, 0.25)",
          }}
        >
          {/* Scattered stars artwork — top center */}
          <svg
            viewBox="0 0 320 230"
            fill="none"
            style={{ alignSelf: "center", width: "min(300px, 100%)", height: "auto" }}
          >
            {scatteredStars.map((s, i) => (
              <path
                key={i}
                d={STAR_PATH}
                transform={`translate(${s.x} ${s.y}) scale(${s.size})`}
                fill={s.fill ?? "none"}
                stroke={s.stroke ?? "none"}
                strokeWidth={s.stroke ? 1.6 / s.size : 0}
                strokeLinejoin="round"
              />
            ))}
            <circle cx="8" cy="72" r="1" fill="#c4c4c4" />
            <circle cx="178" cy="110" r="1" fill="#c4c4c4" />
            <circle cx="297" cy="148" r="1.5" fill="#a855f7" />
            <circle cx="10" cy="190" r="1" fill="#c4c4c4" />
          </svg>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(22px, 4.5vw, 30.72px)",
              fontStyle: "normal",
              lineHeight: "120%",
            }}
          >
            <span style={{ color: "#737373", fontWeight: 400 }}>Rated 5 stars</span>{" "}
            <span style={{ color: "#ffffff", fontWeight: 600 }}>by 500+ reviews</span>
          </p>
        </div>
        </div>

        {/* Right column */}
        <div className="flex flex-1 min-w-0 flex-col gap-[30px]">
        {/* Trusted by Industry Leaders */}
        <div
          className="proof-card"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "703px",
            minHeight: "415px",
            padding: "clamp(24px, 5vw, 40px)",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: "30.72px",
            border: "0.7px solid rgba(115, 115, 115, 0.25)",
          }}
        >
          <p
            style={{
              fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
              fontSize: "clamp(22px, 4.5vw, 30.72px)",
              fontStyle: "normal",
              lineHeight: "120%",
              maxWidth: "480px",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            <span style={{ color: "#737373", fontWeight: 400 }}>Trusted by </span>
            <span style={{ color: "#ffffff", fontWeight: 700 }}>Industry Leaders</span>{" "}
            <span style={{ color: "#737373", fontWeight: 400 }}>Worldwide</span>
          </p>

          {/* Partner logos — 2 rows of 3, 90px below the text */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-10 items-center justify-items-center w-full"
            style={{ marginTop: "clamp(40px, 9vw, 90px)" }}
          >
            {partnerLogos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={36}
                className="h-7 md:h-8 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* 1+ million users */}
        <div
          className="proof-card relative overflow-hidden"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "703px",
            minHeight: "268px",
            padding: "clamp(24px, 5vw, 40px)",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "21px",
            borderRadius: "30.72px",
            border: "0.7px solid rgba(115, 115, 115, 0.25)",
            background: "#030305",
          }}
        >
          {/* Avatars */}
          <Image
            src="/person.png"
            alt="Users around the world"
            width={200}
            height={56}
            className="relative z-10 h-14 w-auto object-contain"
          />

          <p
            className="relative z-10"
            style={{
              fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
              fontSize: "clamp(22px, 4.5vw, 30.72px)",
              fontStyle: "normal",
              lineHeight: "120%",
            }}
          >
            <span style={{ color: "#737373", fontWeight: 400 }}>More than </span>
            <span style={{ color: "#ffffff", fontWeight: 600 }}>1+ million users</span>
            <br />
            <span style={{ color: "#737373", fontWeight: 400 }}>around the world</span>
          </p>

          {/* Dotted globe — right side, clipped by the card */}
          <Image
            src="/globe.png"
            alt=""
            width={200}
            height={200}
            className="absolute pointer-events-none select-none"
            style={{ right: "0", bottom: "0", width: "200px", height: "200px", maxWidth: "none" }}
          />
        </div>
        </div>
      </div>
    </section>
  );
}
