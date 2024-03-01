"use client";
import React, { useEffect } from "react";
import { Card } from "../components/card";
import { motion } from "framer-motion";
import {
  IconChevronDown,
  IconSwords,
  IconRobot,
  IconWorld,
  IconBrandPython,
  IconBrandTypescript,
  IconCoffee,
} from "@tabler/icons-react";

export default function Home() {
  useEffect(() => {
    const blob = document.getElementById("blob")!;
    window.addEventListener("load", (_) => {
      if (!window.matchMedia("(pointer:fine)").matches) {
        blob.classList.add("hidden");
      }
    });

    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    });
  });

  return (
    <div className="isolate min-h-screen">
      <div
        id="blob"
        className="animate-rotate bg-white opacity-50 overflow-hidden duration-1000 rounded-1/2 h-34 aspect-square fixed top-1/2 left-1/2"
      />
      <div id="blur" className="h-full w-full fixed z-10 backdrop-blur-12" />
      <div className="z-10 relative">
        <div className="h-[75vh] bg-grid-white/[0.2] relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="flex flex-col items-center justify-center text-center mb-24">
            {/* prettier-ignore */}
            <motion.div className="z-20" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.25 }}>
              <h1 className="font-bold text-8xl md:text-9xl">Korino</h1>
            </motion.div>

            {/* prettier-ignore */}
            <motion.div className="z-20" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -10 }} transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}>
              <p className="flex flex-col items-center justify-center mt-4 text-2xl text-neutral-300 font-extralight">
                scroll down
                <IconChevronDown className="w-6 h-6 animate-bounce" />
              </p>
            </motion.div>

            {/* prettier-ignore */}
            <motion.div className="z-10 absolute" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.25, delay: 0.1 }}>
              <div className="w-[24rem] h-[18rem] sm:w-[32rem] sm:h-[26rem] md:w-[48rem] md:h-[35rem] bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            </motion.div>
          </div>
        </div>

        <div className="pt-24 bg-gradient-to-b from-black to-neutral-900 border-b border-b-[#333]">
          {/* prettier-ignore */}
          <motion.h1 className="text-5xl font-bold text-center"
          whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.25, delay: 0.1 }}>
            Our Projects
          </motion.h1>

          {/* prettier-ignore */}
          <motion.p className="mt-4 text-center text-neutral-400"
          whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.25, delay: 0.1 }}>
            All the projects made by Korino Development. <br/> Most of these are mainly developed by <a className=" hover:text-white duration-150 underline" href="/ender">Ender</a>.
          </motion.p>

          {/* prettier-ignore */}
          <motion.div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-4 mt-6 pb-8"
                    whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.5, delay: 0.25 }}>
            <Card
              title="Korino PvP"
              description="Mini-game Minecraft server with Skywars, and more to come in the future."
              image="/avatar.webp"
              link="/pvp"
            >
              <IconSwords className="w-12 h-12 text-cyan-500"/>
            </Card>

            <Card
              title="Korii Bot"
              description="A easy-to-use multi-purpose Discord bot for managing servers, and more."
              image="/avatar.webp"
              link="/bot"
            >
              <IconRobot className="w-12 h-12 text-blue-400"/>
            </Card>

            <Card
              title="Korino Website"
              description="The site you are currently viewing. Used to display our projects."
              image="/avatar.webp"
              link="/"
            >
              <IconWorld className="w-12 h-12 text-purple-500"/>
            </Card>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black">
          {/* prettier-ignore */}
          <motion.h1 className="text-5xl font-bold text-center mt-8"
          whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.25, delay: 0.1 }}>
            Technologies
          </motion.h1>

          {/* prettier-ignore */}
          <motion.p className="mt-4 text-center text-neutral-400"
          whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.25, delay: 0.1 }}>
            A list of technologies we use at Korino Development <br/> to make what we do possible.
          </motion.p>

          {/* prettier-ignore */}
          <motion.div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-4 mt-6 pb-8"
                    whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ ease: "easeIn", duration: 0.5, delay: 0.25 }}>
            <Card
              title="Python"
              description="We use Python a lot for it's ease-of-use and great developer experience."
              image="/avatar.webp"
              link="https://python.org/"
            >
              <IconBrandPython className="w-12 h-12 text-yellow-500"/>
            </Card>

            <Card
              title="TypeScript"
              description="TypeScript is mainly utilized for our website, we use it as an alternative to JS."
              image="/avatar.webp"
              link="/bot"
            >
              <IconBrandTypescript className="w-12 h-12 text-sky-500"/>
            </Card>

            <Card
              title="Java"
              description="We use Java to write custom plugins for the Korino PvP server to customize the game-play."
              image="/avatar.webp"
              link="/"
            >
              <IconCoffee className="w-12 h-12 text-orange-400"/>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
