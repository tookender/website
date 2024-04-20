"use client";

import {
  SiAstro,
  SiDiscord,
  SiDocker,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Head from "next/head";
import { CiLocationOn } from "react-icons/ci";
import { Block } from "@/components/portfolio/block";
import { Project } from "@/components/project";
import { TechItem } from "@/components/portfolio/tech_item";
// import { useLanyard } from "react-use-lanyard";
import { useLanyard } from "use-lanyard";
import { useLastFM } from "use-last-fm";
import { Card, Tab, Tabs } from "@nextui-org/react";
import { Work } from "./work";
import { Activity } from "./activity";

export default function EnderPage() {
  let song, artist, url, activities;
  const { data } = useLanyard("1022842005920940063");
  const lastFM = useLastFM("tookender", "e18ea12c25c865552c050a90f7c8b844");

  if (lastFM.status === "playing") {
    song = `${lastFM.song.name}`;
    artist = `${lastFM.song.artist}`;
    url = `${lastFM.song.url}`;
  }

  if (data) {
    if (data.discord_status != "offline") {
      activities = data.activities;
    }
  }

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

      <p className="hidden border hover:border-[#fff]" />
      <p className="hidden border hover:border-[#df376d]" />
      <p className="hidden border hover:border-[#149eca]" />
      <p className="hidden border hover:border-[#38bdf8]" />
      <p className="hidden border hover:border-[#ffe262]" />
      <p className="hidden border hover:border-[#4280b1]" />
      <p className="hidden border hover:border-[#336791]" />

      <div className="flex w-full flex-col items-center justify-center mt-32">
        <Tabs aria-label="Options" size={"lg"} defaultSelectedKey={"work"}>
          <Tab key="work" title="Work">
            <Work />
          </Tab>

          <Tab key="activity" title="Activity">
            <Activity />
          </Tab>
        </Tabs>
      </div>

      <div className="flex w-screen items-center justify-center">
      </div>
    </>
  );
}
