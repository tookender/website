import { Metadata } from "next";
import { signIn, providerMap } from "@/auth";
import { SiDiscord, SiGithub } from "react-icons/si";

const icons: { [key: string]: React.ReactNode } = {
  "github": <SiGithub/>,
  "discord": <SiDiscord/>,
}

export const metadata: Metadata = {
  title: "korino/signin",
  description: "Sign in to Korino with GitHub or Discord.",
  openGraph: {
    title: "korino/signin",
    description: "Sign in to Korino with GitHub or Disc ord.",
    url: "https://korino.dev/signin",
  },
};

export default async function SignInPage() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center bg-grid-white/[0.1]">
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(transparent_10%,black)]"></div>
        <div className="z-20 flex flex-col items-center">
          <h1 className="mt-32 text-8xl font-black">Sign in</h1>

          <p className="my-3 text-xl font-semibold text-zinc-200">
            Become a certified Korii Bot member today!
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            {Object.values(providerMap).map((provider) => (
              <form
                key={provider.id}
                action={async () => {
                  "use server";
                  await signIn(provider.id, { redirect: false });
                }}
              >
                <button
                  type="submit"
                  className="rounded-md border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm duration-400 hover:border-white/20 hover:bg-white/10"
                >
                  <span className="text-xl flex flex-row gap-2 items-center">{icons[provider.id]} Sign in with {provider.name}</span>
                </button>
              </form>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
