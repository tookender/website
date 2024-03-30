import Link from "next/link";
import { Card } from "@/components/card";
import { IconSwords, IconRobot, IconWorld } from "@tabler/icons-react";

export const Projects = () => {
  return (
    <div className="pt-24 bg-gradient-to-b from-black to-neutral-900 border-b border-b-[#333]">
      <h1 className="text-5xl font-bold text-center">Our Projects</h1>

      <p className="mt-4 text-center text-neutral-400">
        All the projects made by Korino Development. <br /> Most of these are
        mainly developed by{" "}
        <Link
          className=" hover:text-white duration-150 underline"
          href="/ender"
        >
          Ender
        </Link>
        .
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-4 mt-6 pb-16">
        <Card
          title="Korino PvP"
          description="Mini-game Minecraft server with Skywars, and more to come in the future."
          link="/pvp"
        >
          <IconSwords className="w-12 h-12 text-cyan-500" />
        </Card>

        <Card
          title="Korii Bot"
          description="A easy-to-use multi-purpose Discord bot for managing servers, and more."
          link="/bot"
        >
          <IconRobot className="w-12 h-12 text-blue-400" />
        </Card>

        <Card
          title="Korino Website"
          description="The site you are currently viewing. Used to display our projects."
          link="/"
        >
          <IconWorld className="w-12 h-12 text-purple-500" />
        </Card>
      </div>
    </div>
  );
};
