import { Header } from "@/components/pivot/Header";
import { Motion } from "@/components/pivot/Motion";
import { Footer } from "@/components/pivot/Sections";
import type { LegalDoc } from "@/content/legal";

/** Anchor id for a clause, so the footer can deep-link to one. */
const slug = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Privacy and Terms in the pivot design system.
 *
 * Two columns on desktop: the clause list stays in view on the left while the
 * text runs down the right. Legal copy is long and nobody reads it end to end
 * — they arrive looking for one clause, so the index is the feature.
 */
export function Legal({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <Motion />
      <a
        href="#main"
        className="btn btn-ink btn-sm fixed left-[var(--gutter)] top-3 z-100 -translate-y-[200%] transition-transform duration-[250ms] ease-out-expo focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <Header minimal />

      <main id="main">
        <span id="top" />

        {/* id="hero" is what the shared intro timeline keys off. Without it the
            [data-hero] elements stay at the opacity:0 the stylesheet sets. */}
        <section id="hero" className="wrap pb-[clamp(40px,4vw,64px)] pt-[clamp(40px,5vw,72px)]">
          <p className="kicker" data-hero="tag">
            Legal
          </p>
          <h1 className="d-l mt-4 max-w-[18ch]">
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-line className="block">
                {doc.title}
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-[62ch] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-ink-2" data-hero="sub">
            {doc.intro}
          </p>
          <p className="mt-6 font-mono text-[12.5px] uppercase tracking-[0.09em] text-ink-3" data-hero="sub">
            Last updated {doc.lastUpdated}
          </p>
        </section>

        <section className="wrap border-t border-rule pb-[clamp(72px,8vw,128px)] pt-[clamp(40px,4vw,64px)]">
          <div className="grid gap-[clamp(32px,4vw,72px)] min-[1000px]:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)]">
            <nav aria-label="On this page" className="min-[1000px]:sticky min-[1000px]:top-[96px] min-[1000px]:self-start">
              <p className="mb-5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-3">On this page</p>
              <ol className="m-0 flex list-none flex-col gap-0 p-0">
                {doc.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#${s.id ?? slug(s.heading)}`}
                      className="flex gap-3 py-1.5 text-[14.5px] leading-[1.45] text-ink-2 no-underline transition-colors duration-200 hover:text-ink hover:underline"
                    >
                      <span className="tnum font-mono text-[12px] text-ink-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div data-rv-group>
              {doc.sections.map((s) => (
                <section
                  key={s.heading}
                  id={s.id ?? slug(s.heading)}
                  data-rv
                  className="scroll-mt-[96px] border-b border-rule py-[clamp(26px,2.8vw,38px)] first:pt-0 last:border-b-0"
                >
                  <h2 className="d-m max-w-[26ch]">{s.heading}</h2>
                  {s.body?.map((para) => (
                    <p key={para} className="mt-4 max-w-[68ch] text-[16.5px] leading-[1.68] text-ink-2">
                      {para}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-5 flex list-none flex-col gap-2.5 p-0">
                      {s.list.map((item) => (
                        <li
                          key={item}
                          className="relative max-w-[66ch] pl-6 text-[16.5px] leading-[1.6] text-ink-2 before:absolute before:left-0 before:top-[0.62em] before:size-1.5 before:rounded-full before:bg-blue"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer standalone />
    </>
  );
}
