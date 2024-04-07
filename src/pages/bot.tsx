import Head from "next/head";
import { Header } from "@/sections/bot/header";
import { Fun } from "@/sections/bot/tabs/fun";
import { UserInfo } from "@/sections/bot/tabs/user_info";
import { ServerInfo } from "@/sections/bot/tabs/server_info";
import { Moderation } from "@/sections/bot/tabs/moderation";
import { Happiness } from "@/sections/bot/tabs/happiness";

import { Tab, Tabs } from "@nextui-org/react";
import { TabContainer } from "@/components/tabs";

// prettier-ignore
// sometimes prettier annoying
export default function Home() {
  return (
    <>
      <Head>
        <title>korino/bot</title>
        <meta content="korino/bot" property="og:title" />
        <meta
          content="Korii is a fully customizable multi-purpose Discord bot for your Discord server, designed with ease-of-use in mind."
          property="og:description"
        />
        <meta content="https://korino.dev/bot" property="og:url" />
        <meta content="#10b981" data-react-helmet="true" name="theme-color" />
      </Head>

      <div className="h-[115vh] sm:h-fit my-24 sm:my-36 flex flex-col gap-2">
        <Header/>

        {/* We have to preload some colors so TailwindCSS recognizes them */}
        <p className="hidden text-[#FFD17C]" />
        <p className="hidden text-[#9D174D]" />
        <p className="hidden text-[#3498DB]" />
        <p className="hidden text-[#DB4039]" />
        <p className="hidden text-[#F6B5FA]" />

        <div className="flex flex-col mx-auto gap-2 justify-center px-8 mt-12 sm:mt-16 md:mt-24">
          <Tabs aria-label="Feature Showcase" className="w-[95vw] sm:w-[80vw] xxl:w-[1200px] max-w-[85vw] overflow-auto">
            <Tab key="user_info" title="User Info" className="flex flex-col gap-2 rounded-lg border border-zinc-800">
              <TabContainer>
                <UserInfo />
              </TabContainer>
            </Tab>

            <Tab key="server_info" title="Server Info" className="flex flex-col gap-2 rounded-lg border border-zinc-800">
              <TabContainer>
                <ServerInfo />
              </TabContainer>
            </Tab>

            <Tab key="moderation" title="Moderation" className="flex flex-col gap-2 rounded-lg border border-zinc-800">
              <TabContainer>
                <Moderation />
              </TabContainer>
            </Tab>

            <Tab key="fun" title="Fun" className="flex flex-col gap-2 rounded-lg border border-zinc-800">
              <TabContainer>
                <Fun />
              </TabContainer>
            </Tab>

            <Tab key="happiness" title="User Happiness" className="flex flex-col gap-2 rounded-lg border border-zinc-800">
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
