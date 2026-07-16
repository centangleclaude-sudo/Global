"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/* ─── Shared card styles (per design spec) ─── */

const cardStyle: React.CSSProperties = {
  display: "flex",
  padding: "40px 43px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "109px",
  borderRadius: "30.72px",
  border: "0.7px solid #DFDFE1",
  background: "#ECECEE",
};

function CardHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        textAlign: "center",
        fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
        fontSize: "42px",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "56.84px",
        background: "linear-gradient(180deg, #141212 0%, #121010 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </h3>
  );
}

function CardSub({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        width: "452px",
        maxWidth: "100%",
        color: "#737373",
        textAlign: "center",
        fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "24.332px",
      }}
    >
      {children}
    </p>
  );
}

/* ─── Card 2: "Lets get started" composition ─── */

// Avatar photos
const avatars = [
  { left: "21%", top: "-2px", size: "16%", src: "/yellow p.png", alt: "Team member" },
  { left: "47%", top: "16%", size: "10.5%", src: "/green p.png", alt: "Team member" },
  { left: "70%", top: "2px", size: "9%", src: "/darkp.png", alt: "Team member" },
  { left: "26%", top: "calc(60% + 7px)", size: "9.5%", src: "/orangep.png", alt: "Team member" },
  { left: "7%", top: "66%", size: "14%", src: "/dgp.png", alt: "Team member" },
  { left: "71%", top: "66%", size: "15.5%", src: "/greyp.png", alt: "Team member" },
];

const rings = [
  { width: "100%", height: "100%", radius: "150px", color: "#BFD4F2" },
  { width: "84%", height: "82%", radius: "130px", color: "#CFD9EA" },
  { width: "66%", height: "62%", radius: "110px", color: "#DCDFE6" },
  { width: "48%", height: "42%", radius: "90px", color: "#E2E4E9" },
];

function IconPill({
  left,
  top,
  icon,
}: {
  left: string;
  top: string;
  icon: "lock" | "cursor" | "thumb";
}) {
  return (
    <div
      className="absolute flex items-center justify-center bg-[#141216] z-10"
      style={{ left, top, width: "11%", aspectRatio: "100/58", borderRadius: "999px" }}
    >
      {icon === "lock" && (
        <svg width="30%" height="45%" viewBox="0 0 24 24" fill="#fff">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z" />
        </svg>
      )}
      {icon === "cursor" && (
        <Image
          src="/Vector.png"
          alt="Cursor"
          width={40}
          height={40}
          className="object-contain"
          style={{ width: "36%", height: "auto" }}
        />
      )}
      {icon === "thumb" && (
        <svg width="34%" height="50%" viewBox="0 0 24 24" fill="#fff">
          <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </svg>
      )}
    </div>
  );
}

/* ─── Card 4: scattered pills ─── */

interface Pill {
  label: string;
  left: string;
  top: string;
  rotate: number;
  bg: string;
  color: string;
  border?: string;
}

