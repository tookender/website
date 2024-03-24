import { motion } from "framer-motion";
import { useState } from "react";
import { getRandomDog } from "@/utils/doggo";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const initialData = getRandomDog(false);
  const [currentPicture, setCurrentPicture] = useState(initialData[0]);
  const [currentDescription, setCurrentDescription] = useState(initialData[1]);

  const changeDoggo = () => {
    const data = getRandomDog(false);
    setCurrentPicture(data[0]);
    setCurrentDescription(data[1]);
  };

  return (
    <main>
      <Head>
        <title>Doggo</title>
        <link rel="preload" href="/dogs/dog1.webp" as="image"/>
        <link rel="preload" href="/dogs/dog2.webp" as="image"/>
        <link rel="preload" href="/dogs/dog3.webp" as="image"/>
        <link rel="preload" href="/dogs/dog4.webp" as="image"/>
        <link rel="preload" href="/dogs/dog5.webp" as="image"/>
        <link rel="preload" href="/dogs/dog6.webp" as="image"/>
        <link rel="preload" href="/dogs/dog7.webp" as="image"/>
        <link rel="preload" href="/dogs/dog8.webp" as="image"/>
        <link rel="preload" href="/dogs/dog9.webp" as="image"/>
        <link rel="preload" href="/dogs/dog10.webp" as="image"/>
        <link rel="preload" href="/dogs/dog11.webp" as="image"/>
        <link rel="preload" href="/dogs/dog12.webp" as="image"/>
        <link rel="preload" href="/dogs/dog13.webp" as="image"/>
        <link rel="preload" href="/dogs/dog14.webp" as="image"/>
        <link rel="preload" href="/dogs/dog15.webp" as="image"/>
        <link rel="preload" href="/dogs/dog16.webp" as="image"/>
        <link rel="preload" href="/dogs/dog17.webp" as="image"/>
      </Head>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            src={currentPicture}
            alt={currentDescription}
            width={500}
            height={500}
            className="max-w-[80vw] sm:mt-0 hover:cursor-pointer duration-500 rounded-md mx-16 active:scale-95 hover:scale-[1.02]"
            onClick={changeDoggo}
          />

          <p className="text-center md:mt-8 font-semibold mt-2">
            {currentDescription} <br />
          </p>
        </div>
      </motion.div>
    </main>
  );
}
