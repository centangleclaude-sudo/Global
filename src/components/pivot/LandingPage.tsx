import Image from "next/image";
import { Copy } from "./Ph";
import { Motion } from "./Motion";
import { shared, type Lp } from "@/content/lp";
import { site } from "@/content/site";

/**
 * One template, four campaigns.
 *
 * Deliberately different from the homepage: no navigation, one CTA repeated,
 * and a footer that carries only privacy and cookies. Bought traffic arrives
 * with an intent already formed — anything that offers a way out of the page
 * is working against the ad that paid for the click.
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

      {/* Wordmark only. No nav: there is nowhere else to go from here. */}
      <header className="wrap flex min-h-[76px] items-center">
        <span className="flex items-center gap-3 font-display text-[18px] font-bold tracking-[-0.03em]">
          <Image src="/brand/mark.png" alt="" width={34} height={34} className="rounded-full" priority />
          {site.name}
        </span>
      </header>

      <main id="main">
        {/* ---------------- Hero ---------------- */}
        {/* id="hero": Motion scopes the load timeline to #hero, and the
            stylesheet hides [data-hero] until it runs. */}
        <section id="hero" className="wrap relative overflow-hidden pb-[clamp(40px,4.5vw,64px)] pt-[clamp(28px,3.5vw,56px)]">
          <div className="aurora" aria-hidden="true" data-aurora>
            <i className="a1" />
            <i className="a2" />
            <i className="a3" />
          </div>
          <div className="relative z-10 grid items-end gap-10 min-[900px]:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] min-[900px]:gap-16">
            <div>
              {/* No data-lines here: inside #hero the intro timeline owns this
                  line. Adding data-lines would let CSS hide it at 108% and the
                  timeline would then animate 108 -> 108 and never reveal it. */}
              <h1 className="d-xl max-w-[17ch]">
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-line className="block">
                    {lp.hero.h1}
                  </span>
                </span>
              </h1>
              <p className="mt-8 max-w-[54ch] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-ink-2" data-hero="sub">
                {lp.hero.sub}
              </p>
            </div>

            {/* The price is the offer, so it gets its own weight rather than
                being folded into the headline. */}
            <div data-hero="field" className="min-[900px]:pb-2">
              <p className="label">Fixed price</p>
              <p className="mt-3 font-display text-[clamp(56px,7vw,96px)] font-bold leading-[0.9] tracking-[-0.05em] text-blue-panel">
                <Copy text={lp.hero.price} />
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a href="#start" className="btn btn-primary magnetic" data-hero="cta">
                  {lp.hero.cta}
                  <Arrow />
                </a>
              </div>
              <p className="t-small mt-4 max-w-[36ch]">{lp.hero.reassure}</p>
            </div>
          </div>
        </section>

        {/* ---------------- Trust strip ---------------- */}
        <div className="on-ink bg-ink">
          <ul className="wrap grid list-none gap-x-8 gap-y-4 py-6 sm:grid-cols-2 min-[980px]:grid-cols-4">
            {lp.strip.map((s) => (
              <li key={s} className="flex items-start gap-2.5 font-mono text-[11.5px] uppercase leading-[1.45] tracking-[0.1em] text-on-ink-2">
                <span aria-hidden className="mt-[5px] size-[6px] flex-none rotate-45 bg-orange-lit" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- The problem ---------------- */}
        <section className="wrap section-pad">
          <div className="grid gap-8 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] min-[900px]:gap-20">
            <h2 className="d-l max-w-[16ch]" data-lines>
              <span className="block overflow-hidden pb-[0.06em]">
                <span data-line className="block">
                  {lp.problem.heading}
                </span>
              </span>
            </h2>
            <div data-rv-group>
              {lp.problem.body.map((b) => (
                <p key={b} className="t-body mb-5 last:mb-0" data-rv>
                  {b}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Covers / doesn't, at the same size ---------------- */}
        <section className="section-pad bg-tint">
          <div className="wrap grid gap-12 min-[900px]:grid-cols-2 min-[900px]:gap-[clamp(40px,4.5vw,80px)]">
            <div>
              <h2 className="d-m" data-lines>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-line className="block">
                    {lp.covers.heading}
                  </span>
                </span>
              </h2>
              <ul className="mt-8 list-none p-0" data-rv-group>
                {lp.covers.items.map((i) => (
                  <li key={i} className="flex gap-3 border-b border-rule py-3.5 text-[16px] leading-[1.55] last:border-0" data-rv>
                    <span className="mt-[3px] flex-none text-blue-ink">
                      <Tick />
                    </span>
                    <Copy text={i} />
                  </li>
                ))}
              </ul>
              <p className="label mt-6 !normal-case !tracking-[0.02em] !text-[12.5px] !leading-[1.6]">
                <Copy text={lp.covers.meta} />
              </p>
              <a href="#start" className="btn btn-primary magnetic mt-8">
                {lp.hero.cta}
                <Arrow />
              </a>
            </div>

            <div>
              <h2 className="d-m" data-lines>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-line className="block">
                    {lp.excludes.heading}
                  </span>
                </span>
              </h2>
              <p className="t-small mt-4 max-w-[44ch]">{lp.excludes.lead}</p>
              <ul className="mt-6 list-none p-0" data-rv-group>
                {lp.excludes.items.map((i) => (
                  <li key={i} className="flex gap-3 border-b border-rule py-3.5 text-[16px] leading-[1.55] text-ink-2 last:border-0" data-rv>
                    <span className="mt-[3px] flex-none text-orange-ink">
                      <Dash />
                    </span>
                    <Copy text={i} />
                  </li>
                ))}
              </ul>
              {lp.excludes.note && <p className="t-small mt-6 max-w-[46ch]">{lp.excludes.note}</p>}
            </div>
          </div>

          {lp.promise && (
            <div className="wrap mt-16">
              <div className="note !max-w-[62ch]">
                <h3 className="font-display text-[19px] font-semibold tracking-[-0.02em]">{lp.promise.heading}</h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-ink-2">{lp.promise.body}</p>
              </div>
            </div>
          )}
        </section>

        {/* ---------------- How it runs ---------------- */}
        <section className="wrap section-pad">
          <h2 className="d-l" data-lines>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-line className="block">
                How it runs
              </span>
            </span>
          </h2>
          <ol className="steps mt-12 list-none p-0" data-rv-group>
            {lp.steps.map((s, i) => (
              <li className="step" key={s.title} data-rv>
                <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          {lp.stepsNote && <p className="t-body mt-10 max-w-[60ch]">{lp.stepsNote}</p>}
        </section>

        {/* ---------------- Proof ---------------- */}
        <section className="on-ink section-pad">
          <div className="wrap grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] min-[900px]:gap-16">
            <div>
              <h2 className="d-l max-w-[14ch]" data-lines>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-line className="block">
                    A store we built. Open it.
                  </span>
                </span>
              </h2>
              <p className="t-body mt-6">{shared.proofBody}</p>
              <p className="t-small mt-8 max-w-[52ch]">{shared.about}</p>
            </div>
            <a
              href="#work"
              data-ph-link
              data-rv
              className="case flex flex-col overflow-hidden rounded-2xl bg-[#141416] no-underline shadow-[inset_0_0_0_1px_var(--color-rule-ink)]"
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
              <div className="flex items-baseline justify-between gap-4 p-6">
                <h3 className="font-display text-2xl font-bold leading-[1.15] tracking-[-0.03em]">eshopp</h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.09em] text-orange-lit">Shopify · Canada</span>
              </div>
            </a>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="wrap section-pad">
          <h2 className="d-l" data-lines>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-line className="block">
                Before you ask
              </span>
            </span>
          </h2>
          <div className="faq mt-12 border-t border-rule">
            {lp.faq.map((f, i) => (
              <details key={f.q} open={i === 0} name="lp-faq">
                <summary>
                  {f.q}
                  <span className="faq-icon" aria-hidden="true" />
                </summary>
                <p className="max-w-[66ch] pb-7 pr-[clamp(0px,6vw,64px)] text-[16.5px] leading-[1.65] text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------------- Close ---------------- */}
        <section id="start" className="on-blue section-pad bg-blue-panel text-white">
          <div className="wrap grid items-start gap-[clamp(36px,4vw,64px)] min-[940px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] min-[940px]:gap-[clamp(48px,5vw,88px)]">
            <div>
              <h2 className="d-l max-w-[14ch]" data-lines>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span data-line className="block">
                    {lp.close.heading}
                  </span>
                </span>
              </h2>
              <p className="t-lead mt-6 !max-w-[42ch] !text-[rgb(255_255_255/0.9)]">{lp.close.body}</p>
              <p className="mt-10 border-t border-[rgb(255_255_255/0.3)] pt-6 font-mono text-[12.5px] leading-[1.8] text-[rgb(255_255_255/0.9)]">
                {lp.close.fine}
              </p>
            </div>

            <form
              action="#"
              method="post"
              noValidate
              className="rounded-[22px] bg-cream p-[clamp(24px,2.8vw,40px)] text-ink shadow-[0_30px_70px_-30px_rgb(11_11_12/0.5)]"
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
          </div>
        </section>
      </main>

      {/* Privacy and cookies only, per the campaign spec. */}
      <footer className="on-ink bg-ink py-10 text-on-ink-2">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
          <p className="t-small !text-on-ink-2">
            {site.name}. US-registered, with delivery teams in Pakistan. Building websites since 2013.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap gap-8">
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
