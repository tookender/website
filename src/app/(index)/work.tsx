import { Block } from "@/components/portfolio/block";
import { TechItem } from "@/components/portfolio/tech_item";
import { CiLocationOn } from "react-icons/ci";
import {
  SiAstro,
  SiDiscord,
  SiDocker,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Tabs, Tab, Image } from "@nextui-org/react";
import { Korino } from "./projects/korino";
import { Rustbyte } from "./projects/rustbyte";
import { Bot } from "./projects/bot";
import { PvP } from "./projects/pvp";

export const Work = () => {
  return (
    <div className="mb-12 mt-6 flex w-[90vw] flex-col">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-extrabold sm:text-6xl">
          👋 Hey, I&apos;m Ender.
        </h1>

        <div className="flex items-center gap-1 text-xl">
          <CiLocationOn /> Germany
        </div>

        <p className="text-xl sm:w-2/3">
          A passionate developer and student working on{" "}
          <Block
            text="Rustbyte"
            link="https://rustbyte.dev"
            image="/logos/rustbyte.svg"
            alt="Rustbyte logo"
          />{" "}
          as a co-founder and on{" "}
          <Block
            text="Korino"
            link="https://korino.dev"
            image="/logos/korino.webp"
            alt="Korino logo"
          />{" "}
          as a passion project.
        </p>

        {/* :D */}
        <div className="xl:maw-w-[50vw] flex flex-wrap justify-center gap-2 md:max-w-[75vw] lg:max-w-[60vw] xxxl:max-w-[45vw] xxxxl:max-w-[40vw] xxxxxl:max-w-[35vw] xxxxxxl:max-w-[30vw] xxxxxxxl:max-w-[25vw] xxxxxxxxl:max-w-[20vw]">
          <TechItem name="Next.js" color="#fff">
            <SiNextdotjs />
          </TechItem>

          <TechItem name="React" color="#149eca">
            <SiReact />
          </TechItem>

          <TechItem name="TypeScript" color="#149eca">
            <SiTypescript />
          </TechItem>

          <TechItem name="JavaScript" color="#ffe262">
            <SiJavascript />
          </TechItem>

          <TechItem name="TailwindCSS" color="#38bdf8">
            <SiTailwindcss />
          </TechItem>

          <TechItem name="Astro" color="#df376d">
            <SiAstro />
          </TechItem>

          <TechItem name="Python" color="#ffe262">
            <SiPython />
          </TechItem>

          <TechItem name="discord.py" color="#4280b1">
            <SiDiscord />
          </TechItem>

          <TechItem name="PostgreSQL" color="#336791">
            <SiPostgresql />
          </TechItem>

          <TechItem name="Docker" color="#336791">
            <SiDocker />
          </TechItem>

          <TechItem name="Git" color="#336791">
            <SiGit />
          </TechItem>
        </div>
      </div>

      {/* <h1 className="text-5xl font-bold">
        Projects
      </h1> */}
      <div className="mt-12 flex flex-col items-center justify-center gap-10">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
          <Tab
            key="korino"
            title={
              <div className="flex items-center space-x-2">
                <Image
                  src="/logos/korino.webp"
                  height={24}
                  width={24}
                  alt="Korino Logo"
                  className="min-h-4 min-w-4 rounded-full"
                />
                <span>Korino</span>
              </div>
            }
          >
            <Korino />
          </Tab>

          <Tab
            key="bot"
            title={
              <div className="flex items-center space-x-2">
                <Image
                  src="/logos/korii.webp"
                  height={24}
                  width={24}
                  alt="Korii Bot Logo"
                  className="min-h-4 min-w-4 rounded-none"
                />
                <span>Korii Bot</span>
              </div>
            }
          >
            <Bot />
          </Tab>

          <Tab
            key="pvp"
            title={
              <div className="flex items-center space-x-2">
                <Image
                  src="/logos/minecraft.webp"
                  height={24}
                  width={24}
                  alt="Korino PvP Logo"
                  className="min-h-4 min-w-4 rounded-full"
                />
                <span>Korino PvP</span>
              </div>
            }
          >
            <PvP />
          </Tab>

          <Tab
            key="rustbyte"
            title={
              <div className="flex items-center space-x-2">
                <Image
                  src="/logos/rustbyte.svg"
                  height={24}
                  width={24}
                  alt="Rustbyte Logo"
                  className="min-h-4 min-w-4 rounded-none"
                />
                <span>Rustbyte</span>
              </div>
            }
          >
            <Rustbyte />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
