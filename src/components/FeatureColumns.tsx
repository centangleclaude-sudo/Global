"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const features = [
  {
    title: "The team has depth",
    icon: "/icbox1.png",
    body: "Every project is staffed with senior engineers, designers, and a dedicated project lead — no juniors learning on your budget, no single points of failure.",
  },
  {
    title: "Expert guidance",
    icon: "/icb2.png",
    body: "The people who start your project finish it. Low turnover means the context, decisions, and momentum stay inside your team from kickoff to launch.",
  },
  {
    title: "We speak English",
    icon: "/icb3.png",
    body: "You talk directly to the engineers building your product — no account managers in the middle, no translation layers, no lost requirements.",
  },
  {
    title: "On cost",
    icon: "/icb4.png",
    body: "Senior engineering talent at a fraction of US and European rates, with transparent estimates and no surprise invoices at the end of the month.",
  },
  {
    title: "AI to Pakistan",
    icon: "/icb5.png",
    body: "We bring cutting-edge AI capability to every engagement — from computer vision on government infrastructure to AI features inside enterprise platforms.",
  },
  {
    title: "We Build Long-Term",
    icon: "/icb6.png",
    body: "Most of our clients started with a small engagement and stayed for years. We optimize for the relationship, not the invoice.",
  },
];

export default function FeatureColumns() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fc-heading .word", {
        opacity: 0.1,
        y: 20,
        stagger: 0.03,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fc-heading",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".fc-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fc-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // First three words #030305; the rest #737373
  const headingWords =
    "Experienced engineers deliver transparent partnerships through clear communication, fair pricing, and lasting client trust always.".split(
      " "
    );
  const darkWordCount = 3;

  return (
    <section ref={sectionRef} className="pt-[200px] pb-0 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Heading */}
      <h2
        className="fc-heading text-center max-w-[1000px] mx-auto mb-[130px]"
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
            style={{ color: i < darkWordCount ? "#030305" : "#737373" }}
          >
            {word}
          </span>
        ))}
      </h2>

      {/* Feature boxes — 3 x 2 */}
      <div className="fc-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {features.map((f) => (
          <div
            key={f.title}
            className="fc-item"
            style={{
              display: "flex",
              padding: "40px 39px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              borderRadius: "30.72px",
              border: "0.7px solid #DFDFE1",
            }}
          >
            {/* Icon — 61 x 61 */}
            <Image
              src={f.icon}
              alt=""
              width={61}
              height={61}
              style={{ width: "61px", height: "61px", objectFit: "contain" }}
            />

            <div style={{ marginTop: "35px" }}>
              <h3
                style={{
                  fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                  fontSize: "26px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  color: "#030305",
                }}
              >
                {f.title}
              </h3>
              {/* Underline beneath the heading's first letter */}
              <div
                style={{
                  width: "49.568px",
                  height: "2px",
                  background: "#131111",
                  marginTop: "10px",
                }}
              />
            </div>

            <p
              style={{
                marginTop: "17px",
                color: "#737373",
                fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24.332px",
              }}
            >
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
