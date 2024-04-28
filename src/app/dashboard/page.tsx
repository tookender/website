import { getDiscordID, getGuilds } from "@/actions/getDiscordID";


export default async function Dashboard() {
  const discordID = await getDiscordID();
  const guilds = await getGuilds();

  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <h1 className="font-black text-5xl">
          Choose a server to manage
        </h1>

        Hello, your Discord ID is {discordID}, and your token is ...

        <p className="italic">
          This is work in progress. More coming soon.
        </p>
      </div>
    </>
  )
}