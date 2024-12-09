import { Button } from "@nextui-org/react";
import { SiDiscord } from "react-icons/si";
import { TbArrowRight, TbSettings } from "react-icons/tb";

export const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button className="flex items-center rounded-lg bg-neutral-800 px-3 py-1 text-sm font-medium duration-300 active:scale-[0.98]">
        <span className="mr-3">🎉</span>
        <span className="mr-1">v1.0.0 beta has released!</span>
        <TbArrowRight height={15} width={15} />
      </button>

      <div className="flex flex-col items-center">
        <h1 className="mt-2 text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          The Discord bot for all your needs.
        </h1>

        <p className="mx-12 text-center text-lg text-neutral-400 md:max-w-[520px]">
          Korii is a fully customizable multi-purpose Discord bot for your
          Discord server, designed with ease-of-use in mind.
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <Button variant="solid" href="https://discord.com" startContent={<SiDiscord className="text-xl" />}>
            Add to Discord
          </Button>

          <Button variant="faded" href="/dashboard" startContent={<TbSettings className="text-xl" />}>
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};