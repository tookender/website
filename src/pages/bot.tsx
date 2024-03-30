import { PrimaryButton, SecondaryButton } from "@/components/button";
import Head from "next/head";
import {
  IconArrowRight,
  IconBrandDiscordFilled,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Message } from "@/components/discord/message";

export default function Home() {
  return (
    <>
      <Head>
        <title>Korii Bot</title>
      </Head>

      <div className="mt-36">
        <section className="flex flex-col items-center gap-2">
          <a
            className="flex items-center bg-neutral-800 rounded-lg px-3 py-1 text-sm font-medium"
            href=""
          >
            <span className="mr-3">🎉</span>
            <span className="mr-1">v1.0.0 has been released!</span>
            <IconArrowRight height={15} width={15} />
          </a>

          <h1 className="mt-2 text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            The Discord bot for all your needs.
          </h1>

          <p className="max-w-[520px] text-center text-lg text-neutral-400">
            Korii is a fully customizable multi-purpose Discord bot for your
            Discord server, designed with ease-of-use in mind.
          </p>

          <div className="flex items-center justify-center gap-4">
            <PrimaryButton text="Add to Discord" link="https://discord.com">
              <IconBrandDiscordFilled height={22} width={22} />
            </PrimaryButton>

            <SecondaryButton
              text="GitHub"
              link="https://github.com/tookender/Korii-Bot"
            >
              <IconBrandGithub height={22} width={22} />
            </SecondaryButton>
          </div>

          <div className="container relative mx-auto px-8 mt-24">
            <section className="w-[90vw] xxl:w-[1336px] border border-zinc-800 rounded-md h-[800px]">
              <div className="mx-2 my-2 flex flex-col gap-4">
                <Message author="ender" picture="/avatar.webp" date="Today at 21:24" text="Hello there!" />
                <Message author="doggo" picture="/dogs/dog1.webp" date="Today at 21:25" text="Hi ender! How are you?" bot={true} />
                <Message author="ender" picture="/avatar.webp" date="Today at 21:25" text="I'm doing fine, what about you?" />
                <Message author="doggo" picture="/dogs/dog1.webp" date="Today at 21:25" text="I'm fine as well!!" bot={true} />
                <Message author="ender" picture="/avatar.webp" date="Today at 21:26" text="Awesome!" />
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
