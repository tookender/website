import { motion } from "framer-motion";
import { useState } from "react";
import { dogImages } from "@/utils/doggo";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Doggo Test</title>
      </Head>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="grid grid-cols-3">
          {Object.keys(dogImages).map((dogKey) => (
            <div key={dogKey}>
              <img src={`/dogs/${dogKey}.webp`} alt={`Dog ${dogKey}`} />
            </div>
          ))}
          </div>

          <p className="text-center md:mt-8 font-semibold mt-2">
            test <br />
          </p>
        </div>
      </motion.div>
    </main>
  );
}