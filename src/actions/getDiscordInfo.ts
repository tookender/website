"use server";

import { auth, currentUser, clerkClient } from "@clerk/nextjs/server";
import axios from "axios";

interface OauthAccessToken {
  token: string;
}

interface Guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
  approximate_member_count: number;
  approximate_presence_count: number;
}

async function getCurrentUser() {
  const user = auth();

  if (!user.userId) {
    throw new Error("User not found");
  }

  return await currentUser();
}

export async function getDiscordID() {
  const cu = await getCurrentUser();
  let discordId;

  if (cu?.externalAccounts) {
    const discordAccountInfo = cu.externalAccounts.find(
      (ea) => ea.provider === "oauth_discord",
    );

    if (discordAccountInfo) {
      discordId = discordAccountInfo.externalId;
    }
  }

  return discordId;
}

export async function getGuilds() {
  const user = await auth();

  if (!user.userId) {
    throw new Error("User not found");
  }

  const clerkResponse = await clerkClient.users.getUserOauthAccessToken(
    user.userId,
    "oauth_discord",
  );

  let accessToken;

  if (Array.isArray(clerkResponse)) {
    accessToken = clerkResponse[0].token;
  }

  const discordUrl =
    "https://discord.com/api/v10/users/@me/guilds?with_counts=true";

  const discordResponse = await fetch(discordUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const json = await discordResponse.json();
  return json;
}

export async function getBotGuilds(guildsWithPerms: Guild[]) {
  const apiUrl = `${process.env.API_URL}/bot_guilds`;

  const apiResponse = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(guildsWithPerms),
  });

  if (apiResponse.ok) {
    const responseData = await apiResponse.json();
    return responseData.guilds;
  } else {
    console.error("Error.");
    return [];
  }
}
