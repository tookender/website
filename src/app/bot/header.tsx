import { TbArrowRight } from "react-icons/tb";
import { SiDiscord, SiGithub } from "react-icons/si";
import { PrimaryButton, SecondaryButton } from "@/components/button";

export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="z-50 flex items-center rounded-lg bg-neutral-800 px-3 py-1 text-sm font-medium active:scale-[0.98] duration-300">
        <span className="mr-3">🎉</span>
        <span className="mr-1">v1.0.0 has been released!</span>
        <TbArrowRight height={15} width={15} />
      </button>

      <div className="glow absolute -top-12 z-0 h-[500px] w-[1000px] rounded-[100%] opacity-[0.15] mix-blend-normal blur-[75px] will-change-[filter]" />
      <div className="z-50 flex flex-col items-center ">
        <h1 className="mt-2 text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          The Discord bot for all your needs.
        </h1>

        <p className="mx-12 text-center text-lg text-neutral-400 md:max-w-[520px]">
          Korii is a fully customizable multi-purpose Discord bot for your
          Discord server, designed with ease-of-use in mind.
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <PrimaryButton text="Add to Discord" link="https://discord.com">
            <SiDiscord className="text-xl" />
          </PrimaryButton>

          <SecondaryButton
            text="GitHub"
            link="https://github.com/tookender/website"
          >
            <SiGithub className="text-xl" />
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};
