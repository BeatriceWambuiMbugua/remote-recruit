const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-[url('/assets/Background.svg')] bg-cover bg-center min-h-screen text-white space-y-4 px-4">
    <h1 className="text-2xl md:text-[53px] font-bold text-center">
      RemoteRecruit&apos;s Difference
    </h1>
    <p className="text-lg md:text-xl text-center max-w-[800px] text-white/80 font-medium leading-8 tracking-normal">
      RemoteRecruit is connecting the world with an easy-to-use platform that
      lets full-time, part-time, and freelance workers showcase their talents
      to businesses that need them. With no paywalls, no fees, and no
      barriers, there&apos;s nothing but you, your talents, and the next step in
      your career.
    </p>
  </div>

  );
};

export default HeroSection;