const pills: Pill[] = [
  { label: "Composed", left: "16%", top: "8%", rotate: -9.25, bg: "#EDEDEF", color: "#111", border: "1px solid #111" },
  { label: "Intelligent", left: "48%", top: "0%", rotate: -25.55, bg: "#2F6BFF", color: "#fff" },
  { label: "Intelligent", left: "1%", top: "28%", rotate: -19.69, bg: "#141216", color: "#fff" },
  { label: "Structured", left: "70%", top: "20%", rotate: 20.82, bg: "#141216", color: "#fff" },
  { label: "Precision", left: "32%", top: "36%", rotate: 23.68, bg: "#141216", color: "#fff" },
  { label: "Clear", left: "56%", top: "44%", rotate: -27.33, bg: "linear-gradient(90deg, #7A5CFF 0%, #5C7CFF 100%)", color: "#fff" },
  { label: "Efficient", left: "79%", top: "56%", rotate: -23.14, bg: "#2F6BFF", color: "#fff" },
  { label: "Control", left: "4%", top: "56%", rotate: 17.93, bg: "#EDEDEF", color: "#111", border: "1px solid #111" },
  { label: "Professional", left: "22%", top: "66%", rotate: -16.15, bg: "#F04E23", color: "#fff" },
  { label: "Direct", left: "51%", top: "70%", rotate: 34.95, bg: "#fff", color: "#111", border: "1px solid #111" },
  // { label: "Clarity", left: "70%", top: "86%", rotate: 6.12, bg: "#141216", color: "#fff" },
  { label: "Reliabile", left: "3%", top: "88%", rotate: 0, bg: "linear-gradient(90deg, #6EA8FF 0%, #2F6BFF 100%)", color: "#fff" },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-title",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".service-card", {
        y: 70,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-[200px] pb-0 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="services-title text-center mb-16">
        <h2
          className="text-[#111114]"
          style={{
            fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(64px, 9.7vw, 140px)",
            lineHeight: 1.1,
          }}
        >
          Services
        </h2>
        <p className="mt-5 text-[#6b6b70] text-sm md:text-base max-w-md mx-auto leading-relaxed">
          From strategy and design to development and support, we provide the
          expertise you need at every stage of your product&apos;s life.
        </p>
      </div>

      {/* Cards grid */}
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* ── Card 1: Software development ── */}
        <div className="service-card" style={{ ...cardStyle, overflow: "hidden" }}>
          <div className="flex w-full flex-col items-center gap-3">
            <CardHeading>Software development</CardHeading>
            <CardSub>
              Web platforms, mobile apps, and complex systems built end-to-end by
              senior engineers — from architecture to launch and beyond.
            </CardSub>
          </div>

          {/* Composition: person + floating UI cards — bleeds to the card edges */}
          <div
            className="relative"
            style={{
              width: "calc(100% + 86px)",
              margin: "0 -43px -40px",
              aspectRatio: "976 / 652",
            }}
          >
            {/* Growth card — behind the person */}
            <div
              className="absolute"
              style={{
                right: "calc(18% + 10px)",
                top: "calc(8% - 30px)",
                borderRadius: "14px",
                background: "linear-gradient(180deg, #2F7CFF 0%, #226BF0 100%)",
                boxShadow: "0 16px 36px rgba(43,117,246,0.30)",
                padding: "14px 16px 16px",
                zIndex: 1,
              }}
            >
              <div className="text-white text-[11px] font-medium mb-1.5">Growth</div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold" style={{ fontSize: "24px", lineHeight: 1 }}>
                  3233
                </span>
                <span
                  className="text-white text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.22)" }}
                >
                  +83.9%
                </span>
              </div>
            </div>

            {/* Bell — white circle, orange bell */}
            <div
              className="absolute flex items-center justify-center bg-white rounded-full"
              style={{
                right: "14%",
                top: "0%",
                width: "52px",
                height: "52px",
                boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
                zIndex: 1,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF5722">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                <circle cx="17" cy="6" r="3" fill="#22c55e" />
              </svg>
            </div>

            {/* Statistics card — behind the person's laptop */}
            <div
              className="absolute bg-white"
              style={{
                right: "43px",
                top: "calc(32% + 20px)",
                width: "40%",
                borderRadius: "16px",
                boxShadow: "0 18px 44px rgba(0,0,0,0.10)",
                padding: "16px",
                zIndex: 3,
              }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#111114] font-bold text-[14px]">Statistics</span>
                <span className="text-[9px] text-[#444] border border-black/10 rounded-md px-1.5 py-0.5">
                  Week 1 ▾
                </span>
              </div>
              <div className="text-[9px] text-[#9a9aa0] mb-2">Jun 06 - Jun 13</div>
              <div className="flex items-end justify-between gap-1.5 h-[64px] mb-1">
                {[
                  { track: 52, bar: 26 },
                  { track: 60, bar: 34 },
                  { track: 48, bar: 24 },
                  { track: 64, bar: 44 },
                  { track: 56, bar: 34 },
                  { track: 58, bar: 30 },
                  { track: 62, bar: 40 },
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className="relative w-[7px] rounded-full bg-[#e9edf5] flex items-end"
                      style={{ height: `${b.track}px` }}
                    >
                      <div
                        className="w-full rounded-full bg-[#2F7CFF]"
                        style={{ height: `${b.bar}px` }}
                      />
                    </div>
                    <span className="text-[7px] text-[#9a9aa0]">
                      {["M", "T", "W", "T", "F", "S", "S"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-black/[0.06] pt-1.5">
                <span className="text-[10px] font-semibold text-[#111114]">New followers</span>
                <span className="text-[10px] font-bold text-[#111114]">98.5k</span>
              </div>
            </div>

            {/* Person */}
            <Image
              src="/Pboy.png"
              alt="Software development"
              width={976}
              height={652}
              className="absolute bottom-0 left-0 h-auto"
              style={{ width: "100%", zIndex: 2 }}
            />

            {/* Insights Overview card — above the person */}
            <div
              className="absolute bg-white"
              style={{
                left: "43px",
                top: "10%",
                width: "37%",
                borderRadius: "18px",
                boxShadow: "0 18px 44px rgba(0,0,0,0.10)",
                padding: "18px",
                zIndex: 3,
              }}
            >
              <div
                className="text-[#111114] mb-3"
                style={{ fontSize: "12.47px", fontWeight: 600 }}
              >
                Insights Overview
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#e8f1ff] flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#2F7CFF">
                    <path d="M23 4.9c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.5 2-2.5-.9.5-1.9.9-2.9 1.1C18.6 3.3 17.4 2.8 16 2.8c-2.7 0-4.9 2.2-4.9 4.9 0 .4 0 .8.1 1.1C7.2 8.6 3.6 6.7 1.2 3.8c-.4.7-.7 1.5-.7 2.4 0 1.7.9 3.2 2.2 4.1-.8 0-1.6-.2-2.2-.6v.1c0 2.4 1.7 4.4 3.9 4.8-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9.1 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.6z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#111114] font-bold text-[12px] leading-tight">
                    Centangle Global
                  </div>
                  <div className="text-[#9a9aa0] text-[10px]">@CentangleGlobal</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div>
                  <div className="text-[9px] text-[#737373] leading-[1.3]">
                    Reach
                    <br />
                    &nbsp;
                  </div>
                  <div className="text-[13px] font-bold text-[#111114]">1.7M</div>
                </div>
                <div>
                  <div className="text-[9px] text-[#737373] leading-[1.3]">
                    Engagem
                    <br />
                    ent
                  </div>
                  <div className="text-[13px] font-bold text-[#111114]">38,777</div>
                </div>
                <div>
                  <div className="text-[9px] text-[#737373] leading-[1.3]">
                    Net
                    <br />
                    followers
                  </div>
                  <div className="text-[13px] font-bold text-[#111114]">3233</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-black/[0.06] pt-2.5">
                <span className="text-[11px] font-bold text-[#111114]">Best Performance</span>
                <span className="text-[10px] font-semibold text-[#2F7CFF] bg-[#e8f1ff] px-2 py-0.5 rounded-full">
                  +83.9%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Card 2: Staff augmentation — content starts from the top */}
        <div className="service-card" style={{ ...cardStyle, justifyContent: "flex-start" }}>
          <div className="flex w-full flex-col items-center gap-3">
            <CardHeading>Staff augmentation</CardHeading>
            <CardSub>
              Extend your in-house team with vetted senior engineers who integrate
              into your workflow, tools, and culture from day one.
            </CardSub>
          </div>

          {/* Composition: concentric rings + CTA + avatars */}
          <div className="relative w-full" style={{ aspectRatio: "900 / 503" }}>
            {/* Concentric rounded rings */}
            {rings.map((ring, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: ring.width,
                  height: ring.height,
                  borderRadius: ring.radius,
                  border: `1px solid ${ring.color}`,
                }}
              />
            ))}

            {/* Center CTA button */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 z-10"
              style={{
                background: "#2F7CFF",
                borderRadius: "999px",
                padding: "16px 32px",
                boxShadow: "0 16px 40px rgba(47,124,255,0.35)",
              }}
            >
              <Image
                src="/Vector.png"
                alt="Cursor"
                width={22}
                height={22}
                className="object-contain"
              />
              <span className="text-white font-semibold whitespace-nowrap" style={{ fontSize: "19px" }}>
                Lets get started
              </span>
            </div>

            {/* Icon pills */}
            <IconPill left="5%" top="28%" icon="lock" />
            <IconPill left="83%" top="30%" icon="cursor" />
            <IconPill left="42%" top="74%" icon="thumb" />

            {/* Avatars */}
            {avatars.map((a, i) => (
              <div
                key={i}
                className="absolute rounded-full overflow-hidden z-10"
                style={{
                  left: a.left,
                  top: a.top,
                  width: a.size,
                  aspectRatio: "1",
                }}
              >
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Card 3: AI development ── */}
        <div className="service-card" style={{ ...cardStyle, overflow: "hidden" }}>
          <div className="flex w-full flex-col items-center gap-3">
            <CardHeading>AI development</CardHeading>
            <CardSub>
              Applied AI for production systems, including computer vision, speech,
              and data processing, built and shipped for real-world business use.
            </CardSub>
          </div>

          {/* Composition: GLOBAL text + robot handshake — bleeds to the card edges */}
          <div
            className="relative overflow-hidden"
            style={{
              width: "calc(100% + 86px)",
              margin: "0 -43px -40px",
              aspectRatio: "1261 / 830",
            }}
          >
            <span
              className="absolute left-1/2 -translate-x-1/2 select-none whitespace-nowrap"
              style={{
                top: "8%",
                color: "#2F6BFF",
                fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(90px, 12.5vw, 175px)",
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}
            >
              GLOBAL
            </span>

            {/* Robot handshake — layered above the GLOBAL text */}
            <Image
              src="/hand.png"
              alt="Human and robot handshake"
              width={1261}
              height={830}
              className="absolute h-auto"
              style={{ left: "0%", bottom: "0%", width: "100%", zIndex: 2 }}
            />
          </div>
        </div>

        {/* ── Card 4: Brand Visuals ── */}
        <div className="service-card" style={cardStyle}>
          <div className="flex w-full flex-col items-center gap-3">
            <CardHeading>Brand Visuals</CardHeading>
            <CardSub>
              Identity systems, product design, and marketing visuals that make your
              brand instantly recognizable across every touchpoint.
            </CardSub>
          </div>

          {/* Composition: scattered pills */}
          <div className="relative w-full" style={{ aspectRatio: "946 / 531" }}>
            {/* small gradient element */}
            <div
              className="absolute"
              style={{
                left: "1.5%",
                top: "72%",
                width: "45.59px",
                height: "34.19px",
                transform: "rotate(19.6deg)",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #8A5CFF 0%, #5C7CFF 100%)",
              }}
            />
            {pills.map((pill, i) => (
              <span
                key={`${pill.label}-${i}`}
                className="absolute whitespace-nowrap font-medium"
                style={{
                  left: pill.left,
                  top: pill.top,
                  transform: `rotate(${pill.rotate}deg)`,
                  background: pill.bg,
                  color: pill.color,
                  border: pill.border,
                  borderRadius: "999px",
                  padding: "12px 26px",
                  fontSize: "19px",
                }}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
