import { TbChevronDown } from "react-icons/tb";

export const Header = () => {
  return (
    <div className="relative flex h-[80vh] items-center justify-center bg-grid-white/[0.2]">
      <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(transparent_10%,black)]"></div>
      <div className="mt-20 flex flex-col items-center justify-center text-center 2xl:mb-24">
        <h1 className="z-20 text-8xl font-bold md:text-9xl">Korino</h1>

        <p className="z-20 mt-4 flex flex-col items-center justify-center text-2xl font-extralight text-neutral-300">
          scroll down
          <TbChevronDown className="animate-bounce h-6 w-6" />
        </p>

        <div className="absolute z-10">
          <div className="h-[18rem] w-[24rem] animate-blob rounded-full bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] opacity-70 mix-blend-multiply blur-xl filter sm:h-[26rem] sm:w-[32rem] md:h-[25rem] md:w-[38rem] xl:h-[35rem] xl:w-[48rem]" />
        </div>
      </div>
    </div>
  );
};
