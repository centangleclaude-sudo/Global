import ComingSoon from "@/components/ComingSoon";
import Navbar from "@/components/Navbar"; // adjust path to match wherever Navbar actually lives

export const metadata = {
  title: "Coming Soon - Centangle Global",
};

export default function ComingSoonPage() {
  return (
    <>
      <Navbar />
      <ComingSoon />
    </>
  );
}