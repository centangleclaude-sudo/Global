import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServiceCapabilities from "@/components/ServiceCapabilities";
import ServiceHighlights from "@/components/ServiceHighlights";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services - Centangle Global",
};

export default function ServicesPage() {
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
        <ServicesHero />
        <ServiceCapabilities />
        <ServiceHighlights />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
