import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FeatureHighlight } from "./feature-highlight";
import { developerSkills } from "@/data/constants";
import { Badge } from "./ui/badge";
import { Play } from "lucide-react";

const TalentSection = () => {
  return (
    <div
      className=" flex  py-[100px] px-44 gap-28 max-md:flex-col max-md:px-6 max-md:py-12 max-md:gap-12"
      data-aos="slide-up"
      data-aos-duration="2000"
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-28 justify-center items-center">
        <FeatureHighlight
          badgeText="Custom Profile"
          title="Showcase Your Talents"
          description="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
        />

        <div className="relative flex justify-center items-center px-4 md:px-0">
          {/* Main UI Card */}
          <div className="relative z-10 w-full max-w-4xl bg-white border border-[#F6F4FF] rounded-3xl shadow-[0_20px_40px_#3159D31F] h-[450px] md:h-[500px] flex flex-col p-4 md:p-5 overflow-visible">
            {/* Top Section: Image (1/2 of card) */}
            <div className="relative h-1/2">
              <Image
                src="/assets/talent.png"
                alt="Talent Dashboard"
                fill
                className="object-cover object-center rounded-2xl"
              />

              {/* Glassmorphism Play Button */}
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full backdrop-blur-sm bg-[#52B4DA7E] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center justify-center transition hover:scale-105">
                  <Play
                    className="w-5 h-5 md:w-7 md:h-7 text-[#1E3E85]"
                    fill="#1E3E85"
                  />
                </div>
              </button>
            </div>

            {/* Floating logo - Responsive positioning */}
            <div className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 rounded-full p-[4px] md:p-[6px] bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] shadow-lg shadow-[#1E3E85]/30 z-50">
              <div className="w-[70px] h-[70px] md:w-[91px] md:h-[91px] rounded-full bg-white flex justify-center items-center overflow-hidden">
                <Image
                  src="/assets/placeholder-image.png"
                  alt="placeholder Image"
                  width={91}
                  height={91}
                  className="object-cover rounded-full w-full h-full"
                />
              </div>
            </div>

            {/* Decorative dot - Responsive positioning */}
            <div className="absolute  -left-8 -top-0 md:-left-12 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-[#52B4DA] to-[#1E3E85] shadow-lg shadow-[#1E3E85]/30"></div>

            {/* Bottom Section (1/2 of card) */}
            <div className="relative flex-1 flex flex-col justify-center items-center">
              {/* Floating Profile Cards */}
              <div className="absolute w-full h-full">
                {/* Top Profile - Mobile: inside card, Desktop: floating left */}
                <div className="absolute -left-[48px] md:-left-[67px] top-8 md:top-12 flex items-center bg-white rounded-full border border-[#F6F4FF] shadow-[14px_13px_20px_0px_#8781F51C] p-2 w-[calc(100%-1rem)] max-w-[300px] md:w-[360px] z-10">
                  <div className="inline-block rounded-full p-[2px] bg-gradient-to-br from-yellow-200 to-yellow-400 flex-shrink-0">
                    <Avatar className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white">
                      <AvatarImage
                        src="/assets/placeholder-image.png"
                        className="object-cover rounded-full"
                        alt="Profile Image"
                      />
                      <AvatarFallback>PC</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3 md:ml-4 overflow-hidden">
                    <p className="text-xs md:text-sm text-[#1E3E85] font-semibold truncate">
                      Past Client Feedback
                    </p>
                    <p className="text-sm md:text-lg text-[#11142D] font-medium truncate">
                      Best Developer Ever!
                    </p>
                  </div>
                </div>

                {/* Skills Badges - Responsive grid */}
                <div className="absolute bottom-2 md:bottom-0 left-2 md:left-0 right-2 md:right-0 flex flex-wrap gap-2 md:gap-4 grid grid-cols-2 md:grid-cols-3 justify-center">
                  {developerSkills.map((skill) => (
                    <Badge
                      key={skill.id}
                      variant="outline"
                      className="border-none px-2 md:px-3 py-1.5 md:py-2 text-[10px] md:text-xs font-medium bg-[linear-gradient(132.56deg,rgba(87,153,235,0.1)_5.63%,rgba(159,116,251,0.1)_106.18%)] text-[#336DA6] text-center"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentSection;
