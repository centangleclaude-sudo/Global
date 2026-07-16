"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function ComingSoon() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".cs-title", { y: 60, opacity: 0, duration: 1 })
        .from(".cs-sub", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".cs-form", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: "#030305" }}
    >
      <h1
        className="cs-title text-white"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(56px, 10.5vw, 160px)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Coming Soon!
      </h1>

      <p
        className="cs-sub mt-6 text-[#d4d4d6] max-w-[680px]"
        style={{ fontSize: "clamp(15px, 1.3vw, 22px)", lineHeight: 1.75 }}
      >
        Subscribe to be the first to know about all the events and get a
        discount on your first order!
      </p>

      <form
        className="cs-form mt-14 flex flex-col sm:flex-row items-center gap-4 w-full max-w-[820px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Please enter you e-mail address"
          className="flex-1 w-full placeholder:text-[#8a8a90] text-white"
          style={{
            background: "#1a1a1d",
            borderRadius: "999px",
            padding: "22px 34px",
            fontSize: "17px",
            border: "none",
            outline: "none",
          }}
        />
        <button
          type="submit"
          className="text-white font-medium cursor-pointer hover:opacity-90 transition-opacity w-full sm:w-auto flex-shrink-0"
          style={{
            background: "#FF4F26",
            borderRadius: "999px",
            padding: "22px 46px",
            fontSize: "17px",
            border: "none",
          }}
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
