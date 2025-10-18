import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FeatureHighlight } from "./feature-highligt";
const PricingSection = () => {
  return (
    <div className=" flex justify-center items-center py-[100px] px-44 gap-28">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-28">
        <div className="relative flex justify-center items-center py-16 px-6">
          {/* Main UI Card */}
          <div className="relative z-10 w-full max-w-4xl bg-white border border-[#F6F4FF] rounded-3xl shadow-[0_20px_40px_#3159D31F] h-[500px] flex flex-col p-5 overflow-visible">
            {/* Top Section: Image (1/3 of card) */}
            <div className="relative h-1/3">
              <Image
                src="/assets/find-work.png"
                alt="Global Reach Illustration"
                fill
                className="object-cover object-top rounded-2xl"
              />
            </div>

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
            <div className="absolute -top-0 -left-12 w-5 h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] shadow-lg shadow-[#1E3E85]/30"></div>

            {/* Bottom Section (2/3 of card) */}
            <div className="relative flex-1 flex flex-col justify-center items-center">
              {/* Floating Profile Cards */}
              <div className="absolute w-full h-full">
                {/* Top Profile (floating on the left side) */}
                <div className="absolute -left-[67px] top-20 flex items-center bg-white rounded-full border border-[#F6F4FF] shadow-[14px_13px_20px_0px_#8781F51C] p-2 w-[360px] z-10">
                  <div className="inline-block rounded-full p-[2px] bg-gradient-to-br from-yellow-200 to-yellow-400">
                    <Avatar className="w-12 h-12 rounded-full bg-white">
                      <AvatarImage
                        src="/assets/placeholder-image.png"
                        className="object-cover rounded-full"
                      />
                      <AvatarFallback>Gru</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-[#1E3E85] font-semibold">
                      Python Developer
                    </p>
                    <p className="text-lg text-[#11142D] font-medium">
                      Felonious Gru
                    </p>
                  </div>
                </div>

                {/* Bottom Profile (floating on the right side) */}
                <div className="absolute -right-[67px] bottom-10 flex items-center bg-white rounded-full border border-[#F6F4FF] shadow-[14px_13px_20px_0px_#8781F51C] p-2 w-[360px] z-10">
                  <div className="inline-block rounded-full p-[2px] bg-gradient-to-br from-yellow-200 to-yellow-400">
                    <Avatar className="w-12 h-12 rounded-full bg-white">
                      <AvatarImage
                        src="/assets/placeholder-image.png"
                        className="object-cover rounded-full"
                      />
                      <AvatarFallback>Gru</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-[#52B4DA] font-semibold">
                      Front End Wizard
                    </p>
                    <p className="text-lg text-[#11142D] font-medium">
                      Mel Muselphiem
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
