import Head from "next/head";
import { Tabs, TabsList, TabsTrigger } from "@/components/tabs";
import { Header } from "@/sections/bot/header";
import { Fun } from "@/sections/bot/tabs/fun";
import { UserInfo } from "@/sections/bot/tabs/user_info";
import { ServerInfo } from "@/sections/bot/tabs/server_info";
import { Moderation } from "@/sections/bot/tabs/moderation";
import { Happiness } from "@/sections/bot/tabs/happiness";

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

        <div className="flex justify-center px-8 mt-12 sm:mt-16 md:mt-24">
          <Tabs defaultValue="user_info" className="w-[95vw] sm:w-[80vw] xxl:w-[1200px] overflow-auto">
            <TabsList>
              <TabsTrigger value="user_info">User Info</TabsTrigger>
              <TabsTrigger value="server_info">Server Info</TabsTrigger>
              <TabsTrigger value="moderation">Moderation</TabsTrigger>
              <TabsTrigger value="fun">Fun</TabsTrigger> 
              <TabsTrigger value="happiness">User Happiness</TabsTrigger>
            </TabsList>

            <div className="absolute w-[86vw] sm:w-[80vw] xxl:w-[1200px] mt-2">
              <UserInfo />
              <ServerInfo />
              <Moderation />
              <Fun />
              <Happiness />
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}
