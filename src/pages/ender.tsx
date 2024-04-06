import Tippy from "@tippyjs/react";
import { useEffect, useState } from "react";
import {
  SiArchlinux,
  SiAstro,
  SiCloudflare,
  SiCoffeescript,
  SiCss3,
  SiDebian,
  SiDiscord,
  SiDocker,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVisualstudiocode,
  SiWindows11,
} from "react-icons/si";
import { IconType } from "react-icons/lib";
import { Block } from "@/components/block";
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";

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

  useEffect(() => {
    const cursor = document.getElementById("cursor") as HTMLElement;

    window.addEventListener("click", () => {
      void new Audio("/click.ogg").play().catch(() => null);
    });
  });

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

      <div className="mx-auto mt-24 flex min-h-screen w-[80%] flex-col gap-12 bg-gradient-to-br md:w-[60rem]">
        <div
          className="pointer-events-none fixed left-0 top-0 z-30 h-[30px] w-[30px] rounded-full border border-zinc-600 transition-all duration-300"
          id="cursor"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold">hey, I&apos;m ender 👋</h1>

          <p className="text-lg text-zinc-200">
            I&apos;m a self-taught full-stack developer from Poland. I&apos;m
            currently working at{" "}
            <Block
              text="Rustbyte"
              link="https://rustbyte.dev"
              image="rustbyte.svg"
              alt="Rustbyte logomark"
            />{" "}
            as a co-founder, however in my free time I work on{" "}
            <Block
              text="Korino"
              link="https://korino.dev"
              image="avatar.webp"
              alt="Ender profile picture"
            />{" "}
            which is the site you are on right now, which is just a little side
            project.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">what i do 💭</h1>

          <p className="text-lg text-zinc-200">
            I am passionate about everything that includes technology, such as
            building software, designing user interfaces, or even building
            computers. I don&apos;t really do any serious work in programming,
            since I am just a student. Most of the work I do, is just passion
            work.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">technologies 🖥️</h1>

          <p className="text-lg text-zinc-200">
            I use a lot of technologies to streamline my development process and
            to increase the quality of my code and my projects. Here is a
            compact list of technologies that I use.
          </p>

          <div className="mx-4 mt-4 flex flex-row flex-wrap items-center justify-center gap-3 rounded-md border border-zinc-800 p-2 text-zinc-300 md:mx-2">
            <TechItem icon={SiTypescript} name="TypeScript" />
            <TechItem icon={SiJavascript} name="JavaScript" />
            <TechItem icon={SiNodedotjs} name="Node.js" />
            <TechItem icon={SiNextdotjs} name="Next.js" />
            <TechItem icon={SiReact} name="React" />
            <TechItem icon={SiAstro} name="Astro" />
            <TechItem icon={SiTailwindcss} name="TailwindCSS" />
            <TechItem icon={SiHtml5} name="HTML 5" />
            <TechItem icon={SiCss3} name="CSS 3" />
            <TechItem icon={SiPython} name="Python" />
            <TechItem icon={SiCoffeescript} name="Java" />
            <TechItem icon={SiGit} name="Git" />
            <TechItem icon={SiGithub} name="GitHub" />
            <TechItem icon={SiWindows11} name="Windows 11" />
            <TechItem icon={SiUbuntu} name="Ubuntu" />
            <TechItem icon={SiDebian} name="Debian" />
            <TechItem icon={SiArchlinux} name="Arch Linux" />
            <TechItem icon={SiDocker} name="Docker" />
            <TechItem icon={SiVisualstudiocode} name="VSCode" />
            <TechItem icon={SiCloudflare} name="Cloudflare" />
            <TechItem icon={SiVercel} name="Vercel" />
            <TechItem icon={SiDiscord} name="Discord" />
            <TechItem icon={SiPostgresql} name="PostgreSQL" />
            <TechItem icon={SiSqlite} name="SQLite" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">projects 🛠️</h1>

          <p className="text-lg font-extrabold italic text-zinc-200">soon™️</p>
        </div>
      </div>
    </>
  );
}

const TechItem = ({ name, icon }: { name: string; icon: IconType }) => {
  return (
    <li className="flex">
      <Tippy content={<span>{name}</span>}>
        <span>{icon({ className: "w-6 h-6" })}</span>
      </Tippy>
    </li>
  );
};
