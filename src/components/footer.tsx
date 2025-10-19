

import { pricingData, socialMediaData } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { PricingCard } from "./pricing-card";

const Footer = () => {
  return (
    <div className="relative mt-64 max-md:mt-[600px]">
    {/* Floating Section (heading + cards) */}
    <div className=" max-sm:-translate-y-2/3 absolute z-20 w-full -translate-y-1/2 max-w-7xl mx-auto px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
        Help Is One Click Away
      </h2>
  
      <section className="flex items-center justify-center gap-8 max-md:flex-col max-md:gap-6 w-full">
        {pricingData.map((plan) => (
          <PricingCard key={plan.planName} {...plan} />
        ))}
      </section>
    </div>
  
    {/* Footer Background */}
    <div className="relative bg-[url('/assets/footer-background.png')] bg-cover bg-center px-4 pt-64 flex flex-col items-center bg-no-repeat overflow-hidden">
      {/* Footer content */}
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
  
      <Image src="/assets/remote-recruit-sign.svg" alt="logo" width={50} height={50} className="object-contain pb-4" />
    </div>
  </div>
  
  
  );
};

export default Footer;