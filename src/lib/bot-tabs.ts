import { Fun } from "@/app/bot/tabs/fun";
import { UserInfo } from "@/app/bot/tabs/user_info";
import { Happiness } from "@/app/bot/tabs/happiness";
import { ServerInfo } from "@/app/bot/tabs/server_info";
import { Moderation } from "@/app/bot/tabs/moderation";

export interface BotTab {
  key: string;
  title: string;
  component: React.ComponentType;
}

export const botTabs: BotTab[] = [
  {
    key: "user_info",
    title: "User Info",
    component: UserInfo,
  },
  {
    key: "server_info",
    title: "Server Info",
    component: ServerInfo,
  },
  {
    key: "moderation",
    title: "Moderation",
    component: Moderation,
  },
  {
    key: "fun",
    title: "Fun",
    component: Fun,
  },
  {
    key: "happiness",
    title: "User Happiness",
    component: Happiness,
  },
]; 