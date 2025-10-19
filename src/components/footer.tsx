import { pricingData, socialMediaData } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { PricingCard } from "./pricing-card";

const Footer = () => {
  return (
    <div className="relative bg-[url('/assets/footer-background.png')] bg-cover bg-center h-screen px-4 flex flex-col items-center bg-no-repeat overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 mt-16 text-center">
        Help Is One Click Away
      </h2>

      {/* Pricing Cards Section */}
      <section className="relative flex items-center justify-center gap-8 -mt-40 z-10 max-md:flex-col max-md:gap-6">
        {pricingData.map((plan) => (
          <PricingCard key={plan.planName} {...plan} />
        ))}
      </section>

      {/* Footer Content */}
      <div className="flex justify-between items-center w-full max-w-7xl mt-32 max-md:flex-col max-md:gap-6">
        <Image src="/logo.webp" alt="logo" width={123} height={50} />
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {socialMediaData.map((platform) => {
            const Icon = platform.icon;
            return (
              <Link
                key={platform.name}
                href={platform.url}
                className="flex items-center gap-2 px-3 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(235,237,255,0.3)]"
                style={platform.style}
              >
                <Icon size={20} strokeWidth={1.5} />
              </Link>
            );
          })}
        </div>
      </div>

      <Separator className="my-8 w-full max-w-7xl bg-gray-400" />

      <Image
        src="/assets/remote-recruit-sign.svg"
        alt="logo"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Footer;
