"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const awards = [
  { title: "Excellence Award", subtitle: "Tecbehemoths Global awards", year: "2026", image: "/b1.png" },
  { title: "Wordpress Winner", subtitle: "Tec behemoths awards", year: "2026", image: "/b2.png" },
  { title: "Top SMM Company", subtitle: "Tec behemoths awards", year: "2026", image: "/b3.png" },
];

const testimonials = [
  {
    name: "Christopher",
    role: "CEO",
    rating: "5.0",
    avatar: "/darkp.png",
    text: "An incredible team that goes above and beyond. They listened carefully to our goals and delivered a solution…",
  },
  {
    name: "Christopher",
    role: "CEO",
    rating: "5.0",
    avatar: "/darkp.png",
    text: "An incredible team that goes above and beyond. They listened carefully to our goals and delivered a solution…",
  },
  {
    name: "Christopher",
    role: "CEO",
    rating: "5.0",
    avatar: "/darkp.png",
    text: "An incredible team that goes above and beyond. They listened carefully to our goals and delivered a solution…",
  },
  {
    name: "Christopher",
    role: "CEO",
    rating: "5.0",
    avatar: "/darkp.png",
    text: "An incredible team that goes above and beyond. They listened carefully to our goals and delivered a solution…",
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
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.from(".award-row", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".awards-list",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".award-highlight", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".awards-highlights",
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-[200px] pb-28 px-6 md:px-12 max-w-6xl mx-auto">
      {/* First block: heading + award rows */}
      <div className="awards-heading">
        <AwardsHeading />
      </div>

      <div className="awards-list flex flex-col items-center mt-[130px]" style={{ gap: "30px" }}>
        {awards.map((award, i) => (
          <div
            key={i}
            className="award-row"
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "1120.451px",
              height: "225.41px",
              padding: "12px 24px",
              justifyContent: "center",
              alignItems: "center",
              gap: "121px",
              borderRadius: "15px",
              border: "0.7px solid #DFDFE1",
              background: "#ECECEE",
            }}
          >
            {/* Text frame — 107px between the three texts; fixed column widths keep rows aligned */}
            <div className="flex items-center" style={{ gap: "107px" }}>
              <span
                style={{
                  width: "252px",
                  flexShrink: 0,
                  color: "#030305",
                  fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "26px",
                }}
              >
                {award.title}
              </span>
              <span
                style={{
                  width: "212px",
                  flexShrink: 0,
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
                  fontSize: "26px",
                }}
              >
                {award.year}
              </span>
            </div>

            {/* Award certificate image */}
            <div
              style={{
                width: "170px",
                height: "201px",
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
      <div className="awards-heading mt-[200px]">
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

      <div className="awards-highlights mt-[130px] overflow-hidden">
        <div className="testimonial-track flex" style={{ width: "max-content" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="award-highlight flex-shrink-0"
              style={{
                display: "flex",
                width: "409px",
                height: "329px",
                marginRight: "30px",
                padding: "40px 39px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "109px",
                borderRadius: "30.72px",
                border: "0.7px solid #DFDFE1",
              }}
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
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
                  <div className="text-[#9a9aa0] text-[13px]">{t.role}</div>
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
                      fontSize: "48px",
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
