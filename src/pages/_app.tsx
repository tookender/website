import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { useEffect } from "react";
import { Router } from "next/router";
import { GeistSans } from "geist/font/sans";
import { NextUIProvider } from "@nextui-org/react";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
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
        <link rel="icon" href="/logo.png" />
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
        <meta name="darkreader" content="korino.dev" />
      </Head>

      <div className={`${GeistSans.className} antialiased dark`}>
        <Navbar />

        <NextUIProvider className="mt-14 min-h-screen">
          <Component {...pageProps} key={router.pathname} />
        </NextUIProvider>

        <Footer
          commitHash={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
          commitMessage={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
        />
      </div>
    </>
  );
}
