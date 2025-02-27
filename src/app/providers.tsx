"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

import { HeroUIProvider } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);

    if (typeof window === "undefined") {
      return;
    }

    void new Audio("/pop.mp3").play().catch(() => null);
  }, [pathname]);

  return (
    <motion.main
      className="mx-auto w-full max-w-[950px]"
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <HeroUIProvider navigate={router.push}>
        {children}
      </HeroUIProvider>
    </motion.main>

  )
}