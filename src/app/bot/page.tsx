"use client";
// import { Metadata } from "next";
import { Header } from "./header";
import { botTabs, mobileBotTabs } from "@/lib/bot-tabs";
import { Tabs, Tab } from "@heroui/react";

// export const metadata: Metadata = {
//   title: "Korii Bot",
//   description: "a multi-purpose Discord bot",
//   openGraph: {
//     title: "korii bot",
//     description: "a multi-purpose Discord bot",
//     url: "https://korino.dev/bot",
//     images: [
//       {
//         url: "/dogs/dog17.webp",
//         width: 1512,
//         height: 2016,
//         alt: "my doggo",
//       },
//     ],
//   },
// }

interface TabProps {
  children?: React.ReactNode;
}

const TabContainer = ({ children }: TabProps) => {
  return <div className="mx-2 flex flex-col gap-2">{children}</div>;
};

export default function Home() {
  return (
    <>
      <div className="flex h-[115vh] flex-col gap-2 mt-4 sm:mb-36 sm:h-fit">
        <Header />

        <p className="hidden text-[#FFD17C]" />
        <p className="hidden text-[#9D174D]" />
        <p className="hidden text-[#3498DB]" />
        <p className="hidden text-[#DB4039]" />
        <p className="hidden text-[#F6B5FA]" />

        <div className="mx-auto mt-12 hidden flex-col justify-center gap-2 px-8 sm:mt-16 md:mt-24 w-full sm:flex">
          <Tabs
            defaultSelectedKey="user_info"
            aria-label="Feature Showcase"
            className="overflow-auto"
          >
            {botTabs.map(({ key, title, component: Component }) => (
              <Tab
                key={key}
                title={title}
                className="flex flex-col gap-2 rounded-lg border"
              >
                <TabContainer>
                  <Component />
                </TabContainer>
              </Tab>
            ))}
          </Tabs>
        </div>

        <div className="mx-auto mt-12 flex flex-col justify-center gap-2 px-8 sm:mt-16 md:mt-24 w-full sm:hidden">
          <Tabs
            defaultSelectedKey="moderation"
            aria-label="Feature Showcase"
            className="overflow-auto"
          >
            {mobileBotTabs.map(({ key, title, component: Component }) => (
              <Tab
                key={key}
                title={title}
                className="flex flex-col gap-2 rounded-lg border"
              >
                <TabContainer>
                  <Component />
                </TabContainer>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}
