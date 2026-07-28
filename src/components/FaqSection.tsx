"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

const faqs = [
  {
    question: "What does Centangle Global do?",
    answer:
      "Centangle Global is a US-registered software engineering company that builds custom web platforms, mobile applications, and AI-integrated systems for SMEs and startups in the US and Europe. We also provide staff augmentation, embedding dedicated engineers into existing product teams.",
  },
  {
    question: "What is the difference between staff augmentation and hiring in-house?",
    answer:
      "Staff augmentation gives you dedicated engineers who work within your team, your processes, and your direction, without the overhead of recruiting, onboarding, and retaining full-time hires. You scale the team up or down as the work requires. The engineers are ours to manage administratively and yours to direct technically.",
  },
  {
    question: "How much does custom software development cost?",
    answer:
      "It depends on scope clarity, domain complexity, whether the project is greenfield or inherits existing systems, and the seniority mix the work requires. We price at a significant advantage to comparable US and European agency rates, and every proposal is scoped through a real conversation rather than a rate sheet.",
  },
  {
    question: "Where is your team located?",
    answer:
      "Centangle Global is US-registered. Our delivery team is based in Islamabad, Pakistan, and has been building software since 2013. EU working hours are covered comfortably; for US clients we sync meetings to your time zone, with fuller overlap arranged per engagement.",
  },
  {
    question: "How do your engineers integrate with our existing team?",
    answer:
      "They join your standups, use your tools, and follow your processes. A senior lead anchors every engagement, and every project has a project manager with 12 or more years of experience. Engineers communicate with your team directly.",
  },
  {
    question: "Do you build AI products?",
    answer:
      "We build applied AI inside production systems: computer vision for road asset detection, neural text-to-speech trained from scratch, and AI features in active client projects. We are not an AI research lab, and we do not claim capability ahead of delivery.",
  },
  {
    question: "How do we start?",
    answer:
      "Describe the problem. What you are building, where you are stuck, or what engineering capacity you need. We will tell you honestly whether we are the right team for it, and scope from there.",
  },
];

const INITIAL_COUNT = 4;

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!answerRef.current) return;
    gsap.to(answerRef.current, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.5,
      ease: "power3.inOut",
    });
    gsap.to(iconRef.current, {
      rotate: isOpen ? 45 : 0,
      duration: 0.4,
      ease: "power3.inOut",
    });
  }, [isOpen]);

  return (
    <div className="faq-item border-b border-white/[0.08]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 sm:gap-6 py-6 text-left cursor-pointer group"
      >
        <span
          className="text-white group-hover:text-blue-400 transition-colors"
          style={{
            fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
            fontWeight: 500,
            fontSize: "17px",
          }}
        >
          {question}
        </span>
        <svg
          ref={iconRef}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="flex-shrink-0 text-gray-400"
        >
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div ref={answerRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <p className="text-gray-400 text-[14px] leading-[1.75] pb-6 pr-0 sm:pr-10 max-w-2xl">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-title", {
        y: 32,
        opacity: 0,
        scrollTrigger: {
          trigger: ".faq-title",
        },
      });

      gsap.from(".faq-item", {
        y: 32,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".faq-list",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-20 md:py-28 px-6 md:px-12 max-w-4xl mx-auto">
      <h2
        className="faq-title text-center text-white mb-14"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(30px, 5.3vw, 75px)",
          lineHeight: 1.2,
        }}
      >
        Questions and answers
      </h2>

      <div className="faq-list">
        {visibleFaqs.map((faq, i) => (
          <FaqItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>

      {!showAll && faqs.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors cursor-pointer"
          >
            Load more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
