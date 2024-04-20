import { Metadata } from "next";

const title = "korino/pvp";
const description =
  "Korino PvP is a Minecraft server featuring a unique Skywars game-mode.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: "https://korino.dev/bot",
    title: title,
    description: description,
  },
};

export default function PvPPage() {
  return (
    <>
      <div className="my-36 flex flex-col gap-2 items-center justify-center w-screen h-[80vh]">
        <div className="glow absolute z-0 h-[500px] w-[1000px] rounded-[100%] opacity-[0.15] mix-blend-normal blur-[75px] will-change-[filter]" />
        <h1 className="z-50 text-center text-5xl font-extrabold italic">
          coming soon...
        </h1>
      </div>
    </>
  );
}
