"use client";

import { usePathname, useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

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
      <NextUIProvider navigate={router.push}>
        {children}
      </NextUIProvider>
    </motion.main>

  )
}