import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FeatureHighlight } from "./feature-highlight";
const GlobalReach = () => {
  return (
    <div
      className=" flex py-[100px] px-44 gap-28 max-md:flex-col max-md:px-6 max-md:py-12 max-md:gap-12"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-28 justify-center items-center">
        <FeatureHighlight
          badgeText="Global Reach"
          title="The First Fully Global Job Board, Anywhere, Ever"
          description="RemoteRecruit connects candidates with opportunities around the
            world. With today’s remote-first workforce, you need to be able to
            find the best jobs and the best people for them, wherever they may
            be."
        />

        <div className="relative flex justify-center items-center px-4 md:px-0">
          {/* Main UI Card */}
          <div className="relative z-10 w-full max-w-4xl bg-white border border-[#F6F4FF] rounded-3xl shadow-[0_20px_40px_#3159D31F] h-[450px] md:h-[500px] flex flex-col p-4 md:p-5 overflow-visible">
            {/* Top Section: Image (1/3 of card) */}
            <div className="relative h-1/3">
              <Image
                src="/assets/find-work.png"
                alt="Global Reach Illustration"
                fill
                className="object-cover object-top rounded-2xl"
              />
            </div>

            {/* Floating logo - Adjusted for mobile */}
            <div className="absolute top-1/2 -right-8 md:-right-10 -translate-y-1/2 bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] p-3 md:p-4 rounded-full shadow-lg shadow-[#1E3E85]/30 z-50 w-[70px] h-[70px] md:w-[91px] md:h-[91px] flex justify-center items-center">
              <Image
                src="/assets/remote-recruit-sign.svg"
                alt="Remote Recruit Sign"
                width={40}
                height={40}
                className="object-cover md:w-12 md:h-12"
              />
            </div>

            {/* Decorative dot - Adjusted for mobile */}
            <div className="absolute  -left-8 -top-0 md:-left-12 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] shadow-lg shadow-[#1E3E85]/30"></div>

            {/* Bottom Section (2/3 of card) */}
            <div className="relative flex-1 flex flex-col justify-center items-center">
              {/* Floating Profile Cards */}
              <div className="absolute w-full h-full">
                {/* Top Profile - Mobile, Desktop: floating left */}
                <div className="absolute -left-[40px] md:-left-[67px] top-12 md:top-20 flex items-center bg-white rounded-full border border-[#F6F4FF] shadow-[14px_13px_20px_0px_#8781F51C] p-2 w-[calc(100%-1rem)] max-w-[280px] md:w-[360px] z-10">
                  <div className="inline-block rounded-full p-[2px] bg-gradient-to-br from-yellow-200 to-yellow-400 flex-shrink-0">
                    <Avatar className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white">
                      <AvatarImage
                        src="/assets/placeholder-image.png"
                        className="object-cover rounded-full"
                        alt="Profile Image"
                      />
                      <AvatarFallback>Gru</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3 md:ml-4 overflow-hidden">
                    <p className="text-xs md:text-sm text-[#1E3E85] font-semibold truncate">
                      Python Developer
                    </p>
                    <p className="text-base md:text-lg text-[#11142D] font-medium truncate">
                      Felonious Gru
                    </p>
                  </div>
                </div>

                {/* Bottom Profile - Mobile, Desktop: floating right */}
                <div className="absolute -right-[48px] md:-right-[67px] bottom-6 md:bottom-10 flex items-center bg-white rounded-full border border-[#F6F4FF] shadow-[14px_13px_20px_0px_#8781F51C] p-2 w-[calc(100%-1rem)] max-w-[280px] md:w-[360px] z-10">
                  <div className="inline-block rounded-full p-[2px] bg-gradient-to-br from-yellow-200 to-yellow-400 flex-shrink-0">
                    <Avatar className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white">
                      <AvatarImage
                        src="/assets/placeholder-image.png"
                        className="object-cover rounded-full"
                        alt="Profile Image"
                      />
                      <AvatarFallback>Mel</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3 md:ml-4 overflow-hidden">
                    <p className="text-xs md:text-sm text-[#52B4DA] font-semibold truncate">
                      Front End Wizard
                    </p>
                    <p className="text-base md:text-lg text-[#11142D] font-medium truncate">
                      Mel Muselphiem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;
