"use client";
import Head from "next/head";
import { Header } from "./header";
import { Fun } from "./tabs/fun";
import { UserInfo } from "./tabs/user_info";
import { ServerInfo } from "./tabs/server_info";
import { Moderation } from "./tabs/moderation";
import { Happiness } from "./tabs/happiness";

import { Tab, Tabs } from "@nextui-org/react";
import { TabContainer } from "@/components/tabs";

const title = "korino/bot";
const description =
  "Korii is a fully customizable multi-purpose Discord bot for your Discord server, designed with ease-of-use in mind.";

export default function BotPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content="https://korino.dev/pvp" property="og:url" />
        <meta content="#10b981" data-react-helmet="true" name="theme-color" />
      </Head>


      <div className="flex h-[115vh] flex-col gap-2 sm:my-36 sm:h-fit">
        <Header />

        {/* We have to preload some colors so TailwindCSS recognizes them */}
        <p className="hidden text-[#FFD17C]" />
        <p className="hidden text-[#9D174D]" />
        <p className="hidden text-[#3498DB]" />
        <p className="hidden text-[#DB4039]" />
        <p className="hidden text-[#F6B5FA]" />

        <div className="mx-auto mt-12 flex flex-col justify-center gap-2 px-8 sm:mt-16 md:mt-24">
          <Tabs
            defaultSelectedKey={"user_info"}
            aria-label="Feature Showcase"
            className="w-[95vw] max-w-[85vw] overflow-auto sm:w-[80vw] xxl:w-[1200px]"
          >
            <Tab
              key="user_info"
              title="User Info"
              className="flex flex-col gap-2 rounded-lg border border-zinc-800"
            >
              <TabContainer>
                <UserInfo />
              </TabContainer>
            </Tab>

            <Tab
              key="server_info"
              title="Server Info"
              className="flex flex-col gap-2 rounded-lg border border-zinc-800"
            >
              <TabContainer>
                <ServerInfo />
              </TabContainer>
            </Tab>

            <Tab
              key="moderation"
              title="Moderation"
              className="flex flex-col gap-2 rounded-lg border border-zinc-800"
            >
              <TabContainer>
                <Moderation />
              </TabContainer>
            </Tab>

            <Tab
              key="fun"
              title="Fun"
              className="flex flex-col gap-2 rounded-lg border border-zinc-800"
            >
              <TabContainer>
                <Fun />
              </TabContainer>
            </Tab>

            <Tab
              key="happiness"
              title="User Happiness"
              className="flex flex-col gap-2 rounded-lg border border-zinc-800"
            >
              <TabContainer>
                <Happiness />
              </TabContainer>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
