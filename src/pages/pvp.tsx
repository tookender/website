import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>korino/pvp</title>
        <meta content="korino/bot" property="og:title" />
        <meta
          content="Korino PvP is a Minecraft server featuring a unique Skywars game-mode."
          property="og:description"
        />
        <meta content="https://korino.dev/pvp" property="og:url" />
        <meta content="#10b981" data-react-helmet="true" name="theme-color" />
      </Head>

      <div className="my-36 flex flex-col gap-2">
        <h1 className="text-5xl italic text-center font-extrabold">
          coming soon...
        </h1>
      </div>
    </>
  );
}
