import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact - Centangle Global",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-[#030305] relative overflow-x-hidden">
      <div className="relative z-10">
        <Navbar variant="light" />
        <ContactHero />
        <ContactInfo />
        <ProcessSection />
        <Footer />
      </div>
    </div>
  );
}
