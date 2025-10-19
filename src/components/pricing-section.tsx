import Image from "next/image";
import { FeatureHighlight } from "./feature-highlight";
import { premiumPlanFeatures } from "@/data/constants";
import { Check } from "lucide-react";
const PricingSection = () => {
  return (
    <div className=" flex  py-[100px] px-44 gap-28 max-md:flex-col max-md:px-6 max-md:py-12 max-md:gap-12" data-aos="fade-up" data-aos-duration="3000">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-28 justify-center items-center">
        <div className="relative flex justify-center items-center px-6">
          {/* Main UI Card */}
          <div className="relative z-10 w-full max-w-4xl bg-white border border-[#F6F4FF] rounded-3xl shadow-[0_20px_40px_#3159D31F] h-[500px] flex flex-col p-8 overflow-visible">
            {/* Top Section: Image (1/3 of card) */}
            <p className="text-gray-400 text-xs font-semibold">
              Your Membership Tier
            </p>
            <h1 className="text-xl font-semibold bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] bg-clip-text text-transparent mt-2">
              Premium
            </h1>
            <p className="uppercase text-gray-400 font-bold text-xs mt-5">
              Features
            </p>
            <ul className="space-y-4 mt-3">
              {premiumPlanFeatures.map((feature) => (
                <li key={feature.id} className="flex items-center gap-4">
                  <Check className="text-neutral-50 w-4 h-4 rounded-full bg-gradient-to-r from-sky-400 to-sky-800 p-[2px] shadow-sm" />

                  <span className="text-gray-500 text-sm font-medium m-0">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Floating logo */}
            <div className="absolute top-1/2 -right-10 -translate-y-1/2 bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] p-4 rounded-full shadow-lg shadow-[#1E3E85]/30 z-50 w-[91px] h-[91px] flex justify-center items-center">
              <Image
                src="/assets/remote-recruit-sign.svg"
                alt="Remote Recruit Sign"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>

            {/* Decorative dot */}
            <div className="absolute -top-0  -left-8 md:-left-12 w-5 h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] shadow-lg shadow-[#1E3E85]/30"></div>

            {/* Bottom Section (2/3 of card) */}
            <div className="relative flex-1 flex flex-col justify-center items-center">
              {/* Floating Profile Cards */}
              <div className="absolute w-full h-full">
                {/* Top Profile (floating on the left side) */}
                <div className="absolute -left-[67px] top-14 flex items-center bg-white rounded-full border border-[#F6F4FF] shadow-[14px_13px_20px_0px_#8781F51C] p-2 w-[360px] z-10">
                  <div className=" flex justify-center items-center rounded-full p-[2px] bg-[linear-gradient(135deg,rgba(235,237,255,0.48)_0%,rgba(173,184,255,0.48)_100%)] w-16 h-16">
                    <Image
                      src="/assets/paypal.png"
                      alt="Profile Image"
                      width={64}
                      height={64}
                      className="object-cover w-6 h-auto "
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-[#1E3E85] font-semibold">
                      Upcoming Payment In…
                    </p>
                    <p className="text-lg text-[#11142D] font-medium">
                      14 Days - $79.99
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeatureHighlight
          badgeText="Actually Fee Free"
          title="Fee-Free Forever"
          description="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved."
        />
      </div>
    </div>
  );
};

export default PricingSection;
