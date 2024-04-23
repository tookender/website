"use client";

import Head from "next/head";
import { Activity, useLanyard } from "use-lanyard";
import { useLastFM } from "use-last-fm";
import { Header } from "./header";

import { Image, Accordion, AccordionItem } from "@nextui-org/react";


function getImage(activity: Activity, large: boolean) {
  let image;
  if (large) {
    image = activity.assets?.large_image
  } else {
    image = activity.assets?.small_image
  }

  if (image?.startsWith("mp:external")) {
    return image?.replace(
      /mp:external\/([^\/]*)\/(http[s])/g,
      "$2:/",
    );
  } else {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${image}`;
  }
}

export default function EnderPage() {
  let song, activities;
  const banned_activites = ["Spotify", "ShareX"];
  const { data } = useLanyard("1022842005920940063");
  const lastFM = useLastFM("tookender", "e18ea12c25c865552c050a90f7c8b844");

  if (lastFM.status === "playing") {
    song = true;
  } else {
    song = false;
  }

  if (data) {
    if (data.discord_status != "offline") {
      activities = data.activities;
    }
  }

  // Will use later
  const statusColors: { [key: string]: string } = {
    "online": "#23a55a",
    "idle": "#f0b232",
    "dnd": "#f23f43",
    "offline": "#80848e",
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

      <p className="hidden bg-[#23a55a]" />
      <p className="hidden bg-[#f0b232]" />
      <p className="hidden bg-[#f23f43]" />
      <p className="hidden bg-[#80848e]" />

      <Header />

      <Accordion className="z-30 flex flex-col">
        <AccordionItem key="1" aria-label="Activities List" title="Activities" className="backdrop-blur bg-black/20 rounded-lg border border-zinc-800 p-2 font-bold fixed bottom-6 left-6">
          <p
            className={`${activities ? "hidden" : lastFM.song ? "hidden" : ""} font-light italic text-neutral-400`}
          >
            will be shown...
          </p>

          <div className={`${activities ? "" : "hidden"} overflow-hidden flex flex-col gap-2 p-2`}>
            <div
              className={`${lastFM.song ? "" : "hidden"} flex cursor-pointer flex-row gap-4 rounded-lg border border-zinc-800 bg-neutral-900 py-2 pl-2 pr-4 duration-300 hover:scale-105 active:scale-95`}
            >
              <Image
                src={lastFM.song?.art}
                className="h-[4.5rem] w-[4.5rem]"
                isBlurred={true}
                alt={`${lastFM.song?.name} by ${lastFM.song?.artist}`}
              />

              <div className="flex flex-col items-start justify-center">
                <h1 className="text-base font-bold">Spotify</h1>

                <p className="text-sm">
                  {lastFM.song?.name}
                  <br />
                  {lastFM.song?.artist}
                </p>
              </div>
            </div>

            {activities?.map((activity) => (
              <div
                key={activity.id}
                className={`${banned_activites.includes(activity.name) ? "hidden" : ""} flex cursor-pointer flex-row gap-4 rounded-lg border border-zinc-800 bg-neutral-900 py-2 pl-2 pr-4 duration-300 hover:scale-105 active:scale-95`}
              >
                <Image
                  src={getImage(activity, true)}
                  className="h-[4.5rem] w-[4.5rem]"
                  isBlurred={true}
                  alt={`${activity.name}`}
                />

                <div className="flex flex-col items-start justify-center">
                  <h1 className="text-base font-bold">
                    {activity.name.replace("Code", "Visual Studio Code")}
                  </h1>

                  <p className="text-sm">
                    {activity.details}
                    <br />
                    {activity.state}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}
