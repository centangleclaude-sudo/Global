"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { submitForm } from "@/lib/submitForm";

const inputStyle: React.CSSProperties = {
  background: "#ECECEE",
  borderRadius: "10px",
  padding: "15px 18px",
  fontSize: "16px",
  color: "#030305",
  width: "100%",
  border: "none",
  outline: "none",
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".contact-hero-title", { y: 32, opacity: 0 })
        .from(".contact-hero-sub", { y: 32, opacity: 0 }, "-=0.5")
        .from(".contact-form", { y: 32, opacity: 0 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const data = new FormData(e.currentTarget);

    // Honeypot: a real person never sees this field, so anything in it is a bot.
    // Report success so the bot doesn't learn to work around it.
    if (data.get("botcheck")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    setError("");

    const result = await submitForm({
      subject: "New enquiry from centangleglobal.com",
      from_name: "Centangle Global website",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      budget: String(data.get("budget") ?? "Not specified"),
      message: String(data.get("message") ?? ""),
    });

    if (result.ok) {
      setStatus("sent");
      formRef.current?.reset();
    } else {
      setStatus("error");
      setError(result.error);
    }
  }

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center px-6 pt-[130px] md:pt-[180px] pb-[80px] md:pb-[120px]"
    >
      <h1
        className="contact-hero-title text-center text-[#030305]"
        style={{
          fontFamily: "'Google Sans Flex', 'Google Sans', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(40px, 8.24vw, 118.58px)",
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
        ref={formRef}
        className="contact-form w-full max-w-[880px] mt-14"
        onSubmit={handleSubmit}
      >
        {/* Spam trap — hidden from people and from screen readers alike. */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="block">
            <span className="sr-only">Your name</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Your Name"
              style={inputStyle}
            />
          </label>

          <label className="block">
            <span className="sr-only">Email address</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Email"
              style={inputStyle}
            />
          </label>

          <label className="block">
            <span className="sr-only">Phone number</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="Phone"
              style={inputStyle}
            />
          </label>

          <div className="relative">
            <label className="block">
              <span className="sr-only">Budget</span>
              <select
                name="budget"
                defaultValue=""
                style={{ ...inputStyle, appearance: "none", color: "#030305", cursor: "pointer" }}
              >
                <option value="" disabled hidden>
                  Budget not defined
                </option>
                <option value="Not defined">Budget not defined</option>
                <option value="$5k – $10k">$5k – $10k</option>
                <option value="$10k – $25k">$10k – $25k</option>
                <option value="$25k – $50k">$25k – $50k</option>
                <option value="$50k+">$50k+</option>
              </select>
            </label>
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

          <label className="block md:col-span-2">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Message"
              className="resize-none"
              style={inputStyle}
            />
          </label>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mt-8">
          <p
            role="status"
            aria-live="polite"
            className={`text-[14px] sm:mr-auto ${
              status === "error" ? "text-[#c0392b]" : "text-[#2f7cff]"
            }`}
          >
            {status === "sent" && "Thanks — we’ve got it. We’ll be in touch shortly."}
            {status === "error" && error}
          </p>

          <button
            type="submit"
            disabled={status === "sending"}
            className="text-white text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed self-end sm:self-auto"
            style={{
              background: "#141216",
              borderRadius: "999px",
              padding: "13px 34px",
            }}
          >
            {status === "sending" ? "Sending…" : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
