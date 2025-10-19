import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import GlobalReach from "@/components/global-reach";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing-section";
import TalentSection from "@/components/talent-section";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col max-md:overflow-x-hidden ">
      <Navbar/>
      <HeroSection />
      <GlobalReach/>
      <PricingSection/>
      <TalentSection/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}
