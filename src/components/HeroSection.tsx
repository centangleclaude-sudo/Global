"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(badgeRef.current, { y: 30, opacity: 0, duration: 0.8 })
      .from(headingRef.current, { y: 60, opacity: 0, duration: 1 }, "-=0.4")
      .from(imageRef.current, { y: 80, opacity: 0, scale: 0.95, duration: 1.2 }, "-=0.6")
      .from(
        floatingRefs.current.filter(Boolean),
        { scale: 0, opacity: 0, duration: 0.6, stagger: 0.15 },
        "-=0.8"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center pt-[136px] pb-0 px-4 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[120px]" />
      </div>

      {/* Badge */}
      <div
        ref={badgeRef}
        className="glass-badge mb-5"
        style={{
          display: "flex",
          padding: "8px 14px",
          justifyContent: "center",
          alignItems: "center",
          gap: "19.685px",
          borderRadius: "22.498px",
        }}
      >
        <span
          className="relative whitespace-nowrap text-sm tracking-wide"
          style={{
            color: "rgba(255,255,255,0.82)",
            zIndex: 3,
          }}
        >
          Digital brand design agency
        </span>
      </div>

      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-center max-w-[880px] mb-14"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(40px, 5.3vw, 75px)",
          lineHeight: "112.8%",
        }}
      >
        Engineering partners
        <br />
        for businesses that
        <br />
        build the future
      </h1>

      {/* Hero Image Area */}
      <div ref={imageRef} className="relative w-full max-w-[900px] mx-auto">

        {/* Main hero image */}
        <div className="relative rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
        >
          <Image
            src="/Centerimage1.png"
            alt="Engineering workspace"
            width={1400}
            height={787}
            className="w-full h-auto object-cover"
            priority
          />
          {/* Subtle dark vignette overlay on edges */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.45) 100%)",
            }}
          />
        </div>

        {/* Floating elements */}


        {/* Result +72% - top right, overlapping the 98% card */}
        <div
          ref={(el) => { floatingRefs.current[1] = el; }}
          className="absolute"
          style={{
            display: "flex",
            width: "92px",
            height: "54px",
            padding: "10px 12px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            borderRadius: "12px",
            background: "linear-gradient(180deg, #2F7CFF 0%, #226BF0 100%)",
            boxShadow: "0 10px 24px 0 rgba(43, 117, 246, 0.28)",
            right: "-100px",
            top: "-19px",
            zIndex: 20,
          }}
        >
          <div className="text-[9px] text-blue-200 font-medium tracking-wide">Result</div>
          <div className="text-sm font-bold text-white">+72%</div>
        </div>

        {/* Project Delivery card - above orange circle */}
        <div
          className="absolute"
          style={{ left: "-160px", top: "-250px", width: "266px" }}
        >
          {/* Rocket icon - outside and above the card, centered */}
          <div style={{
            display: "flex", justifyContent: "center", marginBottom: "-27px", zIndex: 1, position: "relative", paddingLeft: "20px",
          }}>
            <div style={{
              width: "54px", height: "54px", borderRadius: "50%",
              background: "#18181f", border: "1px solid rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: "38px", height: "38px", borderRadius: "50%",
                background: "linear-gradient(135deg, #4a8af4, #2563eb)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Image src="/Rocket.png" alt="Rocket" width={18} height={18} style={{ objectFit: "contain", width: "18px", height: "18px" }} />
              </div>
            </div>
          </div>

          {/* Card */}
          <div style={{
            width: "266px", height: "178px",
            borderRadius: "16px", background: "#0d0d12",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 16px 12px 16px", overflow: "hidden",
          }}>

          {/* Title */}
          <div style={{ color: "white", fontWeight: 600, fontSize: "15px", marginBottom: "12px" }}>
            Project Delivery
          </div>

          {/* Chart */}
          <svg width="234" height="110" viewBox="0 0 234 110" style={{ overflow: "visible" }}>
            <defs>
              <filter id="blueglow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Dashed horizontal line */}
            <line x1="0" y1="90" x2="234" y2="90" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 5"/>

            {/* Glow layer */}
            <path
              d="M 0,78 L 39,58 L 78,66 L 117,61 L 156,61 L 195,38 L 234,14"
              fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="6"
              strokeLinecap="round" strokeLinejoin="round"
            />
            {/* Blue line */}
            <path
              d="M 0,78 L 39,58 L 78,66 L 117,61 L 156,61 L 195,38 L 234,14"
              fill="none" stroke="#3b82f6" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            />

            {/* White dot marker at 2023 (x=117) */}
            <circle cx="117" cy="61" r="6" fill="white"/>
            <circle cx="117" cy="61" r="3" fill="#0d0d12"/>

            {/* Year labels */}
            {["2020","2021","2022","2023","2024","2025","2026"].map((year, i) => (
              <text
                key={year}
                x={10 + i * 35.67}
                y="106"
                textAnchor="middle"
                fill="rgba(140,140,160,0.6)" fontSize="8" fontFamily="Arial, sans-serif"
              >
                {year}
              </text>
            ))}
          </svg>
          </div>
        </div>

        {/* Curved arrow above orange circle pointing upper-right */}
        <div className="absolute" style={{ left: "-65px", top: "-30px", pointerEvents: "none" }}>
          <svg width="65" height="75" viewBox="0 0 100 110" fill="none" style={{ opacity: 0.85 }}>
            {/* Main curved arc from bottom-left to upper-right */}
            <path
              d="M20 105 C15 70, 40 35, 80 8"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Arrowhead — two lines branching from tip at (80,8) */}
            <path d="M80 8 L63 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M80 8 L76 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* 13+ Years - left side */}
        <div
          ref={(el) => { floatingRefs.current[2] = el; }}
          className="absolute float-animation-delayed"
          style={{ left: "-40px", top: "40px" }}
        >
          <div
            className="flex flex-col items-center justify-center text-center shadow-xl shadow-black/30"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "#FF5722",
            }}
          >
            <div className="text-white font-bold" style={{ fontSize: "28px", lineHeight: 1 }}>13+</div>
            <div className="text-white text-[11px] leading-tight mt-1 px-3">
              Years of software delivery
            </div>
          </div>
        </div>

        {/* Engineering Maturity 98% card - right side */}
        <div
          ref={(el) => { floatingRefs.current[3] = el; }}
          className="absolute"
          style={{
            top: "10px",
            right: "-80px",
            display: "inline-flex",
            width: "282px",
            height: "174px",
            padding: "20px 16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "23.758px",
            borderRadius: "11.879px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            background: "#101010",
            boxShadow: "0 0.99px 1.98px 0 rgba(0, 0, 0, 0.04)",
            overflow: "hidden",
          }}
        >
          {/* Label */}
          <span className="text-[11px] text-gray-400 tracking-wide">Engineering Maturity</span>

          {/* Semicircular gauge */}
          <div className="flex flex-col items-center w-full" style={{ marginBottom: "30px" }}>
            <svg width="230" height="125" viewBox="0 0 230 125">
              {/* Dotted track — drawn FIRST so blue arc covers them */}
              {Array.from({ length: 36 }).map((_, i) => {
                const angle = 180 + (i * 180) / 35;
                const rad = (angle * Math.PI) / 180;
                const cx = 115 + 95 * Math.cos(rad);
                const cy = 115 + 95 * Math.sin(rad);
                return (
                  <circle key={i} cx={cx} cy={cy} r="2.2" fill="rgba(180,180,200,0.22)" />
                );
              })}

              {/* Blue progress arc ~98% */}
              <path
                d="M 20,115 A 95,95 0 0,1 208,100"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Glow rings around endpoint */}
              <circle cx="208" cy="100" r="14" fill="rgba(59,130,246,0.15)" />
              <circle cx="208" cy="100" r="9"  fill="rgba(59,130,246,0.30)" />
              <circle cx="208" cy="100" r="5"  fill="white" />

              {/* 98% centered inside the arc */}
              <text x="115" y="72" textAnchor="middle" dominantBaseline="middle"
                fill="white" fontSize="26" fontWeight="700" fontFamily="Arial, sans-serif">
                98%
              </text>

              {/* Overall Score label */}
              <text x="115" y="94" textAnchor="middle" dominantBaseline="middle"
                fill="rgba(150,150,170,0.7)" fontSize="9" fontWeight="400"
                fontFamily="Arial, sans-serif" letterSpacing="2">
                OVERALL SCORE
              </text>
            </svg>
          </div>
        </div>

        {/* Engineering systems - right side */}
        <div
          ref={(el) => { floatingRefs.current[4] = el; }}
          className="absolute float-animation-delayed"
          style={{ right: "-140px", bottom: "170px" }}
        >
          <div
            className="glass-badge flex items-center gap-3 px-4 py-2.5"
            style={{ borderRadius: "100px" }}
          >
            {/* Circle with orange diamond */}
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "#ffffff",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 7L7 13L1 7L7 1Z" fill="#FF4D2E" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium whitespace-nowrap">Engineering systems</span>
          </div>
        </div>
      </div>


      {/* Decorative dots - left side */}
      <div className="absolute left-6 md:left-10 top-[45%] flex gap-1.5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-[6px] h-[6px] rounded-full"
            style={{ background: i < 3 ? "#3b82f6" : i < 5 ? "#22c55e" : "rgba(255,255,255,0.1)" }}
          />
        ))}
      </div>
    </section>
  );
}
