import { motion } from "framer-motion";
import { Button } from "@/components/button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const image = document.getElementById("image") as HTMLImageElement;
    const description = document.getElementById("description") as HTMLElement;
    const dogImages = {
      dog1: "this dog just encountered a G-HOOOST 👻👻",
      dog2: "hehe hi",
      dog3: "huh?",
      dog4: "PLEASEE GIVE ME TREATS",
      dog5: "let me sleep hooman...",
      dog6: "WHAT WAS THAT?",
      dog7: "leave me alone im eepy",
      dog8: "WHY AM I IN A FLOWER POT???",
      dog9: "hiii :D",
      dog10: "zzzzzzz",
      dog11: "RAWRRRR",
      dog12: ":( i lost my toy",
      dog13: "welp :D",
      dog14: "i feel like a model",
      dog15: "hii hooman wana play??",
      dog16: "zzz...",
      dog17: "im too old for this 👴",
    };

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
      const randomIndex = Math.floor(
        Math.random() * Object.keys(dogImages).length
      );
      image.src = `/dogs/${Object.keys(dogImages)[randomIndex]}.webp`;
      description.textContent = Object.values(dogImages)[randomIndex];
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

          <img
            id="image"
            src="/dogs/dog1.webp"
            alt="404 Error Status Dog"
            width={488}
            height={426}
            className="hover:scale-105 active:scale-95 duration-500 rounded-md"
          />

          <p className="text-center mt-8 font-semibold" id="description">
            this dog just encountered a G-HOOOST 👻👻
          </p>

          <div className="flex flex-row gap-8 mt-6 text-2xl font-semibold">
            <Button text="Go Home" href="/" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
