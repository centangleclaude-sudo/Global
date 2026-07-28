"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

interface Project {
  title: string;
  tags: string[];
  description: string;
  image: string | null;
}

const projects: Project[] = [
  {
    title: "US Industrial · Refinery\nTurnaround Management",
    tags: ["Web design", "Web design & development"],
    description:
      "Built from the ground up, EZTRAK integrates SAP and Primavera to manage complex refinery turnarounds across multiple sites, with AI capabilities in development.",
    image: "/Eztrak.png",
  },
  {
    title: "US Industrial · Refinery\nTurnaround Management",
    tags: ["Web design", "Web design & development"],
    description:
      "Built for a provincial government, the platform uses AI and vehicle-mounted cameras to detect potholes, assess road damage, and catalogue assets automatically nationwide.",
    image: "/Rams.png",
  },
  {
    title: "Federal Government ·\nNational Employment",
    tags: ["Web design", "Web design & development"],
    description:
      "National employment platform built with React Native and web, connecting young people to jobs, skills, and opportunities, reaching over one million registered users.",
    image: "/rehnuma.png",
  },
  {
    title: "British Council ·\nEd-Tech",
    tags: ["Web design", "Web design & development"],
    description:
      "Ed-tech platform for the British Council's DICE program, delivering interactive learning, discussion forums, and course management within a ten-day design sprint.",
    image: "/dice.png",
  },
  {
    title: "Development Sector ·\nMEAL Management",
    tags: ["Web design", "Web design & development"],
    description:
      "CARE International in Pakistan (CIP) empowers vulnerable communities through localized solutions for climate and gender justice. To enhance its MEAL initiatives, CIP developed a user-friendly MIS to streamline tracking and reporting.",
    image: "/meal Mis.png",
  },
  {
    title: "Ignite / MoIT · Assistive\nTechnology",
    tags: ["Web design", "Web design & development"],
    description:
      "Most Urdu text-to-speech tools either don't exist or aren't reliable. We trained a custom Piper neural voice, integrated it with NVDA, and delivered an offline-first solution in Urdu and English.",
    image: "/Technology.png",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <a href="/coming-soon" className="project-card group block">
      {/* Image */}
      <div
        className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#16161c]"
        style={{ aspectRatio: "470 / 330" }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title.replace(/\n/g, " ")}
            width={940}
            height={660}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full bg-[#1a1a20]" />
        )}

        {/* View Project — appears on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(3, 3, 5, 0.15)" }}
        >
          <span
            className="flex items-center justify-center text-white text-[12px] font-medium rounded-full"
            style={{
              width: "92px",
              height: "92px",
              background: "rgba(110, 152, 255, 0.55)",
              backdropFilter: "blur(6px)",
            }}
          >
            View Project
          </span>
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-white mt-6"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(26px, 5.5vw, 42px)",
          lineHeight: 1.3,
          whiteSpace: "pre-line",
        }}
      >
        {project.title}
      </h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[#b3b3b8] text-[11px] rounded-full px-3 py-1"
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-[#9a9aa0] text-[13px] leading-[1.7] mt-4 max-w-[440px]">
        {project.description}
      </p>
    </a>
  );
}

export default function ProjectsGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
        gsap.from(card, {
          y: 32,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-12 max-w-[1200px] mx-auto pb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
