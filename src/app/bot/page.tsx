import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Korii Bot",
  description: "a multi-purpose Discord bot",
  openGraph: {
    title: "korii bot",
    description: "a multi-purpose Discord bot",
    url: "https://korino.dev/bot",
    images: [
      {
        url: "/dogs/dog17.webp",
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
        <div className="glow absolute -top-12 z-0 mt-12 h-[500px] w-[80vw] rounded-[100%] opacity-[0.15] mix-blend-normal blur-[75px] will-change-[filter]" />
        <h1 className="text-5xl mt-28 mb-96 text-center font-semibold bg-gradient-to-r from-sky-400 to-purple-500 text-transparent bg-clip-text">
          to be added soon...
        </h1>
      </div>
    </>
  );
}
