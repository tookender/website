import "@/styles/globals.css";
import "react-tippy/dist/tippy.css";
import Head from "next/head";
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import type { AppProps } from "next/app";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";

export default function App({ Component, pageProps, router }: AppProps) {
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
        className={`text-white overflow-x-hidden ${GeistSans.className} antialiased`}
      >
        <Navbar />

        <div className="min-h-screen mt-14">
          <Component {...pageProps} key={router.pathname} />
        </div>

        <Footer
          commitHash={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}
          commitMessage={process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_MESSAGE}
        />
      </div>
    </>
  );
}
