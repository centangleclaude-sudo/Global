import Image from "next/image";
import { Copy, Kicker, Lines } from "./Ph";
import { socials } from "@/content/site";
import {
  build,
  faq,
  footer,
  handover,
  hero,
  marquee,
  process,
  site,
  situations,
  start,
  work,
} from "@/content/site";

/* Brand glyphs, drawn rather than pulled from a font, one weight throughout. */
const SOCIAL_PATHS: Record<string, string> = {
  LinkedIn:
    "M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3v5.8h-4V9Z",
  Instagram:
    "M12 4c-2.17 0-2.44.01-3.29.05-.85.04-1.43.17-1.94.37-.53.2-.97.48-1.42.92-.44.45-.72.89-.92 1.42-.2.51-.33 1.09-.37 1.94C4.01 9.56 4 9.83 4 12s.01 2.44.05 3.29c.4.85.17 1.43.37 1.94.2.53.48.97.92 1.42.45.44.89.72 1.42.92.51.2 1.09.33 1.94.37.85.04 1.12.05 3.29.05s2.44-.01 3.29-.05c.85-.04 1.43-.17 1.94-.37.53-.2.97-.48 1.42-.92.44-.45.72-.89.92-1.42.2-.51.33-1.09.37-1.94.04-.85.05-1.12.05-3.29s-.01-2.44-.05-3.29c-.04-.85-.17-1.43-.37-1.94a3.9 3.9 0 0 0-.92-1.42 3.9 3.9 0 0 0-1.42-.92c-.51-.2-1.09-.33-1.94-.37C14.44 4.01 14.17 4 12 4Zm0 1.8c2.14 0 2.39.01 3.23.05.78.03 1.2.16 1.48.27.37.15.64.32.92.6.28.28.45.55.6.92.11.28.24.7.27 1.48.04.84.05 1.09.05 3.23s-.01 2.39-.05 3.23c-.3.78-.16 1.2-.27 1.48-.15.37-.32.64-.6.92-.28.28-.55.45-.92.6-.28.11-.7.24-1.48.27-.84.04-1.09.05-3.23.05s-2.39-.01-3.23-.05c-.78-.03-1.2-.16-1.48-.27a2.5 2.5 0 0 1-.92-.6 2.5 2.5 0 0 1-.6-.92c-.11-.28-.24-.7-.27-1.48C5.81 14.39 5.8 14.14 5.8 12s.01-2.39.05-3.23c.03-.78.16-1.2.27-1.48.15-.37.32-.64.6-.92.28-.28.55-.45.92-.6.28-.11.7-.24 1.48-.27C9.61 5.81 9.86 5.8 12 5.8Zm0 3.1a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm0 1.8a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm4.3-3.15a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z",
  Facebook: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.63A22 22 0 0 0 14.3 3.5c-2.37 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8h3.2Z",
  X: "M17.53 3h3.02l-6.6 7.54L21.7 21h-6.06l-4.75-6.2L5.46 21H2.44l7.06-8.07L2.3 3h6.22l4.29 5.67L17.53 3Zm-1.06 16.2h1.67L7.6 4.72H5.8L16.47 19.2Z",
  WhatsApp:
    "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.05 8.05 0 0 1 2.37 5.73c0 4.47-3.63 8.1-8.1 8.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.19-.31a8.05 8.05 0 0 1-1.24-4.3c0-4.46 3.64-8.09 8.12-8.09Zm-3.1 4.2c-.15 0-.39.06-.6.28-.2.22-.79.77-.79 1.88s.81 2.18.92 2.33c.12.15 1.58 2.42 3.84 3.39.54.23.95.37 1.28.47.54.17 1.03.15 1.42.09.43-.06 1.33-.54 1.52-1.07.19-.53.19-.98.13-1.07-.06-.09-.2-.15-.42-.26-.22-.11-1.33-.66-1.53-.73-.21-.08-.36-.11-.5.11-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.11-.94-.35-1.79-1.11-.66-.59-1.11-1.32-1.24-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.68-1.65-.18-.43-.36-.37-.5-.38h-.42Z",
  Behance:
    "M8.2 6.3c1.9 0 3.4.6 3.4 2.6 0 1.1-.55 1.85-1.5 2.25 1.3.37 1.95 1.35 1.95 2.7 0 2.2-1.75 3.15-3.9 3.15H3V6.3h5.2Zm-.3 4.2c.9 0 1.5-.4 1.5-1.25S8.85 8 7.9 8H5.5v2.5h2.4Zm.15 4.55c1 0 1.7-.42 1.7-1.4 0-1-.6-1.45-1.65-1.45H5.5v2.85h2.55ZM18.6 8.1h-4.4V6.9h4.4v1.2Zm2.4 5.65h-5.7c.08 1.2.8 1.85 1.95 1.85.75 0 1.35-.32 1.6-.95h2c-.42 1.65-1.75 2.5-3.65 2.5-2.5 0-4-1.7-4-4.15 0-2.4 1.6-4.15 3.95-4.15 2.6 0 3.9 1.95 3.85 4.5v.4Zm-5.68-1.35h3.6c-.1-1.1-.75-1.7-1.75-1.7s-1.72.6-1.85 1.7Z",
};
const SocialIcon = ({ name }: { name: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={SOCIAL_PATHS[name]} />
  </svg>
);

const Arrow = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const Aurora = () => (
  <div className="aurora" aria-hidden="true" data-aurora>
    <i className="a1" />
    <i className="a2" />
    <i className="a3" />
  </div>
);

/* ============================== HERO ================================== */
export function Hero() {
  return (
    <section id="hero" className="wrap relative overflow-hidden pb-[clamp(56px,6vw,96px)] pt-[clamp(40px,5vw,72px)]">
      <Aurora />
      <div className="relative z-10">
        <p className="tag" data-hero="tag">
          {site.tagline}
        </p>
        <h1 className="d-xl mt-8 max-w-[15ch]">
          <span className="block overflow-hidden pb-[0.06em]">
            <span data-line className="block">
              {hero.headline[0]}
              <span className="accent">{hero.headline[1]}</span>
            </span>
          </span>
        </h1>
        <p className="mt-8 max-w-[54ch] text-[clamp(17px,1.45vw,20px)] leading-[1.6] text-ink-2" data-hero="sub">
          {hero.sub}
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a href={hero.primary.href} className="btn btn-primary magnetic" data-hero="cta">
            {hero.primary.label}
            <Arrow />
          </a>
          <a href={hero.secondary.href} className="btn btn-ghost magnetic" data-hero="cta">
            {hero.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================= MARQUEE ================================ */
export function Marquee() {
  const set = (key: string) => (
    <div className="flex flex-none items-center" key={key}>
      {marquee.map((m) => (
        <span className="marquee-item" key={key + m}>
          {m}
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee on-ink" aria-hidden="true">
      <div className="marquee-track" data-marquee>
        {set("a")}
        {set("b")}
      </div>
    </div>
  );
}

/* ============================ SITUATIONS ============================== */
export function Situations() {
  return (
    <section id="situations" className="wrap section-pad">
      <Kicker>{situations.kicker}</Kicker>
      <h2 className="d-l mt-4 max-w-[22ch]" data-lines>
        <Lines lines={["What usually brings", "someone here"]} />
      </h2>
      <div className="mt-16 border-t border-rule" data-rv-group>
        {situations.items.map((s) => (
          <div
            key={s.title}
            className="grid gap-4 border-b border-rule py-[clamp(28px,3vw,40px)] min-[820px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] min-[820px]:items-baseline min-[820px]:gap-16"
            data-rv
          >
            <h3 className="max-w-[20ch] font-display text-[clamp(20px,1.85vw,25px)] font-bold leading-[1.3] tracking-[-0.026em]">
              {s.title}
            </h3>
            <p className="max-w-[64ch] text-[17px] leading-[1.62] text-ink-2">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ WHAT WE BUILD =========================== */
export function Services() {
  return (
    <section id="build" className="wrap section-pad">
      <Kicker>{build.kicker}</Kicker>
      <h2 className="d-l mt-4 max-w-[22ch]" data-lines>
        <Lines lines={[build.heading]} />
      </h2>
      <div className="mt-16 grid gap-6 min-[860px]:grid-cols-2 min-[860px]:gap-8" data-rv-group>
        {build.services.map((s) => (
          <div
            key={s.name}
            data-rv
            className={`flex flex-col rounded-[22px] p-[clamp(28px,3vw,44px)] ${
              s.tone === "blue" ? "bg-blue-panel text-white" : "on-ink bg-ink text-on-ink"
            }`}
          >
            <p className={`label ${s.tone === "blue" ? "!text-[rgb(255_255_255/0.75)]" : "!text-orange-lit"}`}>
              {s.label}
            </p>
            <h3 className="mt-6 font-display text-[clamp(26px,2.5vw,36px)] font-bold leading-[1.05] tracking-[-0.032em]">
              {s.name}
            </h3>
            <ul className="mt-12 list-none p-0">
              {s.items.map((i) => (
                <li
                  key={i}
                  className="border-t border-[rgb(255_255_255/0.24)] py-[15px] text-[16.5px] leading-[1.5] last:border-b last:border-b-[rgb(255_255_255/0.24)]"
                >
                  <Copy text={i} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="t-body mt-12">{build.note}</p>
    </section>
  );
}

/* =============================== WORK ================================= */
export function Work() {
  return (
    <section id="work" className="on-ink section-pad">
      <div className="wrap">
        <Kicker>{work.kicker}</Kicker>
        <h2 className="d-l mt-4 max-w-[22ch]" data-lines>
          <span className="block overflow-hidden pb-[0.06em]">
            <span data-line className="block">
              {work.heading[0]}
              <span className="accent">{work.heading[1]}</span>
            </span>
          </span>
        </h2>
        <div className="mt-16 grid gap-6 min-[820px]:grid-cols-3" data-rv-group>
          {work.items.map((w) => (
            <a
              key={w.name}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              data-rv
              className="case flex flex-col overflow-hidden rounded-2xl bg-[#141416] no-underline shadow-[inset_0_0_0_1px_var(--color-rule-ink)]"
            >
              <div className="case-shot relative aspect-3/2 overflow-hidden border-b border-rule-ink bg-[#0E0E10]">
                <Image
                  src={w.image}
                  alt={w.alt}
                  width={1800}
                  height={1207}
                  data-parallax-img
                  className="size-full scale-[1.08] object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-6 pb-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold leading-[1.15] tracking-[-0.03em]">{w.name}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-orange-lit">{w.platform}</span>
                </div>
                <p className="flex-1 text-[15.5px] leading-[1.55] text-on-ink-2">
                  <Copy text={w.body} />
                </p>
                <span className="case-open inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.04em] text-on-ink">
                  Open the site
                  <Arrow size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="t-small mt-12">{work.note}</p>
      </div>
    </section>
  );
}

/* ============================== PROCESS ===============================
   Compact two-column arrangement after the dark comp: heading and note held
   on the left, the seven steps run tight down the right with hollow numerals
   so the index reads as an index rather than competing with the titles. */
export function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden">
      <Aurora />
      <div className="wrap relative z-10">
        <div className="grid gap-12 min-[900px]:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] min-[900px]:items-start min-[900px]:gap-[clamp(48px,5vw,96px)]">
          <div className="min-[900px]:sticky min-[900px]:top-28">
            <Kicker>{process.kicker}</Kicker>
            <h2 className="d-l mt-4" data-lines>
              <Lines lines={process.heading} />
            </h2>
            <p className="t-body mt-6 max-w-[40ch]">{process.lead}</p>
            <div className="note" data-rv>
              <p className="text-[16px] leading-[1.6]">
                <Copy text={process.note} />
              </p>
              <p className="label mt-3 !normal-case !tracking-[0.02em] !text-[12.5px] !leading-[1.55]">
                <Copy text={process.noteMeta} />
              </p>
            </div>
          </div>

          <ol className="steps list-none p-0" data-rv-group>
            {process.steps.map((s, i) => (
              <li className="step" key={s.title} data-rv>
                <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>
                    <Copy text={s.body} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ============================= HANDOVER =============================== */
export function Handover() {
  return (
    <section className="on-ink section-pad">
      <div className="wrap grid items-start gap-12 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[900px]:gap-24">
        <div>
          <Kicker>{handover.kicker}</Kicker>
          <h2 className="d-l mt-4 max-w-[22ch]" data-lines>
            <Lines lines={["What you get on", "handover day"]} />
          </h2>
          <p className="t-body mt-6">{handover.lead}</p>
        </div>
        <ol className="handover-list list-none p-0" data-rv-group>
          {handover.items.map((h) => (
            <li key={h} data-rv>
              <Copy text={h} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* =============================== FAQ ================================== */
export function Faq() {
  return (
    <section id="questions" className="wrap section-pad">
      <div className="grid items-end gap-8 min-[900px]:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] min-[900px]:gap-24">
        <div>
          <Kicker>{faq.kicker}</Kicker>
          <h2 className="d-l mt-4" data-lines>
            <Lines lines={[faq.heading]} />
          </h2>
        </div>
        <p className="t-body">{faq.lead}</p>
      </div>
      <div className="faq mt-16 border-t border-rule">
        {faq.items.map((f, i) => (
          <details key={f.q} open={i === 0} name="faq">
            <summary>
              {f.q}
              <span className="faq-icon" aria-hidden="true" />
            </summary>
            <p className="max-w-[66ch] pb-7 pr-[clamp(0px,6vw,64px)] text-[16.5px] leading-[1.65] text-ink-2">
              <Copy text={f.a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* =============================== START ================================ */
export function Start() {
  return (
    <section id="start" className="on-blue section-pad bg-blue-panel text-white">
      <div className="wrap grid items-start gap-[clamp(36px,4vw,64px)] min-[940px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[940px]:gap-[clamp(48px,5vw,88px)]">
        <div>
          <p className="kicker !text-[rgb(255_255_255/0.75)]">{start.kicker}</p>
          <h2 className="d-l mt-4 max-w-[12ch]" data-lines>
            <Lines lines={[start.heading]} />
          </h2>
          <p className="t-lead mt-6 !text-[rgb(255_255_255/0.9)]">{start.lead}</p>
          <p className="mt-12 border-t border-[rgb(255_255_255/0.3)] pt-8 font-mono text-[13px] leading-[1.85] text-[rgb(255_255_255/0.9)]">
            Reply within one working day.
            <br />
            Or{" "}
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener"
              className="underline decoration-[rgb(255_255_255/0.5)] underline-offset-[0.22em] transition-colors hover:decoration-white"
            >
              book a 20-minute call
            </a>
            .
          </p>
        </div>

        <form
          action="#"
          method="post"
          noValidate
          className="rounded-[22px] bg-cream p-[clamp(24px,2.8vw,40px)] text-ink shadow-[0_30px_70px_-30px_rgb(11_11_12/0.5)]"
          data-rv
        >
          {start.fields.map((f) => (
            <label className="field-row mb-6 block" key={f.name}>
              <span className="label mb-2.5 block">{f.label}</span>
              <input
                type={f.type}
                name={f.name}
                autoComplete={f.autoComplete}
                required={f.required}
                placeholder={f.placeholder}
              />
            </label>
          ))}
          <label className="field-row mb-6 block">
            <span className="label mb-2.5 block">{start.textarea.label}</span>
            <textarea name={start.textarea.name} rows={4} placeholder={start.textarea.placeholder} />
          </label>
          <button type="submit" className="btn btn-primary magnetic mt-4 w-full">
            {start.submit}
            <Arrow />
          </button>
          <p className="mt-6 text-center text-[13.5px] leading-[1.55] text-ink-3">{start.fine}</p>
        </form>
      </div>
    </section>
  );
}

/* =============================== FOOTER =============================== */
/**
 * `standalone` is for pages that are not the homepage: the in-page jump to
 * the contact form has to become a link back to it.
 */
export function Footer({ standalone = false }: { standalone?: boolean }) {
  const startHref = standalone ? "/#start" : "#start";
  return (
    <footer className="on-ink relative overflow-hidden bg-ink pt-24 text-on-ink-2">
      <div className="wrap">
        <div className="relative z-10 grid gap-16 min-[860px]:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href={standalone ? "/" : "#top"} className="inline-flex min-h-11 items-center gap-3 font-display text-[18px] font-bold tracking-[-0.03em] text-on-ink no-underline">
              <Image src="/brand/mark.png" alt="" width={34} height={34} className="rounded-full" />
              {site.name}
            </a>
            <p className="mt-6 max-w-[34ch] text-[16px] leading-[1.6] text-on-ink-2">{site.blurb}</p>
            <ul className="mt-8 flex list-none flex-wrap gap-3 p-0">
              {socials.map((sn) => (
                <li key={sn.label}>
                  <a
                    href={sn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={sn.label}
                    className="social-dot no-underline"
                  >
                    <SocialIcon name={sn.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 font-mono text-[11.5px] uppercase tracking-[0.12em] text-on-ink-2 opacity-70">Where we are</p>
            <address className="not-italic text-[16px] leading-[1.6] text-on-ink-2">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <p className="mb-6 font-mono text-[11.5px] uppercase tracking-[0.12em] text-on-ink-2 opacity-70">Get in touch</p>
            <ul className="flex list-none flex-col p-0 text-[16px] text-on-ink-2">
              <li>
                <a href={startHref} className="inline-flex min-h-11 items-center no-underline transition-colors duration-200 hover:text-on-ink">
                  Start a project
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center no-underline transition-colors duration-200 hover:text-on-ink hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex min-h-11 items-center gap-3 no-underline transition-colors duration-200 hover:text-on-ink hover:underline"
                >
                  <SocialIcon name="WhatsApp" />
                  {site.whatsapp.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 mt-24 flex flex-wrap items-center justify-between gap-x-12 gap-y-4 border-t border-rule-ink py-6">
          <p className="text-sm">© 2026 {site.legalName}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-8">
            {footer.legal.map((l) => (
              <a key={l.label} href={l.href} className="inline-flex min-h-11 items-center text-sm text-on-ink-2 no-underline transition-colors duration-200 hover:text-on-ink hover:underline">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <p className="ftr-mark relative z-0 mt-8" aria-hidden="true" data-ftr-mark>
        Centangle
      </p>
    </footer>
  );
}
