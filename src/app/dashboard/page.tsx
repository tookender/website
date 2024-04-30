import { getDiscordID, getGuilds } from "@/actions/getDiscordInfo";
import { Button } from "@nextui-org/react";


export default async function Dashboard() {
  const discordID = await getDiscordID();
  const guilds: [] = await getGuilds();

  return (
    <>
      <div className="w-screen flex items-center justify-center">
        <div className="w-[80vw] flex flex-col items-center">
          <h1 className="font-black text-5xl">
            Choose a server to manage
          </h1>

          Hello, your Discord ID is {discordID}, here is a list of your guilds:
          
          <div className="flex flex-wrap gap-6 justify-center w-[50vw]">
            {guilds.map((guild) =>
              <div key={guild["id"]} className="relative flex flex-col h-[240px] w-[262px]">
                <div className="flex h-[152px] relative overflow-hidden items-center justify-center">
                  <div className="w-full opacity-30 h-full absolute flex items-center justify-center] rounded-lg bg-repeat blur-[10px] bg-center bg-cover bg-[#1f2129]" style={ { backgroundImage: `url("https://cdn.discordapp.com/icons/${guild["id"]}/${guild["icon"]}.webp?size=128")` } }/>

                  {/* next/image requires local files, this is from discord CDN */}
                  {/* next-ui/image adds dumb default styles which break the entire look */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width={64}
                    height={64}
                    className="relative size-16 rounded-full z-2 border-2 bg-neutral-800 border-zinc-800"
                    src={`https://cdn.discordapp.com/icons/${guild["id"]}/${guild["icon"]}.webp?size=128`}
                    alt={`${guild["name"]} Icon`}
                  />
                </div>

                <div className="flex flex-row justify-between mt-2">
                  <div>
                    <h1 className="font-bold">
                      {guild["name"]}
                    </h1>

                    <p className="text-neutral-300 text-sm font-light">
                      Owner
                    </p>
                  </div>

                  <Button>
                    Manage
                  </Button>
                </div>
              </div>
              // // <div key={guild["id"]} className="w-96 items-center rounded-lg bg-neutral-800 border border-zinc-900 py-5 px-2 flex flex-row gap-2">
              //   {/* <img
              //     width={64}
              //     height={64}
              //     className="size-16 rounded-full"
              //     src={`https://cdn.discordapp.com/icons/${guild["id"]}/${guild["icon"]}.webp?size=128`}
              //     alt={`${guild["name"]} Icon`}
              //   />

              //   <div className="flex flex-col gap-2">
              //     <h1 className="text-xl font-bold truncate max-w-64" title={guild["name"]}>
              //       {guild["name"]}
              //     </h1>

              //     <Button className="w-fit">
              //       Manage
              //     </Button>
              //   </div>
              // </div> */}
            )}
          </div>

          <p className="italic">
            This is work in progress. More coming soon.
          </p>
        </div>
      </div>
    </>
  )
}