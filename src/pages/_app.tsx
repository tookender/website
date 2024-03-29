import "@/styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";
// import { Sidebar } from "@/components/sidebar_testing";

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setTimeout(() => {
      void new Audio("/pop.mp3").play().catch(() => null);
    }, 500);
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
        id="body"
        className={`text-white bg-gradient-to-br from-[#0a0a0a] to-black overflow-x-hidden ${GeistSans.className}`}
      >
        {/* <Sidebar/> */}
        <Navbar title="Korino" />

        <motion.div
          className="z-10 relative"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
        >
          <Component {...pageProps} key={router.pathname} />
        </motion.div>
        <Footer
          commitHash={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
          commitMessage={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
        />
      </div>
    </>
  );
}
