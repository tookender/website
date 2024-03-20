import { motion } from "framer-motion";
import { Block } from "@/components/block";
import Code from "@/components/shiki";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { useEffect } from "react";

export default function Home() {
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
            I&apos;m a full-stack developer, gamer, and Orthodox Christian ☦️
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

          <p className="text-neutral-300">
            Prefer code?
            <select className="w-36 ml-2 rounded text-sm outline-none border bg-neutral-800 text-neutral-100 border-neutral-700 focus:bg-neutral-700 focus:border-neutral-500 duration-500">
              <option disabled={true} className="text-white">
                Choose a language...
              </option>
              <option value="python">🐍 Python</option>
              <option value="javascript">🚀 JavaScript</option>
              <option value="java">☕️ Java</option>
              <option value="html">🌐 HTML</option>
            </select>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
