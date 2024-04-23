"use client";

import { Work } from "./work";
import { Activity } from "./activity";

import Head from "next/head";
import { Tab, Tabs } from "@nextui-org/react";

export default function EnderPage() {
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
      <p className="hidden border hover:border-[#f0931c]" />
      <p className="hidden border hover:border-[#24b742]" />

      <div className="flex w-full flex-col items-center justify-center mt-32">
        <Tabs aria-label="Options" size={"lg"} defaultSelectedKey={"work"}>
          <Tab key="work" title="Work">
            <Work />
          </Tab>

          <Tab key="other" title="Other">
            <Activity />
          </Tab>
        </Tabs>
      </div>

      <div className="flex w-screen items-center justify-center">
      </div>
    </>
  );
}
