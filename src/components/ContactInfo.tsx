"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";

function InfoRow({
  icon,
  children,
}: {
  icon: "phone" | "mail" | "clock";
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="flex items-center justify-center flex-shrink-0 rounded-full"
        style={{ width: "36px", height: "36px", border: "1px solid rgba(3,3,5,0.25)" }}
      >
        {icon === "phone" && (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#030305" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        )}
        {icon === "mail" && (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#030305" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 6L2 7" />
          </svg>
        )}
        {icon === "clock" && (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#030305" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2.5 2.5M9 2h6" />
          </svg>
        )}
      </span>
      <span className="text-[#030305] text-[15px]">{children}</span>
    </div>
  );
}

export default function ContactInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-info-left", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(".contact-info-image", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#EFEFEF" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: info */}
          <div className="contact-info-left">
            <h2
              className="text-[#030305] mb-6"
              style={{
                fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(28px, 3vw, 42px)",
              }}
            >
              Contact Info
            </h2>

            <p className="text-[#737373] text-[16px] leading-[1.6] mb-10">
              3rd Floor, CIS Technology Park,
              <br />
              Shahra-e-Jamhuriat, G-5/2,
              <br />
              Islamabad, Pakistan
            </p>

            <div className="flex flex-col gap-6">
              <InfoRow icon="phone">+92-51-2825565</InfoRow>
              <InfoRow icon="mail">hello@centangle.com</InfoRow>
              <InfoRow icon="clock">Mon – Fri (10 am – 6 pm PKT)</InfoRow>
            </div>
          </div>

          {/* Right: building photo */}
          <div className="contact-info-image">
            <div
              className="w-full rounded-3xl overflow-hidden"
              style={{ aspectRatio: "590 / 775", maxHeight: "620px" }}
            >
              <Image
                src="/Cis.png"
                alt="CIS Technology Park"
                width={1180}
                height={1550}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
