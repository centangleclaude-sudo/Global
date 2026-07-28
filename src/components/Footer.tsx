"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const columns = [
  {
    heading: "About",
    links: [
      // TODO: no pages exist for these three yet.
      { label: "Who We Are", href: "/coming-soon" },
      { label: "Careers", href: "/coming-soon" },
      { label: "Our Leadership", href: "/coming-soon" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
  {
    heading: "Cases",
    links: [
      { label: "EZTRAK", href: "/coming-soon" },
      { label: "RAMS", href: "/coming-soon" },
      { label: "DYH", href: "/coming-soon" },
      { label: "DICE", href: "/coming-soon" },
      { label: "Ignite", href: "/coming-soon" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Custom Software Development", href: "/services" },
      { label: "Staff Augmentation", href: "/services" },
      { label: "AI Development", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Legal Disclaimer", href: "/terms#disclaimer" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const socials = {
  facebook: { url: "https://facebook.com/centangleglobal", label: "Facebook" },
  behance: { url: "https://www.behance.net/centangle", label: "Behance" },
  instagram: { url: "https://instagram.com/centangleglobal", label: "Instagram" },
  linkedin: { url: "https://www.linkedin.com/company/centangleglobal", label: "LinkedIn" },
  x: { url: "https://x.com/centangleglobal", label: "X" },
} as const;

function SocialIcon({ type }: { type: keyof typeof socials }) {
  const { url, label } = socials[type];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className="flex items-center justify-center rounded-full transition-colors hover:border-white/40"
      style={{
        width: "52px",
        height: "52px",
        border: "1px solid rgba(255,255,255,0.15)",
        background: "#0d0d10",
      }}
    >
      {type === "facebook" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99C18.34 21.13 22 16.99 22 12z" />
        </svg>
      )}
      {type === "behance" && (
        <span className="text-white font-semibold" style={{ fontSize: "15px" }}>
          Bē
        </span>
      )}
      {type === "instagram" && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="#fff" stroke="none" />
        </svg>
      )}
      {type === "linkedin" && (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      )}
      {type === "x" && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
          <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
        </svg>
      )}
    </a>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-inner > *", {
        y: 32,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: {
          trigger: footerRef.current,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{ background: "#050507" }}>
      <div className="footer-inner pt-20 pb-8 px-6 md:px-[79px]">
        {/* The email block plus three link columns need ~1100px before they can
            sit side by side, so the split happens at xl and the gap is fluid. */}
        <div className="flex flex-col xl:flex-row gap-14 xl:gap-[clamp(80px,12vw,250px)]">
          {/* Left: email + socials */}
          <div>
            <a
              href="mailto:contact@centangleglobal.com"
              className="text-white"
              style={{
                display: "block",
                lineHeight: 1,
                fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(18px, 5vw, 34px)",
              }}
            >
              contact@centangleglobal.com
            </a>
            <div className="flex flex-wrap gap-3 sm:gap-4" style={{ marginTop: "34px" }}>
              <SocialIcon type="facebook" />
              <SocialIcon type="behance" />
              <SocialIcon type="instagram" />
              <SocialIcon type="linkedin" />
              <SocialIcon type="x" />
            </div>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_auto_auto] gap-y-10 gap-x-10 lg:gap-x-[90px]">
            {columns.map((col) => (
              <div key={col.heading}>
                <div className="text-white text-[15px] font-medium mb-5">{col.heading}</div>
                <ul className="space-y-3.5">
                  {col.links.map((link) => (
                    <li key={`${col.heading}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-[#737373] hover:text-white transition-colors text-[14px]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar — text left, legal links right & vertically centered against it */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/[0.08] mt-16 pt-7">
          <div className="flex flex-col items-start text-left gap-2.5">
            <span className="text-[#737373] text-[13px]">
              Centangle Global is US-registered, with delivery teams in Pakistan.
            </span>
            <span className="text-[#737373] text-[13px]">
              © 2026 Centangle Global LLC. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-start md:justify-end gap-x-2 gap-y-1">
            {legalLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-2">
                <a
                  href={link.href}
                  className="text-[#737373] hover:text-white transition-colors text-[13px]"
                >
                  {link.label}
                </a>
                {i < legalLinks.length - 1 && (
                  <span className="text-[#3a3a3e] text-[13px]">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
