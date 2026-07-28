"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const awards = [
  { title: "Excellence Award", subtitle: "Tecbehemoths Global awards", year: "2026", image: "/b1.png" },
  { title: "Wordpress Winner", subtitle: "Tec behemoths awards", year: "2026", image: "/b2.png" },
  { title: "Top SMM Company", subtitle: "Tec behemoths awards", year: "2026", image: "/b3.png" },
];

const testimonials = [
  {
    name: "Zain Rahman",
    role: "Project Manager SEED Adam Smith International Pakistan",
    rating: "5.0",
    text: "While working with Centangle Interactive, we found them technically sound, easy to reach, and client-focused…",
  },
  {
    name: "Talha Chishti",
    role: "Head of Society · British High Commission",
    rating: "5.0",
    text: "I am delighted to share my experience with Centangle Interactive Pvt. Ltd. The team's professionalism and unwavering dedication…",
  },
  {
    name: "Sajid Maqsood",
    role: "IT Officer · The World Bank",
    rating: "5.0",
    text: "Centangle has been exceptional! Their responsive and professional approach exceeded our expectations…",
  },
  {
    name: "Fayyaz Khan",
    role: "Program Officer Administration SGAFP",
    rating: "5.0",
    text: "SGAFP found Centangle Interactive to be thoroughly professional, customer-oriented…",
  },
];

function AwardsHeading({ className = "" }: { className?: string }) {
  return (
    <h2
      className={`text-center text-[#111114] max-w-[980px] mx-auto ${className}`}
      style={{
        fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
        fontWeight: 600,
        fontSize: "clamp(38px, 5.3vw, 75px)",
        lineHeight: 1.15,
      }}
    >
      Recognition
    </h2>
  );
}

export default function AwardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".awards-heading").forEach((el) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          scrollTrigger: {
            trigger: el,
          },
        });
      });

      gsap.from(".award-row", {
        y: 32,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".awards-list",
        },
      });

      gsap.from(".award-highlight", {
        y: 32,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".awards-highlights",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-[110px] md:pt-[200px] pb-20 md:pb-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* First block: heading + award rows */}
      <div className="awards-heading">
        <AwardsHeading />
      </div>

      <div className="awards-list flex flex-col items-center mt-[70px] md:mt-[130px]" style={{ gap: "30px" }}>
        {awards.map((award, i) => (
          <div
            key={i}
            className="award-row w-full max-w-[1120.451px] flex flex-col lg:flex-row items-center justify-center rounded-[15px] px-6 py-8 lg:py-3 lg:h-[225.41px]"
            style={{
              gap: "clamp(24px, 6vw, 121px)",
              border: "0.7px solid #DFDFE1",
              background: "#ECECEE",
            }}
          >
            {/* Text frame — columns are fluid so the three rows stay aligned at every width */}
            <div
              className="flex flex-col lg:flex-row items-center text-center lg:text-left"
              style={{ gap: "clamp(10px, 5vw, 107px)" }}
            >
              <span
                className="lg:flex-shrink-0 lg:w-[clamp(180px,20vw,252px)]"
                style={{
                  color: "#030305",
                  fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(20px, 2vw, 26px)",
                }}
              >
                {award.title}
              </span>
              <span
                className="lg:flex-shrink-0 lg:w-[clamp(150px,17vw,212px)]"
                style={{
                  color: "#030305",
                  fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                }}
              >
                {award.subtitle}
              </span>
              <span
                style={{
                  color: "#030305",
                  fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(20px, 2vw, 26px)",
                }}
              >
                {award.year}
              </span>
            </div>

            {/* Award certificate image */}
            <div
              className="w-[144px] h-[170px] lg:w-[170px] lg:h-[201px]"
              style={{
                flexShrink: 0,
                borderRadius: "7px",
                overflow: "hidden",
              }}
            >
              <Image
                src={award.image}
                alt={award.title}
                width={340}
                height={402}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Second block: heading + three highlight columns */}
      <div className="awards-heading mt-[110px] md:mt-[200px]">
        <p className="text-center text-[#9a9aa0] text-sm mb-4">Testimonial</p>
        <h2
          className="text-center text-[#111114] max-w-[980px] mx-auto"
          style={{
            fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(38px, 5.3vw, 75px)",
            lineHeight: 1.15,
          }}
        >
          What clients say
        </h2>
      </div>

      <div className="awards-highlights mt-[70px] md:mt-[130px] overflow-hidden">
        <div className="testimonial-track flex" style={{ width: "max-content" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="award-highlight flex-shrink-0"
              style={{
                display: "flex",
                width: "min(409px, 82vw)",
                minHeight: "329px",
                marginRight: "30px",
                padding: "clamp(24px, 5vw, 40px) clamp(22px, 5vw, 39px)",
                flexDirection: "column",
                // Top-aligned, not centred: centring lets each card find its own
                // middle, so names drift out of line whenever a quote is shorter.
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "clamp(32px, 9vw, 109px)",
                borderRadius: "30.72px",
                border: "0.7px solid #DFDFE1",
              }}
            >
              {/* Name + role */}
              <div>
                <div
                  className="text-[#111114]"
                  style={{
                    fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {t.name}
                </div>
                {/* Reserves two lines so a one-line role still leaves the
                    rating below it at the same height across every card. */}
                <div className="text-[#9a9aa0] text-[13px]" style={{ minHeight: "3.1em" }}>
                  {t.role}
                </div>
              </div>

              {/* Rating + review */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[#111114]"
                    style={{
                      fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "clamp(34px, 9vw, 48px)",
                      lineHeight: 1,
                    }}
                  >
                    {t.rating}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="17" height="17" viewBox="0 0 24 24" fill="#E0A800">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[#111114] text-[15px] leading-[1.55]">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
