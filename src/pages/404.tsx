import { motion } from "framer-motion";
import { Button } from "@/components/button";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <main>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <Image
            src="/404.webp"
            alt="404 Error Status Dog"
            width={488}
            height={426}
            className="rounded-md hover:scale-105 duration-500"
          />

          <p className="text-center mt-8 font-semibold">
            The page you are trying to visit, either does not exist, <br /> or
            it has not yet been implemented.
          </p>

          <div className="flex flex-row gap-8 mt-6 text-2xl font-semibold">
            <Button text="Home" href="/" />

            <Button text="Go Back" id="goBack" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
