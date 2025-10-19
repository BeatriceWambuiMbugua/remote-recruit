import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="relative bg-[url('/assets/background-image.svg')] bg-cover bg-center min-h-screen px-4 flex flex-col justify-center items-center text-center overflow-hidden md:flex-row md:px-6 md:py-2" data-aos="slide-up" data-aos-duration="2000">
      {/* Yellow decorative dot - responsive positioning */}
      <div className="absolute top-[5%] left-4 md:translate-x-96 w-14 h-14 rounded-full bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)] shadow-lg shadow-[#F29939]/30 z-20" />
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl w-full h-full">
        {/* Left section - Image */}
        <div className="relative flex justify-start h-full md:order-1 order-2">
          <Image
            src="/assets/find-work.png"
            alt="Find work"
            width={800}
            height={500}
            className="absolute top-[15%] md:-translate-x-[15%] -translate-x-[10%] bg-white p-4 rounded-tr-3xl z-10 max-md:relative max-md:top-[35%] max-md:w-full max-md:h-auto"
          />
        </div>

        {/* Right section - Text */}
        <div className="relative text-left md:order-2 order-1 z-20 mb-0 md:mb-0 max-md:mt-40">
          <p className="text-base text-blue-950 mb-2">Are you ready?</p>
          <h1 className="text-3xl md:text-5xl font-semibold mb-8 max-w-lg text-blue-950 leading-[1.2]">
            Help is only a few clicks away!
          </h1>
          <p className="text-lg text-gray-400 mb-9 max-w-sm leading-8">
            Click below to get set up super quickly and find help now!
          </p>

          <Button className="flex items-center gap-3 bg-sky-200 hover:bg-sky-300 text-[#1E3E85] rounded-full pl-2 pr-4 py-8 text-lg font-medium mb-6 md:mb-0">
            <div className="p-4 rounded-full bg-sky-600 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            Get started
          </Button>

          {/* Blue decorative dot - responsive positioning */}
          <div className="absolute -bottom-10 right-4 md:right-80 w-8 h-8 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-lg shadow-[#1E3E85]/30" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;