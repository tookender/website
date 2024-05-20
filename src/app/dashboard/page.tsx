import "@/styles/dashboard.Module.css";
import { getGuilds, getBotGuilds } from "@/actions/getDiscordInfo";
import { PrimaryButton } from "@/components/button";
import { DiscordPermissions } from "@/lib/discord";
import { Button } from "@nextui-org/react";
import { SiDiscord } from "react-icons/si";

function checkPermissions(
  permissions: number | string,
  permission: DiscordPermissions,
): boolean {
  return (Number(permissions) & permission) != 0;
}

export default async function Dashboard() {
  const guilds: [] = await getGuilds();
  const guildsWithPerms = guilds.filter((guild) =>
    checkPermissions(guild["permissions"], DiscordPermissions.manageGuild),
  );
  const guildsWithBot: [] = await getBotGuilds(guildsWithPerms);
  let guildsWithBotIDs: [] = [];

  guildsWithBot.map((guild) => {
    guildsWithBotIDs.push(guild["id"]);
  });

  return (
    <>
      <div className="flex w-screen items-center justify-center">
        <div className="flex w-[80vw] flex-col items-center">
          <h1 className="mb-6 text-center text-5xl font-black">
            {guildsWithPerms.length === 0
              ? "No servers found"
              : "Choose a server"}
          </h1>

          <div
            className={`flex flex-col items-center justify-center text-center ${guildsWithPerms.length === 0 ? "" : "hidden"}`}
          >
            <p className="text-xl text-neutral-400 md:max-w-[520px]">
              I have found no servers which you are either the owner of, or have
              sufficient permissions in to manage Korii.
              <br />
            </p>

            <PrimaryButton text="Add to Discord" link="/bot">
              <SiDiscord />
            </PrimaryButton>
          </div>

          <div
            className={`flex w-[95vw] flex-wrap justify-center gap-6 sm:w-[85vw] md:w-[75vw] xxxl:w-[50vw] xxxxxl:w-[40vw] ${guildsWithPerms.length === 0 ? "hidden" : ""}`}
          >
            {guildsWithPerms.map((guild) => (
              <div
                key={guild["id"]}
                className="relative flex h-[240px] w-[262px] flex-col rounded-lg"
              >
                <div className="relative flex h-[152px] items-center justify-center overflow-hidden rounded-lg">
                  <div
                    className={`absolute flex h-full w-full scale-125 items-center justify-center rounded-lg bg-[#23272a] bg-cover bg-center bg-repeat opacity-30 ${`${guild["icon"]}`.includes("null") ? "" : "blur-[10px]"}`}
                    style={{
                      backgroundImage: `url(https://cdn.discordapp.com/icons/${guild["id"]}/${guild["icon"]}.webp?size=128)`,
                    }}
                  />

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width={64}
                    height={64}
                    className="z-2 absolute size-16 rounded-full border-2 border-zinc-600 bg-neutral-800"
                    src={`https://cdn.discordapp.com/icons/${guild["id"]}/${guild["icon"]}.webp?size=128`}
                    alt={`${guild["name"]} Icon`}
                  />
                </div>

                <div className="mt-4 flex flex-row justify-between">
                  <div>
                    <h1 className="font-bold">{guild["name"]}</h1>

                    <p
                      className="text-sm font-light text-neutral-300"
                      title={
                        guild["owner"]
                          ? "You own this server."
                          : "You have Manage Guild permission in this server."
                      }
                    >
                      {guild["owner"] ? "Owner" : "Manager"}
                    </p>
                  </div>

                  <a
                    href={
                      guildsWithBotIDs.includes(guild["id"])
                        ? `/dashboard/${guild["id"]}`
                        : `https://discord.com/oauth2/authorize?scope=bot+applications.commands&response_type=code&redirect_uri=https%3A%2F%2Fkorino.dev%2Fdashboard&permissions=8&client_id=1044996444119109702&guild_id=${guild["id"]}`
                    }
                  >
                    <Button
                      color={
                        guildsWithBotIDs.includes(guild["id"])
                          ? "default"
                          : "primary"
                      }
                    >
                      {guildsWithBotIDs.includes(guild["id"])
                        ? "Manage"
                        : "Invite"}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
