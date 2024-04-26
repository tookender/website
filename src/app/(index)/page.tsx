import Head from "next/head";
import { ActivityComponent } from "./activity";
import { SpotifyComponent } from "./spotify";

export default function EnderPage() {
  return (
    <>
      <Head>
        <title>ender</title>
        <meta content="doggo pics" property="og:title" />
        <meta
          content="a gallery of doggo pictures :D"
          property="og:description"
        />
        <meta content="https://korino.dev/doggo" property="og:url" />
        <meta content="#10b981" data-react-helmet="true" name="theme-color" />
      </Head>

      {/* Horrible practice, I'll improve on it later on. */}
      <p className="hidden border hover:border-[#fff]" />
      <p className="hidden border hover:border-[#df376d]" />
      <p className="hidden border hover:border-[#149eca]" />
      <p className="hidden border hover:border-[#38bdf8]" />
      <p className="hidden border hover:border-[#ffe262]" />
      <p className="hidden border hover:border-[#4280b1]" />
      <p className="hidden border hover:border-[#336791]" />
      <p className="hidden border hover:border-[#f0931c]" />
      <p className="hidden border hover:border-[#24b742]" />

      <p className="hidden text-[#23a55a]" />
      <p className="hidden text-[#f0b232]" />
      <p className="hidden text-[#f23f43]" />
      <p className="hidden text-[#80848e]" />

      <ActivityComponent>
        <SpotifyComponent />
      </ActivityComponent>
    </>
  );
}
