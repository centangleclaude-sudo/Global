import type { ReactNode } from "react";

/**
 * Renders copy that contains bracketed blanks, marking each one so it is
 * visible on the page and impossible to ship by accident.
 * Every blank is catalogued in report.md.
 */
export function Ph({ children }: { children: ReactNode }) {
  return <span className="ph">{children}</span>;
}

const BLANK = /(\[[^\]]*\])/g;

/** Splits a string on [bracketed] runs and wraps each in <Ph>. */
export function Copy({ text }: { text: string }) {
  return (
    <>
      {text.split(BLANK).map((part, i) =>
        BLANK.test(part) && part.startsWith("[") ? <Ph key={i}>{part}</Ph> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

/**
 * A heading split into masked lines so GSAP can wipe them up from below.
 * Lines are authored, not measured at runtime — no layout thrash, no flash.
 */
export function Lines({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <span data-line className="block">
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}

/** The mono section index, beside the heading rather than floating above it. */
export function Kicker({ children }: { children: ReactNode }) {
  return <p className="kicker">{children}</p>;
}
