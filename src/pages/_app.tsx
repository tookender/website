import "@/styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const blob = document.getElementById("blob");
    if (blob && window.matchMedia("(pointer:fine)").matches) {
      window.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: "forwards" }
        );
      });
    }

    // Pop sound effect on load
    if (typeof window === "undefined") {
      return;
    }

    void new Audio("/pop.mp3").play().catch(() => null);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Korino</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="korino, korino development, korii bot, korino pvp, korino website, web developer, github, typescript"
        />
        <meta
          name="description"
          content="A website to display all projects made by Korino Development."
        />
        <meta name="author" content="Korino Development" />
      </Head>

      <div
        className={`text-white bg-black overflow-x-hidden ${inter.className}`}
      >
        <Navbar title="Korino" />
        <motion.div
          animate={{ opacity: 0.5 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
          id="blob"
          className="animate-rotate bg-white opacity-50 overflow-hidden duration-1000 rounded-1/2 h-34 aspect-square fixed top-1/2 left-1/2"
        />
        <div id="blur" className="h-full w-full fixed z-10 backdrop-blur-12" />

        <motion.div
          className="z-10 relative"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
        >
          <Component {...pageProps} key={router.pathname} />
        </motion.div>
        <Footer />
      </div>
    </>
  );
}
