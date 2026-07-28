"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const steps = [
  {
    number: "01",
    title: "Initial Review",
    body: "We review the context, requirements, and operational environment shared in your submission.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-heading", {
        y: 32,
        opacity: 0,
        scrollTrigger: {
          trigger: ".process-heading",
        },
      });

      gsap.from(".process-card", {
        y: 32,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".process-cards",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#030305" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-28 md:py-36">
        <div className="process-heading text-center">
          <p className="text-[#9a9aa0] text-sm mb-4">How the discussion begins</p>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(38px, 5.3vw, 75px)",
              lineHeight: 1.15,
            }}
          >
            Clear. Fair. Fast.
          </h2>
        </div>

        <div className="process-cards flex justify-center mt-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="process-card"
              style={{
                width: "100%",
                maxWidth: "600px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.06)",
                background:
                  "radial-gradient(120% 120% at 50% 0%, rgba(37, 62, 128, 0.45) 0%, rgba(10, 14, 26, 0.9) 55%, #05060a 100%)",
                padding: "clamp(28px, 6vw, 44px) clamp(24px, 5.5vw, 40px)",
              }}
            >
              <div
                className="text-white"
                style={{
                  fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "26px",
                }}
              >
                {step.number}
              </div>
              <div
                className="text-white mt-4"
                style={{
                  fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(24px, 5vw, 30px)",
                }}
              >
                {step.title}
              </div>
              <p className="text-[#9a9aa0] text-[14px] leading-[1.7] mt-4 max-w-[420px]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
