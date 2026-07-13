"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const faqs = [
  {
    question: "Do you build custom software?",
    answer:
      "Yes — we design and build custom software end to end, from discovery and UX through development, deployment, and ongoing support. Every solution is architected around your business, not adapted from a template.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes — we design and build custom software end to end, from discovery and UX through development, deployment, and ongoing support. Every solution is architected around your business, not adapted from a template.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes — we design and build custom software end to end, from discovery and UX through development, deployment, and ongoing support. Every solution is architected around your business, not adapted from a template.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes — we design and build custom software end to end, from discovery and UX through development, deployment, and ongoing support. Every solution is architected around your business, not adapted from a template.",
  },
];

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
        className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer group"
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
        <p className="text-gray-400 text-[14px] leading-[1.75] pb-6 pr-10 max-w-2xl">{answer}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-title", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-title",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".faq-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 md:px-12 max-w-4xl mx-auto">
      <h2
        className="faq-title text-center text-white mb-14 whitespace-nowrap"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(38px, 5.3vw, 75px)",
          lineHeight: 1.2,
        }}
      >
        Questions and answers
      </h2>

      <div className="faq-list">
        {faqs.map((faq, i) => (
          <FaqItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
