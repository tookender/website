"use client";

import Head from "next/head";
import { Header } from "./header";
import { ActivitySection } from "./activity";
import { useLanyard } from "use-lanyard";
import { useEffect, useState } from "react";

export default function EnderPage() {
  const [time, setTime] = useState<string>("00:00:00 p.m.");
  const [awake, setAwake] = useState<boolean>(true);

  function updateTime() {
    let current = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.M.`);
    setTimeout(updateTime, 60 * 1000);

    if (new Date().getHours() < 7) setAwake(false);
  }

  useEffect(() => {
    updateTime();
  });

  const { data } = useLanyard("1022842005920940063");
  const statusColors: { [key: string]: string } = {
    online: "#23a55a",
    idle: "#f0b232",
    dnd: "#f23f43",
    offline: "#80848e",
  };

  return (
    <>
      <Head>
        <title>ender</title>
        <meta content="doggo pics" property="og:title" />
        <meta
          content="a gallery of doggo pictures :D"
          property="og:description"
        />
        <meta content="https://korino.dev/doggo" property="og:url" />
        <meta content="#10b981" data-react-helmet="true" name="theme-color" />
      </Head>

      {/* Horrible practice, I'll improve on it later on. */}
      <p className="hidden border hover:border-[#fff]" />
      <p className="hidden border hover:border-[#df376d]" />
      <p className="hidden border hover:border-[#149eca]" />
      <p className="hidden border hover:border-[#38bdf8]" />
      <p className="hidden border hover:border-[#ffe262]" />
      <p className="hidden border hover:border-[#4280b1]" />
      <p className="hidden border hover:border-[#336791]" />
      <p className="hidden border hover:border-[#f0931c]" />
      <p className="hidden border hover:border-[#24b742]" />

      <p className="hidden text-[#23a55a]" />
      <p className="hidden text-[#f0b232]" />
      <p className="hidden text-[#f23f43]" />
      <p className="hidden text-[#80848e]" />

      <Header />
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="mt-8 text-3xl font-bold">🎮 My current activity</h1>

        <div className="flex gap-1 text-lg">
          <p>I&apos;m currently</p>

          <span
            className={`font-bold text-[${statusColors[data ? data.discord_status : "offline"]}]`}
          >
            {data?.discord_status}
          </span>

          <p>on Discord.</p>
        </div>

        <div className="text-lg w-[90vw] sm:w-2/3 text-center">
          It&apos;s currently <b>{time}</b> for me, so I am most likely <b>{awake ? "awake" : "asleep"}</b>.
        </div>

        <p className="hidden text-lg italic text-neutral-300 lg:block">
          look at the bottom left for more...
        </p>
        <div className="lg:hidden">
          <ActivitySection />
        </div>
      </div>

      <div className="fixed bottom-3 left-3 z-30 hidden flex-col lg:flex">
        <ActivitySection />
      </div>
    </>
  );
}
