import { Metadata } from "next";
import { Header } from "./header";
import { Projects } from "./projects";
import { Technologies } from "./technologies";

export const metadata: Metadata = {
  title: "korino/home",
  description: "Home page for showing off my projects.",
  openGraph: {
    url: "https://korino.dev",
    title: "korino/home",
    description: "Home page for showing off my projects.",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <Projects />
      <Technologies />
    </>
  );
}
