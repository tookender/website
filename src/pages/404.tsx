import { motion } from "framer-motion";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-9xl font-extrabold">404</h1>
          <h2 className="mt-2 text-2xl">Not Found</h2>

          <div className="flex flex-row gap-8 mt-12 text-2xl font-semibold">
            <Button text="Home" href="/" />

            <Button text="Go Back" id="goBack" />
          </div>
        </div>
      </motion.div>
    </main>
  );
}
