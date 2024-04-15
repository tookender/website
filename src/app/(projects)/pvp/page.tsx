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
      <div className="my-36 flex flex-col gap-2">
        <h1 className="text-center text-5xl font-extrabold italic">
          coming soon...
        </h1>
      </div>
    </>
  );
}
