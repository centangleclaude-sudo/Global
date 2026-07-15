import Navbar from "@/components/Navbar";
import ProjectsHero from "@/components/ProjectsHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects - Centangle Interactive",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white relative overflow-x-hidden">

      {/* Background radial glow — sits behind the navbar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1432.802px",
          height: "702px",
          opacity: 0.9,
          background:
            "radial-gradient(47.5% 104.24% at 54.91% 0%, rgba(25, 54, 164, 0.26) 0%, rgba(25, 54, 164, 0.00) 30.64%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <ProjectsHero />
        <ProjectsGrid />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
