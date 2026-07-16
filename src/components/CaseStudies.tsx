"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface CaseStudy {
  title: string;
  description: string;
  boldPhrases: string[];
  extraParagraph?: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "US Industrial · Refinery\nTurnaround Management",
    description:
      "Managing a refinery turnaround involves thousands of moving parts, strict timelines, and zero margin for miscommunication. We built EZTRAK from the ground up.",
    boldPhrases: ["AI features"],
    extraParagraph:
      "SAP and Primavera integrated, real-time, with AI features in active development. Started as an hourly engagement on Upwork. Became a long-term turnkey partnership.",
    image: "/Eztrak.png",
  },
  {
    title: "KP Government · 27,500 km Road Network",
    description:
      "A provincial government needed to survey, catalogue, and manage one of the country's largest road networks. We built the platform and the AI survey module inside it. Car-mounted cameras detecting potholes, identifying damage, and cataloguing assets automatically from video footage.",
    boldPhrases: [],
    image: "/Rams.png",
  },
  {
    title: "British Council · Ed-Tech",
    description:
      "A learning platform built for the British Council's DICE program supporting women entrepreneurs through interactive modules, live discussion forums, and structured course management.",
    boldPhrases: ["British Council's DICE program"],
    extraParagraph:
      "The program has since concluded and the platform is no longer active. The engagement delivered a fully functional ed-tech product within a two-day design sprint.",
    image: "/dice.png",
  },
  {
    title: "Federal Government ·\nNational Employment\nPlatform",
    description:
      "A national platform connecting young people to employment, skills, and opportunity. Built with React Native and web, integrated with national employment partners. Over one million users registered by the time it was handed over to the client.",
    boldPhrases: [],
    image: "/rehnuma.png",
  },
  {
    title: "Ignite / MoIT · Assistive\nTechnology",
    description:
      "Most text-to-speech tools for Urdu don't exist, or don't work well enough to matter. We trained a Piper neural TTS voice model from scratch, integrated it with the NVDA screen reader, and shipped it offline-first for users with unreliable connectivity. Bilingual Urdu and English. Real engineering, not an API wrapper.",
    boldPhrases: [],
    image: "/Technology.png",
  },
];

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textEl = cardRef.current?.querySelector(".case-text");
      const imageEl = cardRef.current?.querySelector(".case-image");

      if (textEl) {
        gsap.from(textEl, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (imageEl) {
        gsap.from(imageEl, {
          scale: 0.96,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => ctx.revert();
  }, [index]);

  function renderText(text: string, boldPhrases: string[]) {
    if (boldPhrases.length === 0) return text;
    const parts: (string | { bold: string })[] = [];
    let remaining = text;
    for (const phrase of boldPhrases) {
      const idx = remaining.indexOf(phrase);
      if (idx !== -1) {
        if (idx > 0) parts.push(remaining.slice(0, idx));
        parts.push({ bold: phrase });
        remaining = remaining.slice(idx + phrase.length);
      }
    }
    if (remaining) parts.push(remaining);
    return parts.map((part, i) =>
      typeof part === "string" ? (
        <span key={i}>{part}</span>
      ) : (
        <span key={i} className="text-white font-semibold">{part.bold}</span>
      )
    );
  }

  return (
    <div
      ref={cardRef}
      className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-8 lg:gap-12 items-center py-14 md:py-20"
    >
      {/* Text */}
      <div className="case-text">
        <h3
          className="mb-4 leading-tight"
          style={{
            fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
            fontWeight: 500,
            fontSize: "28px",
            whiteSpace: "pre-line",
          }}
        >
          {study.title}
        </h3>
        <p className="text-gray-400 text-[14px] leading-[1.7] mb-1.5">
          {renderText(study.description, study.boldPhrases)}
        </p>
        {study.extraParagraph && (
          <p className="text-gray-400 text-[14px] leading-[1.7] mb-1.5">
            {renderText(study.extraParagraph, study.boldPhrases)}
          </p>
        )}
        {/* <a
          href="#"
          className="inline-flex items-center gap-2 text-white text-sm font-medium mt-5 hover:text-blue-400 transition-colors group"
        >
          Read case study
          <span
            className="relative inline-flex items-center justify-center flex-shrink-0"
            style={{ width: "32px", height: "32px" }}
          >
            <Image
              src="/Circle.png"
              alt=""
              width={89}
              height={89}
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
            <svg
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 24 24"
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a> */}
      </div>

      {/* Image */}
      <div className="case-image">
        <div
          className="relative rounded-2xl overflow-hidden border border-white/[0.06] ml-auto"
          style={{ width: "752.06px", height: "574.21px", maxWidth: "100%" }}
        >
          <Image
            src={study.image}
            alt={study.title}
            width={1400}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section className="pt-[130px] px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {caseStudies.map((study, i) => (
        <CaseCard key={study.title} study={study} index={i} />
      ))}
    </section>
  );
}
