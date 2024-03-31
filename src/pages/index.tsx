import { Header } from "@/sections/index/header";
import { Projects } from "@/sections/index/projects";
import { Technologies } from "@/sections/index/technologies";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>korino/home</title>
        <meta content="korino/home" property="og:title" />
        <meta content="The home page for Korino Development showing off our projects and the technologies we use." property="og:description" />
        <meta content="https://korino.dev" property="og:url" />
        <meta content="#43B581" data-react-helmet="true" name="theme-color" />
      </Head>

      <Header />
      <Projects />
      <Technologies />
    </>
  );
}
