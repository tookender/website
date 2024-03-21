import { motion } from "framer-motion";
import { Block } from "@/components/block";
import Code from "@/components/shiki";
import { IconChevronDown, IconChevronRight, IconExternalLink } from "@tabler/icons-react";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    window.addEventListener("click", (e) => {
      void new Audio("/pop.mp3").play();
    });
  });
  
  return (
    <main className="mx-4">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col w-full max-w-[1400px] min-h-screen mx-auto mt-24 gap-1">
          <h1 className="text-4xl font-extrabold">hey, I&apos;m ender 👋</h1>

          <p className="text-base">
            I&apos;m a full-stack developer, gamer, and Orthodox Christian.
            <br />I currently work at{" "}
            <Block
              text="Rustbyte"
              href="https://rustbyte.dev"
              image="rustbyte.svg"
              alt="Rustbyte logomark"
            />{" "}
            as the co-founder, and the owner of{" "}
            <Block
              text="Korino"
              href="https://korino.dev"
              image="avatar.webp"
              alt="Ender profile picture"
            />
            , which is just a passion project.
          </p>

          <a href="github.com" className="" target="_blank" rel="noreferrer">
            <div className="flex flex-col gap-1 h-full min-h-36 w-[450px]">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1">
                  <Image src="/avatar.webp" alt="Avatar" width={16} height={16}/>
                  <span className="text-sm">
                    username here
                  </span>
                </div>

                <div>
                  <IconExternalLink width={24} height={24}/>
                </div>
              </div>
            </div>
          </a>

        </div>
      </motion.div>
    </main>
  );
}
