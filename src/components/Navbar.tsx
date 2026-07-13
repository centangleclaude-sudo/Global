"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Logo from "@/components/Logo";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div
        style={{
          display: "inline-flex",
          padding: "4px 6px 4px 10px",
          alignItems: "center",
          gap: "14px",
          borderRadius: "59px",
          border: "1px solid rgba(255, 255, 255, 0.03)",
          background: "linear-gradient(180deg, rgba(24, 25, 29, 0.30) 0%, rgba(22, 22, 26, 0.82) 100%)",
          boxShadow: "0 20px 50px 0 rgba(0, 0, 0, 0.35)",
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6 text-[13px] text-gray-300">
          <a href="#" className="hover:text-white transition-colors whitespace-nowrap">About Us</a>
          <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Solutions</a>
          <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Cases</a>
          <a href="#" className="hover:text-white transition-colors whitespace-nowrap">Resources</a>
        </div>

        {/* Contact button */}
        <a
          href="#"
          className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors whitespace-nowrap flex-shrink-0"
        >
          Contact
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
