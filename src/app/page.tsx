import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import StagesSection from "@/components/StagesSection";
import CaseStudies from "@/components/CaseStudies";
import ProofSection from "@/components/ProofSection";
import ServicesSection from "@/components/ServicesSection";
import FeatureColumns from "@/components/FeatureColumns";
import AwardsSection from "@/components/AwardsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white relative overflow-x-hidden">

      {/* Background radial glow — sits behind navbar */}
      <div
        style={{
          position: "absolute",
          top: "-416px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1285px",
          height: "1760.278px",
          opacity: 0.9,
          background: "radial-gradient(35.79% 38.67% at 49.53% 25.92%, rgba(25, 54, 164, 0.26) 0%, rgba(25, 54, 164, 0.00) 15%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <MissionSection />
        <StagesSection />
        <CaseStudies />
        <ProofSection />

        {/* Light band: Services → Feature columns → Awards */}
        <div className="bg-[#fafafa] rounded-t-[40px]">
          <ServicesSection />
          <FeatureColumns />
          <AwardsSection />
        </div>

        <FaqSection />
        <CtaSection />
        <Footer />
      </div>

    </div>
  );
}
