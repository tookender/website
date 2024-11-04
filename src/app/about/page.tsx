import { Metadata } from "next";
import { getRandomDog } from "@/lib/doggo";

export const metadata: Metadata = {
  title: "Home | About me",
  description: "some useless information about me",
  openGraph: {
    title: "about me",
    description: "some useless information about me",
    url: "https://korino.dev",
    images: [
      {
        url: getRandomDog(true)[0],
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
      <div className="mx-auto w-full max-w-[950px]">
        <h1 className="text-5xl font-semibold bg-gradient-to-r from-neutral-400 to-neutral-500 text-transparent bg-clip-text">
          About Me
        </h1>

        <p className="text-neutral-300/80 text-pretty mt-4 leading-8 lg:text-xl max-w-[600px]">
          Hey there. I&apos;m Ender, a student and full-stack developer from <b>Poland</b> currently living in <b>Germany</b>.
          I started coding at <b>10 years old</b> with Python and have since expanded to JavaScript, TypeScript, HTML, CSS, PostgreSQL and more.
          Outside of coding, I&apos;m into nature, travelling, and cars.
        </p>

        <br/>

        <p className="text-neutral-300/80 text-pretty -translate-y-4 leading-8 lg:text-xl max-w-[600px]">
          By the way, Ender isn&apos;t my real name, it is just for privacy reasons.
        </p>

        <br/>

        <p className="text-neutral-300/80 text-pretty leading-8 lg:text-xl max-w-[600px]">
          I&apos;m currently learning <b>Three.JS</b>, and I&apos;m excited to see what I can create with it.
          I&apos;m also a big fan of <b>Discord bots</b>, and I&apos;ve been playing with them for a while now.
        </p>
      </div>
    </>
  );
}
