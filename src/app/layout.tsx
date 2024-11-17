"use client";

import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

import { motion } from "motion/react";
import { Providers } from "./providers";
import { Footer } from "@/components/layout/footer";
import { Sidebar } from "@/components/layout/sidebar/menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en" className="dark">
      <head>
        <meta name="darkreader-lock" />
        <meta
          name="keywords"
          content="ender, ender2k89, tookender, korino.dev, korino, korii bot, korii-bot, web developer, full stack developer"
        />
        <meta name="theme-color" content="#10b981" />

        <link
          rel="dark icon"
          href="/dark_icon.ico"
          media="(prefers-color-scheme: light)"
        />

        <link
          rel="light icon"
          href="/light_icon.ico"
          media="(prefers-color-scheme: dark)"
        />

      </head>

      <body
        className={`${inter.className} antialiased flex h-dvh overflow-x-hidden`}
      >
        <NextTopLoader color={"linear-gradient(to right, #8668ac, #4d7ce5)"} />
        <Sidebar />

        <div className="w-full overflow-y-auto p-4 flex flex-col">
          <div className="min-h-12" />

          <Toaster />

          <motion.main
            className="mx-auto w-full max-w-[950px]"
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Providers>{children}</Providers>
          </motion.main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
