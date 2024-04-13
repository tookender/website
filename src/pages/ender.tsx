import { useState } from "react";
import {
  SiAstro,
  SiCoffeescript,
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
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { Block } from "@/components/block";

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/1022842005920940063",
  );
  const data = await res.json();
  return { props: { data } };
};

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [time, setTime] = useState("00:00:00 p.m.");
  const [awake, setAwake] = useState(true);

  function updateTime() {
    let current = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/Berlin",
    });
    setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.M.`);
    setTimeout(updateTime, 60 * 1000);

    if (new Date().getHours() < 7) setAwake(false);
  }

  return (
    <>
      <Head>
        <title>ender</title>
        <meta content="doggo pics" property="og:title" />
        <meta
          content="a gallery of doggo pictures :D"
          property="og:description"
        />
        <meta content="https://korino.dev/doggo" property="og:url" />
        <meta content="#10b981" data-react-helmet="true" name="theme-color" />
      </Head>

      <p className="hidden border hover:border-[#fff]" />
      <p className="hidden border hover:border-[#df376d]" />
      <p className="hidden border hover:border-[#149eca]" />
      <p className="hidden border hover:border-[#38bdf8]" />
      <p className="hidden border hover:border-[#ffe262]" />
      <p className="hidden border hover:border-[#4280b1]" />
      <p className="hidden border hover:border-[#336791]" />

      <div className="flex w-screen items-center justify-center">
        <div className="mt-24 flex w-[90vw] flex-col">
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-5xl font-extrabold sm:text-6xl">
              👋 Hey, I&apos;m Ender.
            </h1>

            <p className="flex items-center gap-1 text-xl">
              <CiLocationOn /> Germany
            </p>

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
            <div className="flex flex-wrap md:max-w-[75vw] lg:max-w-[60vw] xl:maw-w-[50vw] xxxl:max-w-[45vw] xxxxl:max-w-[40vw] xxxxxl:max-w-[35vw] xxxxxxl:max-w-[30vw] xxxxxxxl:max-w-[25vw] xxxxxxxxl:max-w-[20vw] justify-center gap-2">
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
          <div className="mt-24 flex flex-col items-center justify-center gap-10 lg:flex-row">
            <Project
              title="Korino"
              rounded={true}
              icon="korino.webp"
              link="https://korino.dev"
              description="You're here! A website for mainly showcasing all of my personal projects and the work I've done."
            >
              <TechItem name="Next.js" color="#fff">
                <SiNextdotjs />
              </TechItem>

              <TechItem name="React" color="#149eca">
                <SiReact />
              </TechItem>

              <TechItem name="TailwindCSS" color="#38bdf8">
                <SiTailwindcss />
              </TechItem>
            </Project>

            <Project
              title="Korii Bot"
              rounded={true}
              icon="korii.webp"
              link="https://korino.dev/bot"
              description="Korii is a fully customizable multi-purpose Discord bot for your Discord server."
            >
              <TechItem name="Python" color="#ffe262">
                <SiPython />
              </TechItem>

              <TechItem name="discord.py" color="#4280b1">
                <SiDiscord />
              </TechItem>
            </Project>

            <Project
              title="Rustbyte"
              link="https://rustbyte.dev"
              description="A small studio where we make mods for the game Rust to enhance the game-play and add new features."
            >
              <TechItem name="Astro" color="#df376d">
                <SiAstro />
              </TechItem>

              <TechItem name="React" color="#149eca">
                <SiReact />
              </TechItem>

              <TechItem name="TailwindCSS" color="#38bdf8">
                <SiTailwindcss />
              </TechItem>
            </Project>
          </div>
        </div>
      </div>
    </>
  );
}

interface ProjectProps {
  title: string;
  link: string;
  icon?: string;
  rounded?: boolean;
  description: string;
  children: React.ReactNode;
}

const Project = ({
  title,
  link,
  icon,
  rounded,
  description,
  children,
}: ProjectProps) => {
  const id = title.toLowerCase();
  return (
    <a
      className="md:px-18 flex h-[570px] max-w-[80vw] flex-col items-center gap-2 overflow-hidden rounded-3xl bg-neutral-900 px-4 pt-16 duration-300 hover:bg-[#1b1b1b] active:scale-[0.97] md:w-[650px] md:max-w-[600px]"
      href={link}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={`/logos/${icon ? icon : `${id}.svg`}`}
          width={32}
          height={32}
          alt={`Icon of ${title}`}
          className={`${rounded ? `rounded-full` : ``}`}
        />
        <h1 className="text-5xl font-semibold text-neutral-100 ">{title}</h1>
        <div className="mx-2 my-2 flex flex-wrap items-center justify-center gap-2 md:my-0 md:flex-row">
          {children}
        </div>

        <p className="w-2/3 text-center text-neutral-400">{description}</p>
      </div>

      <div>
        <Image
          src={`/previews/${id}.webp`}
          alt={`Preview of ${id}`}
          className="relative bottom-10 mt-16 rounded-2xl md:mx-auto md:w-[600px]"
          width="500"
          height="420"
        />
      </div>
    </a>
  );
};

const TechItem = ({
  name,
  color,
  children,
}: {
  name: string;
  color: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex cursor-pointer select-none flex-row items-center justify-center gap-2 rounded-full border border-zinc-800 bg-neutral-800 px-4 py-2 duration-300 active:scale-95 hover:border-[${color}]`}
    >
      {children}
      {name}
    </div>
  );
};
