"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Highlight {
  title: string;
  body: string;
  icon: string;
}

const highlights: Highlight[] = [
  {
    title: "Business Systems That Scale",
    body: "We design intelligent business systems that automate operations, centralize data, and streamline workflows, enabling teams to work faster, smarter, and with complete operational visibility.",
    icon: "/Bss.png",
  },
  {
    title: "Empower Teams with Digital Skills",
    body: "Equip your workforce with practical digital skills and emerging technologies through hands-on training, helping teams confidently adopt modern tools, improve productivity, and drive innovation.",
    icon: "/ETD.png",
  },
  {
    title: "Digital Transformation",
    body: "Develop a clear transformation strategy that aligns technology, processes, and business objectives to accelerate a desirable digital growth.",
    icon: "/DT.png",
  },
];

export default function ServiceHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".highlight-card", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-[30px] pb-[180px]"
    >
      {highlights.map((h) => (
        <div
          key={h.title}
          className="highlight-card flex flex-col md:flex-row items-center gap-10 justify-between"
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.06)",
            background:
              "radial-gradient(140% 160% at 85% 10%, rgba(37, 62, 128, 0.35) 0%, rgba(10, 14, 26, 0.9) 55%, #05060a 100%)",
            padding: "44px 48px",
          }}
        >
          <div className="max-w-[640px]">
            <h3
              className="text-white"
              style={{
                fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                fontWeight: 600,
                fontSize: "26px",
              }}
            >
              {h.title}
            </h3>
            <p className="text-[#9a9aa0] text-[14px] leading-[1.7] mt-4">
              {h.body}
            </p>
          </div>

          {/* 3D icon — vertically centred against the text */}
          <Image
            src={h.icon}
            alt=""
            width={441}
            height={393}
            className="object-contain flex-shrink-0 self-center"
            style={{
              width: "220.368px",
              height: "196.473px",
              maxWidth: "100%",
            }}
          />
        </div>
      ))}
    </section>
  );
}
