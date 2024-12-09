import { Metadata } from "next";
import { SlLocationPin } from "react-icons/sl";

import { ProjectsList } from "./projects-list";
import { TechnologyList } from "./technology-list";

export const metadata: Metadata = {
  title: "Home | Home",
  description: "my personal litte space on the internet",
  openGraph: {
    title: "home",
    description: "y personal litte space on the internet",
    url: "https://korino.dev",
    images: [
      {
        url: "/dogs/dog5.webp",
        width: 1512,
        height: 2016,
        alt: "my doggo",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <section>
        <div className="flex flex-row items-center gap-1 mb-2 text-neutral-400/80">
          <SlLocationPin aria-hidden="true" />
          <p>NRW, Germany</p>
        </div>

        <div className="flex flex-row text-4xl md:text-5xl leading-[60px] font-semibold">
          <h1>
            Hey, I&apos;m Ender
          </h1>

          <p className="wave-animation origin-bottom-right inline-block cursor-pointer">
            👋
          </p>
        </div>

        <p className="text-neutral-400/80 md:mt-4 text-pretty">
          I&apos;m a full-stack developer, who loves creating web-applications, and also Discord bots.
          I&apos;ve been programming since I was about 10 years old, and I&apos;m currently learning Three.JS
        </p>
      </section>

      <section>
        <h2 className="mt-14 text-3xl font-semibold">My Technologies</h2>
        
        <p className="text-neutral-400/80 mt-2 text-pretty">
          I use lots of technologies to help me build my projects and to make my life easier.
          Here are the main technologies that I currently use:
        </p>
        
        <TechnologyList />
      </section>

      <section>
        <h2 className="mt-14 text-3xl font-semibold">
          My Projects
        </h2>
        
        <p className="text-neutral-400/80 mt-2 text-pretty">
          Here is a list of some of my projects that I&apos;ve worked on:
          <br/>
          <span className="text-red-500">*</span> external site
        </p>
        
        <ProjectsList />
      </section>
    </>
  );
}
