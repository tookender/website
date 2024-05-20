import { Metadata } from "next";
import Image from "next/image";
import { SiDiscord, SiGithub, SiGoogle, SiTwitter } from "react-icons/si";

const title = "korino/pvp";
const description =
  "Korino PvP is a Minecraft server featuring a unique Skywars game-mode.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    url: "https://korino.dev/pvp",
    title: title,
    description: description,
  },
};

export default function PvPPage() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center w-screen h-[80vh]">
        <div className="w-[460px] rounded-lg bg-neutral-900 flex items-center flex-col">
          <div className="flex flex-col items-center m-6">
            <Image src="/avatars/angry_cat.webp" className="rounded-md aspect-square object-cover" alt="Logo" height={64} width={64}/>

            <h1 className="font-bold text-2xl mt-4">
              Access korino.dev
            </h1>

            <p className="text-center mt-1 text-neutral-300 text-[15px]">
              Welcome! Please choose a method to continue.
            </p>

            <div className="flex flex-col gap-4 justify-between items-stretch mt-4">
              <div className="flex flex-row justify-between gap-2">
                <button className="flex w-[130px] h-[38px] gap-2 font-bold items-center justify-center px-6 py-1.5 text-neutral-100 bg-neutral-800 rounded-md border border-zinc-700">
                  <SiGoogle />
                  <span>Google
                  </span>
                </button>

                <button className="flex w-[130px] h-[38px] gap-2 font-bold items-center justify-center px-6 py-1.5 text-neutral-100 bg-neutral-800 rounded-md border border-zinc-700">
                  <SiTwitter />
                  <span>Twitter
                  </span>
                </button>
              </div>

              <div className="flex flex-row gap-4">
                <button className="flex w-[130px] h-[38px] gap-2 font-bold items-center justify-center px-6 py-1.5 text-neutral-100 bg-neutral-800 rounded-md border border-zinc-700">
                  <SiDiscord />
                  <span>Discord
                  </span>
                </button>

                <button className="flex w-[130px] h-[38px] gap-2 font-bold items-center justify-center px-6 py-1.5 text-neutral-100 bg-neutral-800 rounded-md border border-zinc-700">
                  <SiGithub />
                  <span>GitHub
                  </span>
                </button>
              </div>
            </div>

            <p className="text-neutral-300 my-4">
              or
            </p>

            <input className="border rounded-md text-sm text-neutral-300 p-1 border-zinc-800 bg-neutral-700" placeholder="example@korino.dev"></input>

            <button className="flex mt-2 gap-2 font-bold items-center justify-center px-6 py-1.5 text-neutral-100 bg-neutral-800 rounded-md border border-zinc-700">
              <span>Continue with email</span>
            </button>

            <div className="bg-zinc-800 h-[2px] w-full mt-6 mb-2"/>

            <div className="flex flex-row gap-1 mt-2">
              Secured by <a href="https://resend.com/" className="text-sky-500 font-bold underline">Resend</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
