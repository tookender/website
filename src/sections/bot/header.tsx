import { PrimaryButton, SecondaryButton } from "@/components/button";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconArrowRight, IconBrandDiscordFilled, IconChevronDown } from "@tabler/icons-react";

export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <a
        className="flex items-center bg-neutral-800 rounded-lg px-3 py-1 text-sm font-medium"
        href=""
      >
        <span className="mr-3">🎉</span>
        <span className="mr-1">v1.0.0 has been released!</span>
        <IconArrowRight height={15} width={15} />
      </a>

      <h1 className="mt-2 text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        The Discord bot for all your needs.
      </h1>

      <p className="mx-12 md:max-w-[520px] text-center text-lg text-neutral-400">
        Korii is a fully customizable multi-purpose Discord bot for your
        Discord server, designed with ease-of-use in mind.
      </p>

      <div className="flex items-center justify-center gap-4 mt-4">
        <PrimaryButton text="Add to Discord" link="https://discord.com">
          <IconBrandDiscordFilled height={22} width={22} />
        </PrimaryButton>

        <SecondaryButton
          text="GitHub"
          link="https://github.com/tookender/Korii-Bot"
        >
          <IconBrandGithub height={22} width={22} />
        </SecondaryButton>
      </div>
    </div>
  );
};
