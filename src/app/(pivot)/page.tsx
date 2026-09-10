import { Header } from "@/components/pivot/Header";
import { Motion } from "@/components/pivot/Motion";
import { Packages } from "@/components/pivot/Packages";
import {
  Faq,
  Footer,
  Handover,
  Hero,
  Marquee,
  Process,
  Services,
  Situations,
  Start,
  Work,
} from "@/components/pivot/Sections";

export default function Home() {
  return (
    <>
      <Motion />
      <a
        href="#main"
        className="btn btn-ink btn-sm fixed left-[var(--gutter)] top-3 z-100 -translate-y-[200%] transition-transform duration-[250ms] ease-out-expo focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <Marquee />
        <Situations />
        <Services />
        <Work />
        <Process />
        <Packages />
        <Handover />
        <Faq />
        <Start />
      </main>
      <Footer />
    </>
  );
}
