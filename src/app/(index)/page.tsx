import { Metadata } from "next";
import { ActivityComponent } from "./activity";
import { SpotifyComponent } from "./spotify";

export const metadata: Metadata = {
  title: "korino",
  description: "Website to showcase my projects, skills and more.",
  openGraph: {
    title: "korino",
    description: "Website to showcase my projects, skills and more.",
    url: "https://korino.dev",
  },
};

export default function EnderPage() {
  return (
    <>
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
