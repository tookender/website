import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { useEffect } from "react";
import { getRandomDog } from "@/utils/doggo";

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

          {/* Ignore warning from Next.js */}
          {/* Can't use <Image/> since we edit the src attribute */}
          <img
            id="image"
            src="/dogs/dog1.webp"
            alt="404 Error Status Dog"
            width={488}
            height={426}
            className="hover:scale-105 active:scale-95 duration-500 rounded-md"
          />

          <p className="text-center mt-8 font-semibold" id="description">
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
