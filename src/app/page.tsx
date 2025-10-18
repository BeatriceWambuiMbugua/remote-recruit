import GlobalReach from "@/components/global-reach";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar/>
      <HeroSection />
      <GlobalReach/>
    </div>
  );
}
