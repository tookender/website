import { motion } from "framer-motion";
import { Card } from "@/components/card";
import Image from "next/image";
import { Block } from "@/components/block";

export default function Home() {
  return (
    <main className="flex items-start justify-start text-start">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl">hey, I&apos;m ender 👋</h1>

          <p className="text-base">
            I&apos;m a full-stack developer, gamer, and community builder. I am
            the co-founder of{" "}
            <Block
              text="Rustbyte"
              href="https://rustbyte.dev"
              image="rustbyte.svg"
              alt="Rustbyte logomark"
            />{" "}
            and the owner of{" "}
            <Block
              text="Korino"
              href="https://korino.dev"
              image="avatar.webp"
              alt="Ender profile picture"
            />
          </p>
        </div>
      </motion.div>
    </main>
  );
}
