import { Fun } from "@/app/bot/tabs/fun";
import { UserInfo } from "@/app/bot/tabs/user_info";
import { Happiness } from "@/app/bot/tabs/happiness";
import { ServerInfo } from "@/app/bot/tabs/server_info";
import { Moderation } from "@/app/bot/tabs/moderation";
import { Economy } from "@/app/bot/tabs/economy";

export interface BotTab {
  key: string;
  title: string;
  component: React.ComponentType;
}


export const mobileBotTabs: BotTab[] = [
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
    key: "economy",
    title: "Economy",
    component: Economy
  }
]; 

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
  {
    key: "economy",
    title: "Economy",
    component: Economy
  }
]; 