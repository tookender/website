import { IconChevronDown } from "@tabler/icons-react";

export const Header = () => {
  return (
    <div className="h-[80vh] bg-grid-white/[0.2] relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(transparent_10%,black)]"></div>
      <div className="flex flex-col items-center justify-center text-center 2xl:mb-24 mt-20">
        <h1 className="z-20 font-bold text-8xl md:text-9xl">Korino</h1>

        <p className="z-20 flex flex-col items-center justify-center mt-4 text-2xl text-neutral-300 font-extralight">
          scroll down
          <IconChevronDown className="w-6 h-6 animate-bounce" />
        </p>

        <div className="z-10 absolute">
          <div className="w-[24rem] h-[18rem] sm:w-[32rem] sm:h-[26rem] md:w-[38rem] md:h-[25rem] xl:w-[48rem] xl:h-[35rem] bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        </div>
      </div>
    </div>
  );
};
