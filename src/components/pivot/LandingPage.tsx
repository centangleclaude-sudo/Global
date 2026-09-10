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

const Tick = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12.5 9.5 18 20 6.5" />
  </svg>
);

const Dash = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
    <path d="M6 12h12" />
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
        <section id="hero" className="wrap relative overflow-hidden pb-[clamp(48px,5vw,80px)] pt-[clamp(24px,3vw,48px)] text-center">
          <div className="aurora" aria-hidden="true" data-aurora>
            <i className="a1" />
            <i className="a2" />
            <i className="a3" />
          </div>

          <div className="relative z-10">
            <p className="tag" data-hero="tag">
              {lp.hero.tag}
            </p>

            {/* No data-lines inside #hero: the intro timeline owns this line,
                and CSS hiding it would leave the tween animating 108 -> 108. */}
            <h1 className="d-xl mx-auto mt-8 max-w-[20ch]">
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-line className="block">
                  {lp.hero.h1}
                </span>
              </span>
            </h1>

            {/* The price is the offer, so it carries its own weight rather than
                running on at the end of the sentence. */}
            <p
              className="mt-8 font-display text-[clamp(52px,6.4vw,88px)] font-bold leading-[0.9] tracking-[-0.05em] text-blue-panel"
              data-hero="price"
            >
              <Copy text={lp.hero.price} />
            </p>

            <p className="mx-auto mt-8 max-w-[56ch] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-ink-2" data-hero="sub">
              {lp.hero.sub}
            </p>

            <div className="mt-10 flex justify-center">
              <a href="#start" className="btn btn-primary magnetic" data-hero="cta">
                {lp.hero.cta}
                <Arrow />
              </a>
            </div>
            <p className="label mt-5 !normal-case !tracking-[0.02em]">{lp.hero.reassure}</p>
          </div>
        </section>

        {/* ---------------- Trust strip ---------------- */}
        <div className="on-ink bg-ink">
          <ul className="wrap grid list-none gap-x-8 gap-y-5 py-7 text-center min-[640px]:grid-cols-2 min-[980px]:grid-cols-4 min-[980px]:divide-x min-[980px]:divide-rule-ink">
            {lp.strip.map((s) => (
              <li key={s} className="font-mono text-[11.5px] uppercase leading-[1.5] tracking-[0.1em] text-on-ink-2">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- The problem ---------------- */}
        <section className="wrap section-pad text-center">
          <Heading>{lp.problem.heading}</Heading>
          <div className="mx-auto mt-8 max-w-[62ch]" data-rv-group>
            {lp.problem.body.map((b) => (
              <p key={b} className="mb-5 text-[17px] leading-[1.65] text-ink-2 last:mb-0" data-rv>
                {b}
              </p>
            ))}
          </div>
        </section>

        {/* ---------------- Covers / doesn't, at the same size ---------------- */}
        <section className="section-pad bg-tint">
          <div className="wrap grid gap-14 min-[900px]:grid-cols-2 min-[900px]:gap-[clamp(40px,4.5vw,80px)]">
            <div>
              <Heading className="d-m">{lp.covers.heading}</Heading>
              {/* Rows stay left-aligned: this is the part people read closely. */}
              <ul className="mx-auto mt-8 max-w-[46ch] list-none p-0 text-left" data-rv-group>
                {lp.covers.items.map((i) => (
                  <li key={i} className="flex gap-3 border-b border-rule py-3.5 text-[16px] leading-[1.55] last:border-0" data-rv>
                    <span className="mt-[3px] flex-none text-blue-ink">
                      <Tick />
                    </span>
                    <Copy text={i} />
                  </li>
                ))}
              </ul>
              <p className="label mx-auto mt-6 max-w-[48ch] text-center !normal-case !tracking-[0.02em] !text-[12.5px] !leading-[1.6]">
                <Copy text={lp.covers.meta} />
              </p>
              <div className="mt-8 flex justify-center">
                <a href="#start" className="btn btn-primary magnetic">
                  {lp.hero.cta}
                  <Arrow />
                </a>
              </div>
            </div>

            <div>
              <Heading className="d-m">{lp.excludes.heading}</Heading>
              <p className="t-small mx-auto mt-4 max-w-[46ch] text-center">{lp.excludes.lead}</p>
              <ul className="mx-auto mt-6 max-w-[46ch] list-none p-0 text-left" data-rv-group>
                {lp.excludes.items.map((i) => (
                  <li key={i} className="flex gap-3 border-b border-rule py-3.5 text-[16px] leading-[1.55] text-ink-2 last:border-0" data-rv>
                    <span className="mt-[3px] flex-none text-orange-ink">
                      <Dash />
                    </span>
                    <Copy text={i} />
                  </li>
                ))}
              </ul>
              {lp.excludes.note && (
                <p className="t-small mx-auto mt-6 max-w-[48ch] text-center">{lp.excludes.note}</p>
              )}
            </div>
          </div>

          {lp.promise && (
            <div className="wrap mt-16 text-center">
              <div className="note mx-auto !max-w-[66ch]">
                <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">{lp.promise.heading}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-ink-2">{lp.promise.body}</p>
              </div>
            </div>
          )}
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
