import "@/styles/doggo.css";
import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { useEffect } from "react";
import { getRandomDog } from "@/utils/doggo";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    const image = document.getElementById("image") as HTMLImageElement;
    const description = document.getElementById("description") as HTMLElement;

    image.addEventListener("load", (_) => {
      image.classList.forEach((className) => {
        if (className.includes("rotate")) {
          image.classList.remove(className);
        }
      });
      image.classList.add(`rotate-[${Math.floor(Math.random() * 11) - 5}deg]`);
    });

    image.addEventListener("click", (_) => {
      image.classList.forEach((className) => {
        if (className.includes("rotate")) {
          image.classList.remove(className);
        }
      });
      image.classList.add(`rotate-[${Math.floor(Math.random() * 11) - 5}deg]`);

      const data = getRandomDog(false);
      image.src = data[0];
      description.textContent = data[1];
    });
  });

  return (
    <main>
      <Head>
        <title>Doggo</title>
      </Head>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="hidden rotate-[-5deg]" />
          <div className="hidden rotate-[-4deg]" />
          <div className="hidden rotate-[-3deg]" />
          <div className="hidden rotate-[-2deg]" />
          <div className="hidden rotate-[-1deg]" />
          <div className="hidden rotate-[0deg]" />
          <div className="hidden rotate-[1deg]" />
          <div className="hidden rotate-[2deg]" />
          <div className="hidden rotate-[3deg]" />
          <div className="hidden rotate-[4deg]" />
          <div className="hidden rotate-[5deg]" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="image"
            src="/dogs/dog1.webp"
            alt="404 Error Status Dog"
            width={488}
            height={426}
            className="scale-75 md:scale-100 hover:scale-[0.8] md:hover:scale-105 active:scale-[0.7] md:active:scale-95 hover:cursor-pointer duration-500 rounded-md mx-16"
          />

          <p className="text-center md:mt-8 font-semibold" id="description">
            this dog just encountered a G-HOOOST 👻👻 <br />
            <i className="text-neutral-400 italic">
              click the dog for another picture
            </i>
          </p>

          <div className="flex flex-row gap-4 mt-6 text-2xl font-semibold">
            <Button text="Home" href="/" />
            <Button text="API" href="/api/doggo" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
