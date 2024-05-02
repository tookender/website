import { getDiscordID, getGuilds } from "@/actions/getDiscordInfo";
import { PrimaryButton, SecondaryButton } from "@/components/button";
import { DiscordPermissions } from "@/lib/discord";
import { Button, Link } from "@nextui-org/react";
import { SiDiscord } from "react-icons/si";

export function checkPermissions(
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

  return (
    <>
      <div className="flex w-screen items-center justify-center">
        <div className="flex w-[80vw] flex-col items-center">
          <h1 className="text-5xl font-black text-center mb-6">
            {guildsWithPerms.length === 0 ? "No servers found" : "Choose a server"}
          </h1>

          <div className={`flex flex-col justify-center items-center text-center ${guildsWithPerms.length === 0 ? "" : "hidden"}`}>
            <p className="text-xl text-neutral-400 md:max-w-[520px]">
              I have found no servers which you are either the owner of, or have sufficient permissions in to manage Korii.
              <br/>
            </p>

            <PrimaryButton text="Add to Discord" link="/bot">
              <SiDiscord/>
            </PrimaryButton>
          </div>

          <div className={`flex w-[95vw] sm:w-[85vw] md:w-[75vw] xxxl:w-[50vw] xxxxxl:w-[40vw] flex-wrap justify-center gap-6 ${guildsWithPerms.length === 0 ? "hidden" : ""}`}>
            {guildsWithPerms.map((guild) => (
              <div
                key={guild["id"]}
                className="relative flex h-[240px] w-[262px] flex-col"
              >
                <div className="relative flex h-[152px] items-center justify-center overflow-hidden">
                  <div
                    className="justify-center] absolute flex h-full w-full items-center rounded-lg bg-[#1f2129] bg-cover bg-center bg-repeat opacity-30 blur-[10px]"
                    style={{
                      backgroundImage: `url("https://cdn.discordapp.com/icons/${guild["id"]}/${guild["icon"]}.webp?size=128")`,
                    }}
                  />

                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width={64}
                    height={64}
                    className="z-2 absolute size-16 rounded-full border-2 border-zinc-800 bg-neutral-800"
                    src={`https://cdn.discordapp.com/icons/${guild["id"]}/${guild["icon"]}.webp?size=128`}
                    alt={`${guild["name"]} Icon`}
                  />
                </div>

                <div className="mt-2 flex flex-row justify-between">
                  <div>
                    <h1 className="font-bold">{guild["name"]}</h1>

                    <p className="text-sm font-light text-neutral-300" title={guild["owner"] ? "You own this server." : "You have Manage Guild permission in this server."}>
                      {guild["owner"] ? "Owner" : "Manager"}
                    </p>
                  </div>

                  <Button>Manage</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
