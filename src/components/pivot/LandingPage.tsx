import Image from "next/image";
import { Copy } from "./Ph";
import { Motion } from "./Motion";
import { shared, type Lp } from "@/content/lp";
import { site } from "@/content/site";

/**
 * One template, four campaigns.
 *
 * Centre-aligned throughout, after the approved comps — but headings and short
 * leads only. List rows, FAQ answers and form fields stay left-aligned inside
 * their centred containers, because centred multi-line body text is markedly
 * slower to scan and those lists are the part a buyer actually reads.
 *
 * Otherwise this is the homepage's design language unchanged: same palette,
 * type ramp, hollow numerals, tick/dash lists, motion and controls.
 *
 * No navigation, one CTA repeated, a footer of legal links only. Someone
 * arriving from an ad has already formed an intent; a nav is a way out of the
 * page the click paid for.
 */

const Arrow = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

/** A centred section heading, wiped up on approach like the homepage's. */
const Heading = ({ children, className = "d-l" }: { children: string; className?: string }) => (
  <h2 className={`${className} mx-auto max-w-[20ch] text-center`} data-lines>
    <span className="block overflow-hidden pb-[0.06em]">
      <span data-line className="block">
        {children}
      </span>
    </span>
  </h2>
);

export function LandingPage({ lp }: { lp: Lp }) {
  return (
    <>
      <Motion />

      <a
        href="#start"
        className="btn btn-ink btn-sm fixed left-[var(--gutter)] top-3 z-100 -translate-y-[200%] transition-transform duration-[250ms] ease-out-expo focus-visible:translate-y-0"
      >
        Skip to the form
      </a>

      {/* Wordmark only, centred. No nav: there is nowhere else to go. */}
      <header className="wrap flex min-h-[76px] items-center justify-center">
        <span className="flex items-center gap-3 font-display text-[18px] font-bold tracking-[-0.03em]">
          <Image src="/brand/mark.png" alt="" width={34} height={34} className="rounded-full" priority />
          {site.name}
        </span>
      </header>

      <main id="main">
        {/* ---------------- Hero ---------------- */}
        {/* id="hero": Motion scopes the load timeline to #hero, and the
            stylesheet hides [data-hero] until it runs. */}
        <section id="hero" className="wrap relative overflow-hidden pb-[clamp(40px,4vw,64px)] pt-[clamp(24px,3vw,48px)] text-center">
          <div className="aurora" aria-hidden="true" data-aurora>
            <i className="a1" />
            <i className="a2" />
            <i className="a3" />
          </div>

          <div className="relative z-10">
            <p className="tag" data-hero="tag">
              {lp.hero.tag}
            </p>

            {/* Price runs inline at the end of the sentence, as the comp has it.
                No data-lines inside #hero: the intro timeline owns this line. */}
            <h1 className="d-xl mx-auto mt-8 max-w-[19ch]">
              <span className="block overflow-hidden pb-[0.08em]">
                <span data-line className="block">
                  {lp.hero.h1}{" "}
                  <span className="text-blue-panel">
                    <Copy text={lp.hero.price} />
                  </span>
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[58ch] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-ink-2" data-hero="sub">
              {lp.hero.sub}
            </p>

            <div className="mt-9 flex justify-center">
              <a href="#start" className="btn btn-primary magnetic" data-hero="cta">
                {lp.hero.cta}
                <Arrow />
              </a>
            </div>
            <p className="label mt-4 !normal-case !tracking-[0.02em]">{lp.hero.reassure}</p>
          </div>
        </section>

        {/* ---------------- Trust strip ----------------
            On the cream ground, ruled top and bottom with dividers between,
            as the comp has it. */}
        <div className="wrap pb-[clamp(48px,5vw,72px)]">
          <ul className="mx-auto grid max-w-[1000px] list-none border-y border-rule text-center min-[640px]:grid-cols-2 min-[980px]:grid-cols-4 min-[980px]:divide-x min-[980px]:divide-rule">
            {lp.strip.map((s) => (
              <li key={s} className="px-5 py-5 font-mono text-[11.5px] uppercase leading-[1.55] tracking-[0.1em] text-ink-3">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- The problem ---------------- */}
        <section className="section-pad bg-tint text-center">
          <div className="wrap">
            <Heading>{lp.problem.heading}</Heading>
            <div className="mx-auto mt-7 max-w-[62ch]" data-rv-group>
              {lp.problem.body.map((b) => (
                <p key={b} className="mb-5 text-[17px] leading-[1.65] text-ink-2 last:mb-0" data-rv>
                  {b}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- What's usually wrong (Speed only) ---------------- */}
        {lp.symptoms && (
          <section className="section-pad text-center">
            <div className="wrap">
              <Heading>{lp.symptoms.heading}</Heading>
              <div
                className="mx-auto mt-10 grid max-w-[1000px] overflow-hidden rounded-[18px] border border-rule text-left min-[680px]:grid-cols-2 min-[980px]:grid-cols-3"
                data-rv-group
              >
                {lp.symptoms.items.map((it, i) => (
                  <div key={it} className="border-b border-r border-rule p-6" data-rv>
                    <span className="font-mono text-[11px] tracking-[0.08em] text-orange-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2.5 text-[16px] leading-[1.5]">{it}</p>
                  </div>
                ))}
                {/* Keeps the last row square rather than leaving a ragged edge. */}
                <div aria-hidden className="hidden border-b border-rule bg-[rgb(11_11_12/0.03)] min-[680px]:block min-[980px]:col-span-1" />
              </div>
              <p className="t-small mx-auto mt-6 text-center">{lp.symptoms.note}</p>
            </div>
          </section>
        )}

        {/* ---------------- What it covers ---------------- */}
        <section className="section-pad bg-tint text-center">
          <div className="wrap">
            <Heading>{lp.covers.heading}</Heading>
            <ul
              className="mx-auto mt-10 grid max-w-[1000px] list-none overflow-hidden rounded-[18px] border border-rule text-left min-[680px]:grid-cols-2 min-[980px]:grid-cols-3"
              data-rv-group
            >
              {lp.covers.items.map((i) => (
                <li key={i} className="flex gap-3 border-b border-r border-rule p-6 text-[16px] leading-[1.5]" data-rv>
                  <span aria-hidden className="mt-[7px] size-[7px] flex-none rounded-full bg-blue-panel" />
                  <span>
                    <Copy text={i} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="label mx-auto mt-7 max-w-[60ch] !normal-case !tracking-[0.02em] !text-[12.5px] !leading-[1.7]">
              <Copy text={lp.covers.meta} />
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#start" className="btn btn-ghost magnetic">
                {lp.hero.cta}
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- And what it doesn't ----------------
            On the dark ground, exclusions as chips: the comp gives them the
            same visual weight as the inclusions rather than burying them. */}
        <section className="on-ink section-pad bg-ink text-center">
          <div className="wrap">
            <Heading>{lp.excludes.heading}</Heading>
            <p className="mx-auto mt-5 max-w-[54ch] text-[16.5px] leading-[1.6] text-on-ink-2">{lp.excludes.lead}</p>
            <ul className="mx-auto mt-10 flex max-w-[900px] list-none flex-wrap justify-center gap-3 p-0" data-rv-group>
              {lp.excludes.items.map((i) => (
                <li
                  key={i}
                  data-rv
                  className="rounded-full border border-rule-ink-strong px-5 py-3 text-[15.5px] leading-[1.4] text-on-ink"
                >
                  <Copy text={i} />
                </li>
              ))}
            </ul>
            {lp.excludes.note && (
              <p className="mx-auto mt-9 max-w-[58ch] text-[16px] leading-[1.6] text-on-ink-2">{lp.excludes.note}</p>
            )}

            {lp.promise && (
              <div className="mx-auto mt-14 max-w-[66ch] border-t border-rule-ink pt-10">
                <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em] text-on-ink">{lp.promise.heading}</h3>
                <p className="mt-4 text-[16px] leading-[1.65] text-on-ink-2">{lp.promise.body}</p>
              </div>
            )}
          </div>
        </section>

        {/* ---------------- How it runs ---------------- */}
        <section className="wrap section-pad text-center">
          <Heading>How it runs</Heading>
          {/* Four across on a centred page, rather than the homepage's rows. */}
          <ol className="mt-14 grid list-none gap-10 p-0 min-[640px]:grid-cols-2 min-[980px]:grid-cols-4 min-[980px]:gap-8" data-rv-group>
            {lp.steps.map((s, i) => (
              <li key={s.title} data-rv>
                <span className="step-n block !text-[34px]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-[19px] font-semibold leading-[1.3] tracking-[-0.02em]">{s.title}</h3>
                <p className="mx-auto mt-2.5 max-w-[34ch] text-[16px] leading-[1.55] text-ink-2">{s.body}</p>
              </li>
            ))}
          </ol>
          {lp.stepsNote && <p className="mx-auto mt-12 max-w-[62ch] text-[17px] leading-[1.65] text-ink-2">{lp.stepsNote}</p>}
        </section>

        {/* ---------------- Proof ---------------- */}
        <section className="on-ink section-pad text-center">
          <div className="wrap">
            <Heading>A store we built. Open it.</Heading>
            <p className="mx-auto mt-6 max-w-[58ch] text-[17px] leading-[1.65] text-on-ink-2">{shared.proofBody}</p>
            <a
              href="#work"
              data-ph-link
              data-rv
              className="case mx-auto mt-12 flex max-w-[560px] flex-col overflow-hidden rounded-2xl bg-[#141416] no-underline shadow-[inset_0_0_0_1px_var(--color-rule-ink)]"
            >
              <div className="case-shot relative aspect-3/2 overflow-hidden border-b border-rule-ink bg-[#0E0E10]">
                <Image
                  src="/work/eshopp.jpg"
                  alt="The eshopp storefront open on a laptop at a phone-repair bench."
                  width={1800}
                  height={1207}
                  data-parallax-img
                  className="size-full scale-[1.08] object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-4 p-6">
                <h3 className="font-display text-2xl font-bold leading-[1.15] tracking-[-0.03em]">eshopp</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-orange-lit">Shopify · Canada</span>
              </div>
            </a>
            <p className="mx-auto mt-12 max-w-[60ch] text-[15px] leading-[1.6] text-on-ink-2">{shared.about}</p>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="wrap section-pad">
          <Heading>Before you ask</Heading>
          {/* Answers left-aligned: nobody reads a centred paragraph twice. */}
          <div className="faq mx-auto mt-12 max-w-[820px] border-t border-rule text-left">
            {lp.faq.map((f, i) => (
              <details key={f.q} open={i === 0} name="lp-faq">
                <summary>
                  {f.q}
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p className="max-w-[66ch] pb-7 pr-6 text-[16.5px] leading-[1.65] text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------------- Close ---------------- */}
        <section id="start" className="on-blue section-pad bg-blue-panel text-center text-white">
          <div className="wrap">
            <h2 className="d-l mx-auto max-w-[16ch]" data-lines>
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-line className="block">
                  {lp.close.heading}
                </span>
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-[56ch] text-[clamp(18px,1.5vw,20px)] leading-[1.55] text-[rgb(255_255_255/0.9)]">
              {lp.close.body}
            </p>

            <form
              action="#"
              method="post"
              noValidate
              className="mx-auto mt-12 max-w-[560px] rounded-[22px] bg-cream p-[clamp(24px,2.8vw,40px)] text-left text-ink shadow-[0_30px_70px_-30px_rgb(11_11_12/0.5)]"
              data-rv
            >
              {lp.close.fields.map((f) => (
                <label className="field-row mb-6 block" key={f.name}>
                  <span className="label mb-2.5 block">{f.label}</span>
                  <input type={f.type ?? "text"} name={f.name} autoComplete={f.autoComplete} />
                </label>
              ))}
              <button type="submit" className="btn btn-primary magnetic mt-2 w-full">
                {lp.close.submit}
                <Arrow />
              </button>
            </form>

            <p className="mx-auto mt-8 max-w-[64ch] font-mono text-[12.5px] leading-[1.8] text-[rgb(255_255_255/0.9)]">
              {lp.close.fine}
            </p>
          </div>
        </section>
      </main>

      {/* Legal links only, per the campaign spec. */}
      <footer className="on-ink bg-ink py-10 text-center text-on-ink-2">
        <div className="wrap flex flex-col items-center gap-4">
          <p className="t-small !max-w-none !text-on-ink-2">
            {site.name}. US-registered, with delivery teams in Pakistan. Building websites since 2013.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-8">
            <a href="/privacy" className="inline-flex min-h-11 items-center text-sm no-underline transition-colors hover:text-on-ink hover:underline">
              Privacy
            </a>
            <a href="/terms" className="inline-flex min-h-11 items-center text-sm no-underline transition-colors hover:text-on-ink hover:underline">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
