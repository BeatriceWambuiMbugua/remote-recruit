import { Check, X } from "lucide-react";
import Image from "next/image";

interface PricingCardProps {
  planName: string;
  price: string;
  period: string;
  features: {
    text: string;
    available: boolean;
  }[];
}

export const PricingCard = ({
  planName,
  price,
  period,
  features,
}: PricingCardProps) => {
  const isPremium = planName.toLowerCase() === "premium";

  return (
    <div
      className={`relative max-w-lg p-8 rounded-3xl border border-white/10 bg-white flex flex-col items-center shadow-[-15px_50px_150px_0px_#3159D31F] max-md:w-full max-sm:w-full
        ${isPremium ? "shadow-[0_0_60px_rgba(0,102,255,0.35)]" : ""}`}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-4 left-[22%] -translate-x-1/2 bg-gradient-to-r from-cyan-300 to-cyan-400 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2">
                <Image
                  src="/assets/premium-icon.png"
                  alt="Premium Star"
                  width={16}
                  height={16}
                  className="w-3 h-3 object-contain"
                />
            </div>
          <span>Premium </span>
        </div>
      )}

      {/* Price + Features Container */}
      <div className="grid grid-cols-5 gap-6 justify-center items-stretch w-full">
        {/* Price Section */}
        <div className="col-span-2 w-full bg-[#ECF2FF] max-md:p-2 p-6 rounded-xl text-center flex flex-col justify-center h-full">
          {!isPremium && (
            <h2 className="max-sm:text-lg text-2xl font-semibold text-[#1E3E85] mb-2">
              {planName}
            </h2>
          )}
          <p className=" text-lg md:text-3xl font-bold bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent">
            {price}
          </p>
          <p className="text-gray-400 text-base font-medium max-sm:text-sm">{period}</p>
        </div>

        {/* Features */}
        <ul className="col-span-3 space-y-4 mb-0 w-full h-full flex flex-col justify-center">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-start gap-3 ${
                feature.available ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {feature.available ? (
                <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] rounded-full shadow-sm">
                  <Check className="w-4 h-4 text-white" />
                </div>
              ) : (
                <div className="flex items-center justify-center w-7 h-7 bg-gradient-to-r from-[#A2A3B8] to-[#808191] rounded-full shadow-sm">
                  <X className="w-4 h-4 text-slate-50" />
                </div>
              )}
              <span className="font-medium text-base max-md:text-sm">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      {/* Button */}
      <div
        className={`w-full mt-6 rounded-3xl p-[2px] transition-all duration-200 ${
          isPremium
            ? "bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] shadow-lg shadow-blue-500/20"
            : "bg-gradient-to-r from-[#52B4DA] to-[#1E3E85]"
        }`}
      >
        <button
          className={`w-full py-6 font-semibold rounded-3xl transition-all duration-200 ${
            isPremium
              ? "bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] text-white hover:opacity-90"
              : "bg-white text-[#1E3E85] hover:bg-gradient-to-r hover:from-[#F3F7FF] hover:to-[#EAF3FF]"
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};