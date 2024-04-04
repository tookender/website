import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { useEffect } from "react";
import { Block } from "@/components/block";
import {
  IconBrandCloudflare,
  IconBrandCss3,
  IconBrandDebian,
  IconBrandDiscord,
  IconBrandDocker,
  IconBrandGit,
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandUbuntu,
  IconBrandVscode,
  IconBrandWindows,
  IconCoffee,
  IconDatabase,
} from "@tabler/icons-react";

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/1022842005920940063"
  );
  const data = await res.json();
  return { props: { data } };
};
export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  useEffect(() => {
    const cursor = document.getElementById("cursor") as HTMLElement;

    window.addEventListener("click", () => {
      void new Audio("/click.ogg").play().catch(() => null);
    });

    window.addEventListener("mousedown", () => {
      cursor.style.scale = "1.25";
    });

    window.addEventListener("mouseup", () => {
      cursor.style.scale = "1";
    });

    window.addEventListener("mouseenter", (event) => {
      const clientX = event.clientX;
      const clientY = event.clientY;

      cursor.animate(
        {
          left: `${clientX - 15}px`,
          top: `${clientY - 15}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });

    window.addEventListener("mousemove", (event) => {
      const clientX = event.clientX;
      const clientY = event.clientY;

      cursor.animate(
        {
          left: `${clientX - 15}px`,
          top: `${clientY - 15}px`,
        },
        { duration: 5000, fill: "forwards" }
      );
    });
  });

  return (
    <>
      <div className="flex flex-col w-full max-w-4xl min-h-screen mx-auto mt-24 gap-12">
        <div
          className="left-0 top-0 h-[30px] w-[30px] rounded-full border border-zinc-600 z-30 pointer-events-none transition-all duration-300 fixed"
          id="cursor"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-extrabold">hey, I&apos;m ender 👋</h1>

          <p className="text-lg text-zinc-200">
            I&apos;m a self-taught full-stack developer from Poland. I&apos;m
            currently working at{" "}
            <Block
              text="Rustbyte"
              href="https://rustbyte.dev"
              image="rustbyte.svg"
              alt="Rustbyte logomark"
            />{" "}
            as a co-founder, however in my free time I work on{" "}
            <Block
              text="Korino"
              href="https://korino.dev"
              image="avatar.webp"
              alt="Ender profile picture"
            />{" "}
            which is the site you are on right now, which is just a little side
            project.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">what i do 💭</h1>

          <p className="text-lg text-zinc-200">
            I am passionate about everything that includes technology, such as
            building software, designing user interfaces, or even building
            computers. I don&apos;t really do any serious work in programming,
            since I am just a student. Most of the work I do, is just passion
            work.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">technologies 🖥️</h1>

          <p className="text-lg text-zinc-200">
            I use a lot of technologies to streamline my development process and
            to increase the quality of my code and my projects. Here is a small
            compact list of technologies I use.
          </p>

          <div className="mt-4 flex flex-row border items-center justify-center border-zinc-800 text-zinc-300 rounded-md gap-3 p-2">
            <IconBrandTypescript height={34} width={34} />
            <IconBrandJavascript height={34} width={34} />
            <IconBrandNodejs height={34} width={34} />
            <IconBrandNextjs height={34} width={34} />
            <IconBrandReact height={34} width={34} />
            <IconBrandPython height={34} width={34} />
            <IconBrandVscode height={34} width={34} />
            <IconBrandTailwind height={34} width={34} />
            <IconBrandGit height={34} width={34} />
            <IconBrandGithub height={34} width={34} />
            <IconBrandWindows height={34} width={34} />
            <IconBrandDocker height={34} width={34} />
            <IconBrandUbuntu height={34} width={34} />
            <IconBrandDebian height={34} width={34} />
            <IconCoffee height={34} width={34} />
            <IconBrandDiscord height={34} width={34} />
            <IconBrandCloudflare height={34} width={34} />
            <IconBrandHtml5 height={34} width={34} />
            <IconBrandCss3 height={34} width={34} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">projects 🛠️</h1>

          <p className="text-lg text-zinc-200 font-extrabold italic">soon™️</p>
        </div>
      </div>
    </>
  );
}
