"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const inputStyle: React.CSSProperties = {
  background: "#ECECEE",
  borderRadius: "10px",
  padding: "15px 18px",
  fontSize: "14px",
  color: "#030305",
  width: "100%",
  border: "none",
  outline: "none",
};

export default function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".contact-hero-title", { y: 60, opacity: 0, duration: 1 })
        .from(".contact-hero-sub", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".contact-form", { y: 40, opacity: 0, duration: 0.9 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center px-6 pt-[180px] pb-[120px]"
    >
      <h1
        className="contact-hero-title text-center text-[#030305]"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(48px, 8.24vw, 118.58px)",
          lineHeight: "112.8%",
        }}
      >
        Let&rsquo;s Talk
      </h1>

      <p className="contact-hero-sub mt-6 text-center text-[#737373] text-sm md:text-[15px] leading-relaxed max-w-[400px]">
        We&rsquo;d love to learn more about you and what we can design and
        build together.
      </p>

      {/* Form */}
      <form
        className="contact-form w-full max-w-[880px] mt-14"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="tel" placeholder="Phone" style={inputStyle} />
          <div className="relative">
            <select
              defaultValue=""
              style={{ ...inputStyle, appearance: "none", color: "#030305", cursor: "pointer" }}
            >
              <option value="" disabled hidden>
                Budget not defined
              </option>
              <option value="undefined">Budget not defined</option>
              <option value="5-10k">$5k – $10k</option>
              <option value="10-25k">$10k – $25k</option>
              <option value="25-50k">$25k – $50k</option>
              <option value="50k+">$50k+</option>
            </select>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            >
              <path d="M6 9l6 6 6-6" stroke="#030305" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="md:col-span-2 resize-none"
            style={inputStyle}
          />
        </div>

        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="text-white text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              background: "#141216",
              borderRadius: "999px",
              padding: "13px 34px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
