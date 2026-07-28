"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { submitForm } from "@/lib/submitForm";

type Status = "idle" | "sending" | "sent" | "error";

export default function ComingSoon() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".cs-title", { y: 32, opacity: 0 })
        .from(".cs-sub", { y: 32, opacity: 0 }, "-=0.5")
        .from(".cs-form", { y: 32, opacity: 0 }, "-=0.4");
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
      subject: "New subscriber from centangleglobal.com",
      from_name: "Centangle Global website",
      email,
      message: `Newsletter signup: ${email}`,
    });

    if (result.ok) {
      setStatus("sent");
      setEmail("");
    } else {
      setStatus("error");
      setError(result.error);
    }
  }

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
          fontSize: "clamp(40px, 10.5vw, 160px)",
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
        We&rsquo;re working hard behind the scenes to bring this to life. Leave
        your email and we&rsquo;ll let you know the moment it&rsquo;s live.
      </p>

      <form
        className="cs-form mt-12 flex flex-col sm:flex-row items-center gap-4 w-full max-w-[680px]"
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

        <label className="flex-1 w-full">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your e-mail address"
            className="w-full placeholder:text-[#8a8a90] text-white"
            style={{
              background: "#1a1a1d",
              borderRadius: "999px",
              padding: "18px 28px",
              fontSize: "16px",
              border: "none",
              outline: "none",
            }}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="text-white font-medium cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto flex-shrink-0"
          style={{
            background: "#FF4F26",
            borderRadius: "999px",
            padding: "18px 40px",
            fontSize: "16px",
            border: "none",
          }}
        >
          {status === "sending" ? "Sending…" : "Notify me"}
        </button>
      </form>

      <p
        role="status"
        aria-live="polite"
        className={`mt-5 text-[14px] min-h-[20px] ${
          status === "error" ? "text-[#ff8a7a]" : "text-[#7fb0ff]"
        }`}
      >
        {status === "sent" && "You’re on the list — thanks!"}
        {status === "error" && error}
      </p>
    </section>
  );
}
