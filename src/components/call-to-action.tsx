import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="relative bg-[url('/assets/background-image.svg')] bg-cover bg-center min-h-screen px-4 flex flex-col justify-center items-center text-center overflow-hidden max-md:flex-col max-md:px-6 max-md:py-2 max-md:gap-12" data-aos="slide-up" data-aos-duration="1000">
      <div className="absolute -translate-x-96 top-[5%] w-14 h-14 rounded-full bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)] shadow-lg shadow-[#F29939]/30 z-20" />
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl w-full h-full">
        {/* Left section */}

        <div className="relative flex justify-start h-full max-md:order-2">
          {/* Decorative dot - above image */}

          <Image
            src="/assets/find-work.png"
            alt="Find work"
            width={800}
            height={500}
            className="absolute top-[15%] -translate-x-[15%] bg-white p-4 rounded-tr-3xl z-10"
          />
        </div>

        {/* Right section */}
        <div className="relative text-left max-md:order-1">
          <p className="text-base text-blue-950 mb-2">Are you ready?</p>
          <h1 className="text-5xl font-semibold mb-8 max-w-lg text-blue-950 leading-[1.2]">
            Help is only a few clicks away!
          </h1>
          <p className="text-lg text-gray-400 mb-9 max-w-sm leading-8">
            Click below to get set up super quickly and find help now!
          </p>

          <Button className="flex items-center gap-3 bg-sky-200 hover:bg-sky-300 text-[#1E3E85] rounded-full px-2 py-8 text-lg font-medium">
            <div className="p-4 rounded-full bg-sky-600 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
            <span>Get started</span>
          </Button>

          {/* Decorative dot - below text */}
          <div className="absolute -bottom-10 right-80 w-8 h-8 rounded-full bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)] shadow-lg shadow-[#1E3E85]/30" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
