"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

interface Capability {
  eyebrow?: string;
  heading: string;
  label: string;
  col1: string[];
  col2: string[];
  image: string;
  imageWidth: string;
  imageHeight: string;
}

const capabilities: Capability[] = [
  {
    eyebrow: "Capabilities",
    heading: "Enterprise Solutions",
    label: "Operations & Reporting",
    col1: [
      "Enterprise System Modernization",
      "Platform Integration",
      "Data Synchronization",
      "Workflow Integration",
      "Governance & Access Control",
    ],
    col2: ["Operational Reporting"],
    image: "/Es.png",
    imageWidth: "601px",
    imageHeight: "492.551px",
  },
  {
    heading: "AI & Innovation",
    label: "AI & Intelligent Systems",
    col1: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "OCR & Spatial Intelligence",
      "Workflow Automation",
    ],
    col2: [
      "IoT & Connected Systems",
      "Voice & Language Technology",
      "AI Audit & Deployment",
    ],
    image: "/Aii.png",
    imageWidth: "548.441px",
    imageHeight: "412.761px",
  },
  {
    heading: "UI/UX",
    label: "UX Strategy & Design",
    col1: [
      "Product Discovery",
      "User Journey Mapping",
      "UX Architecture",
      "Wireframing & Prototyping",
      "Usability Reviews",
    ],
    col2: ["UI Design Systems"],
    image: "/uIux.png",
    imageWidth: "601px",
    imageHeight: "472px",
  },
  {
    heading: "Platform Development",
    label: "Services",
    col1: [
      "Web Platforms",
      "Mobile Applications",
      "Backend & API Development",
      "Cloud & DevOps",
      "Quality Assurance",
    ],
    col2: [
      "Post-Launch Support",
      "Digital Presence Management",
      "Cybersecurity",
    ],
    image: "/Pd.png",
    imageWidth: "601px",
    imageHeight: "472px",
  },
];

function CapabilityBlock({ cap }: { cap: Capability }) {
  return (
    <div className="capability-block">
      {/* Heading */}
      <div className="cap-heading text-center">
        {cap.eyebrow && (
          <p className="text-[#9a9aa0] text-sm mb-3">{cap.eyebrow}</p>
        )}
        <h2
          style={{
            color: "#F4F4F6",
            textAlign: "center",
            fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
            fontSize: "clamp(38px, 5.3vw, 75px)",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "94.08%",
          }}
        >
          {cap.heading}
        </h2>
        <p className="mt-4 text-[#737373] text-sm leading-relaxed max-w-[420px] mx-auto">
          Selected from a thirteen-year portfolio. Complex, operational, and
          built to be extended.
        </p>
      </div>

      {/* Content row */}
      <div className="cap-row grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-12 items-center mt-10 md:mt-16">
        {/* Image */}
        <div>
          <Image
            src={cap.image}
            alt={cap.heading}
            width={1280}
            height={1050}
            className="object-contain"
            style={{
              width: cap.imageWidth,
              maxWidth: "100%",
              height: "auto",
              aspectRatio: `${parseFloat(cap.imageWidth)} / ${parseFloat(cap.imageHeight)}`,
            }}
          />
        </div>

        {/* Details */}
        <div>
          <div className="text-white text-[15px] font-medium mb-5">
            {cap.label}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            <ul className="space-y-3">
              {cap.col1.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[#9a9aa0] text-[13px] leading-snug">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[#9a9aa0] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {cap.col2.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[#9a9aa0] text-[13px] leading-snug">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[#9a9aa0] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* <a
            href="/contact"
            className="inline-flex items-center gap-2.5 mt-10 text-white text-[13px] font-medium rounded-full px-6 py-3 transition-colors hover:bg-blue-600"
            style={{
              background: "rgba(47, 124, 255, 0.16)",
              border: "1px solid rgba(47, 124, 255, 0.45)",
            }}
          >
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default function ServiceCapabilities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".capability-block").forEach((block) => {
        gsap.from(block.querySelector(".cap-heading"), {
          y: 32,
          opacity: 0,
          scrollTrigger: {
            trigger: block,
          },
        });
        gsap.from(block.querySelector(".cap-row"), {
          y: 32,
          opacity: 0,
          delay: 0.15,
          scrollTrigger: {
            trigger: block,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
        className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-[100px] pb-[100px] pt-[120px] md:gap-[180px] md:pb-[180px] md:pt-[200px]"
    >
      {capabilities.map((cap) => (
        <CapabilityBlock key={cap.heading} cap={cap} />
      ))}
    </section>
  );
}
