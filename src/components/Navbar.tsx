"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, MOTION } from "@/lib/gsap";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/coming-soon/", label: "About us" },
  { href: "/contact/", label: "Contact us" },
];

export default function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const light = variant === "light";

  // Mirrored into a ref so the scroll handler below can read the latest value
  // without being torn down and rebuilt every time the menu toggles.
  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
    });
  }, []);

  // Retract the pill while scrolling down, bring it back on the way up. It
  // floats over content, so on a phone it otherwise sits on top of whatever
  // you scrolled to. `yPercent` keeps clear of the `y` the intro tween writes.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const slide = gsap.quickTo(el, "yPercent", {
      duration: MOTION.duration.fast,
      ease: MOTION.ease.out,
    });

    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      // Never hide the bar while its menu is open, or near the top of the page.
      if (openRef.current || y < 120) {
        slide(0);
      } else if (y > last + 4) {
        slide(-180);
      } else if (y < last - 4) {
        slide(0);
      }
      // The 4px deadzone stops rubber-banding from flickering the bar.

      last = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Slide the mobile panel open/closed
  useEffect(() => {
    if (!panelRef.current) return;
    gsap.to(panelRef.current, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.35,
      ease: "power3.inOut",
    });
  }, [open]);

  // Escape closes the panel; so does crossing back into the desktop layout
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onCross = () => {
      if (mq.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onCross);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onCross);
    };
  }, [open]);

  const surface: React.CSSProperties = light
    ? {
        border: "1px solid #E1E2E3",
        background: "#EEEEEF",
      }
    : {
        border: "1px solid rgba(255, 255, 255, 0.03)",
        background: "linear-gradient(180deg, rgba(24, 25, 29, 0.30) 0%, rgba(22, 22, 26, 0.82) 100%)",
        boxShadow: "0 20px 50px 0 rgba(0, 0, 0, 0.35)",
      };

  // The pill surface is translucent by design, which reads fine as a thin bar
  // but not behind a full drop-down of links — so the panel gets its own.
  const panelSurface: React.CSSProperties = light
    ? {
        border: "1px solid #E1E2E3",
        background: "#F4F4F5",
        boxShadow: "0 24px 60px 0 rgba(0, 0, 0, 0.14)",
      }
    : {
        border: "1px solid rgba(255, 255, 255, 0.07)",
        background: "#0e0e12",
        boxShadow: "0 24px 60px 0 rgba(0, 0, 0, 0.55)",
      };

  // No `display` here — it would beat the `hidden` / `md:hidden` classes below,
  // since inline styles outrank utility classes.
  const pillStyle: React.CSSProperties = {
    padding: "4px 15px",
    alignItems: "center",
    gap: "14px",
    borderRadius: "59px",
    ...surface,
  };

  const linkClass = light
    ? "hover:text-black transition-colors whitespace-nowrap"
    : "hover:text-white transition-colors whitespace-nowrap";

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      {/* ── Desktop: single pill ── */}
      <div className="hidden md:inline-flex" style={pillStyle}>
        <div className="flex-shrink-0">
          <Logo light={light} />
        </div>

        <div
          className={`flex items-center gap-6 text-[13px] ${
            light ? "text-[#4a4a4f]" : "text-gray-300"
          }`}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/contact/"
          className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium px-5 py-2.5 rounded-full flex items-center gap-1.5 transition-colors whitespace-nowrap flex-shrink-0"
        >
          Book a Meeting
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* ── Mobile: logo + hamburger, with a drop-down panel ── */}
      <div className="md:hidden w-full max-w-[420px]">
        <div
          className="flex items-center justify-between"
          style={{ ...pillStyle, padding: "8px 10px 8px 15px", borderRadius: "28px" }}
        >
          <div className="flex-shrink-0">
            <Logo light={light} />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex flex-col items-center justify-center gap-[5px] w-11 h-11 rounded-full cursor-pointer flex-shrink-0"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block h-[2px] w-[20px] rounded-full transition-all duration-300"
                style={{
                  background: light ? "#4a4a4f" : "#e5e5e8",
                  transform: open
                    ? i === 0
                      ? "translateY(7px) rotate(45deg)"
                      : i === 2
                        ? "translateY(-7px) rotate(-45deg)"
                        : "none"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        <div
          id="mobile-nav-panel"
          ref={panelRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <div
            className="mt-2 p-4 flex flex-col gap-1"
            style={{ ...panelSurface, borderRadius: "24px" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-3 rounded-2xl text-[15px] transition-colors ${
                  light
                    ? "text-[#4a4a4f] hover:bg-black/[0.05] hover:text-black"
                    : "text-gray-300 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contact/"
              onClick={() => setOpen(false)}
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-[14px] font-medium px-5 py-3.5 rounded-full flex items-center justify-center gap-1.5 transition-colors"
            >
              Book a Meeting
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
