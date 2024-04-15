"use client";

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
import Head from "next/head";
import { CiLocationOn, CiMusicNote1 } from "react-icons/ci";
import { Block } from "@/components/block";
import { Project } from "@/components/project";
import { TechItem } from "@/components/techitem";
import { useLanyard } from "react-use-lanyard";

export default function EnderPage() {
  let spotify;
	const lanyard = useLanyard({
		userId: "1022842005920940063",
	});
  
  if (lanyard.data?.data.spotify) {
    spotify = `${lanyard.data?.data?.spotify?.song} by ${lanyard.data?.data?.spotify?.album_art_url}`
  } else {
    spotify = "Not listening to anything"
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
        <div className="mb-12 mt-24 flex w-[90vw] flex-col">
          <div className="flex flex-col items-center gap-6 text-center">

            <h1 className="text-5xl font-extrabold sm:text-6xl">
              👋 Hey, I&apos;m Ender. {}
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
          <div className="mt-12 flex flex-col items-center justify-center gap-10 lg:flex-row">
            <Project
              title="Korino"
              rounded={true}
              icon="korino.webp"
              link="/"
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
              link="/bot"
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

          <div className="mt-12 flex flex-col items-center justify-center gap-1">
            <h1 className="text-xl font-bold">
              Currently listening to:
            </h1>

            <p className={`${lanyard.data?.data?.spotify ? 'hidden' : 'block'}`}>
              Nothing at all.
            </p>

            <iframe className={`w-[400px] h-[80px] rounded-2xl ${lanyard.data?.data?.spotify ? 'block' : 'hidden'}`} src={`https://open.spotify.com/embed/track/${lanyard.data?.data?.spotify?.track_id}`}/>
          </div>
        </div>
      </div>
    </>
  );
}