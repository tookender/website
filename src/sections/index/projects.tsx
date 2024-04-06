import Link from "next/link";
import { Card } from "@/components/card";
import { TbSwords, TbRobot, TbWorld  } from "react-icons/tb";

export const Projects = () => {
  return (
    <div className="border-b border-b-[#333] bg-gradient-to-b from-black to-neutral-900 pt-24">
      <h1 className="text-center text-5xl font-bold">Our Projects</h1>

      <p className="mt-4 text-center text-neutral-400">
        All the projects made by Korino Development. <br /> Most of these are
        mainly developed by{" "}
        <Link
          className=" underline duration-150 hover:text-white"
          href="/ender"
        >
          Ender
        </Link>
        .
      </p>

      <div className="mx-4 mt-6 flex flex-col items-center justify-center gap-4 pb-16 md:flex-row">
        <Card
          title="Korino PvP"
          description="Mini-game Minecraft server with Skywars, and more to come in the future."
          link="/pvp"
        >
          <TbSwords className="h-12 w-12 text-cyan-500" />
        </Card>

        <Card
          title="Korii Bot"
          description="A easy-to-use multi-purpose Discord bot for managing servers, and more."
          link="/bot"
        >
          <TbRobot className="h-12 w-12 text-blue-400" />
        </Card>

        <Card
          title="Korino Website"
          description="The site you are currently viewing. Used to display our projects."
          link="/"
        >
          <TbWorld className="h-12 w-12 text-purple-500" />
        </Card>
      </div>
    </div>
  );
};
