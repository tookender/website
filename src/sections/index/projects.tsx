import Link from "next/link";
import { Card } from "@/components/card";
import { TbRobot, TbWorld, TbSwords } from "react-icons/tb";

const projects = [
  {
    title: "Korino PvP",
    description:
      "Mini-game Minecraft server with Skywars, and more to come in the future.",
    link: "/pvp",
    icon: TbSwords,
    color: "text-cyan-500",
  },
  {
    title: "Korii Bot",
    description:
      "An easy-to-use multi-purpose Discord bot for managing servers, and more.",
    link: "/bot",
    icon: TbRobot,
    color: "text-blue-400",
  },
  {
    title: "Korino Website",
    description:
      "The site you are currently viewing. Used to display our projects.",
    link: "/",
    icon: TbWorld,
    color: "text-purple-500",
  },
];

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
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          >
            <project.icon className={`h-12 w-12 ${project.color}`} />
          </Card>
        ))}
      </div>
    </div>
  );
};
