import React from "react";
import Image from "next/image";
import { IconBrandGithub, IconDog, IconWorld } from "@tabler/icons-react";

export const Footer = ({
  commitHash,
  commitMessage,
}: {
  commitHash: any;
  commitMessage: any;
}) => {
  let hash;
  let message;
  const currentYear = new Date().getFullYear();

  if (!commitHash) {
    hash = "DEVELOPMENT";
    message = "DEVELOPMENT";
  } else {
    hash = commitHash.slice(0, 7);
    message = commitMessage.slice(0, 18);

    if (commitMessage.length > 7) {
      message += "...";
    }
  }

  return (
    <footer className="bg-[#161616] border-t border-t-[#2e2e2e]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex flex-row items-center gap-4">
              <Image
                src="/avatar.webp"
                alt="Website logo"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">Korino Development</h1>
                <p
                  className="italic text-neutral-400"
                  title="pls give me ideas"
                >
                  idk what to write here
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-neutral-400">
              A website to show off all the projects made by Korino Development.
              Most of the work here is done by Ender.
            </p>

            <ul className="mt-6 flex gap-4">
              <FooterIconElement
                text="GitHub"
                href="https://github.com/tookender"
              >
                <IconBrandGithub height={24} width={24} />
              </FooterIconElement>

              <FooterIconElement text="Doggo" href="/doggo">
                <IconDog height={24} width={24} />
              </FooterIconElement>

              <FooterIconElement text="Website" href="/">
                <IconWorld height={24} width={24} />
              </FooterIconElement>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div className="hidden lg:block" />

            <FooterElement title="Projects">
              <FooterElementItem text="Korii Bot" href="/bot" />
              <FooterElementItem text="Korino PvP" href="/pvp" />
              <FooterElementItem text="Korino Website" href="/" />
            </FooterElement>

            <FooterElement title="Sitemap">
              <FooterElementItem text="Home Page" href="/" />
              <FooterElementItem text="Korii Bot" href="/bot" />
              <FooterElementItem text="Korino PvP" href="/pvp" />
              <FooterElementItem text="Ender" href="/ender" />
              <FooterElementItem text="Doggo" href="/doggo" />
              <FooterElementItem text="API" href="/api" />
            </FooterElement>

            <FooterElement title="Technologies">
              <FooterElementItem text="Python" href="https://python.org" />
              <FooterElementItem
                text="TypeScript"
                href="https://typescriptlang.org"
              />
              <FooterElementItem
                text="TailwindCSS"
                href="https://tailwindcss.com"
              />
              <FooterElementItem text="Next.js" href="https://nextjs.org" />
              <FooterElementItem text="React.js" href="https://react.dev" />
              <FooterElementItem text="Java" href="https://java.com" />
            </FooterElement>
          </div>
        </div>

        <p className="text-neutral-400 text-xs flex-col">
          &copy; {currentYear}. Korino. All rights reserved.
          <span className="flex flex-row gap-2">
            Powered by{" "}
            <Image src="/vercel.svg" width={14} height={14} alt="Vercel Logo" />
            <a
              className="hover:brightness-125 duration-500"
              href="https://vercel.com"
            >
              Vercel
            </a>{" "}
            and{" "}
            <Image
              src="/nextjs.svg"
              width={14}
              height={14}
              alt="Next.js Logo"
            />
            <a
              className="hover:brightness-125 duration-500"
              href="https://nextjs.org/"
            >
              Next.js
            </a>
          </span>
          <span>
            Running on{" "}
            <a
              className="hover:brightness-125 duration-500"
              href={`https://github.com/tookender/website/commit/${commitHash}`}
            >
              <code>{hash}</code>
            </a>{" "}
            - <span title={commitMessage}>{message}</span>
          </span>
        </p>
      </div>
    </footer>
  );
};

const FooterIconElement = ({
  text,
  href,
  children,
}: {
  text: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li title={text}>
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        className="text-neutral-300 hover:text-white duration-500"
      >
        <span className="sr-only">{text}</span>

        {children}
      </a>
    </li>
  );
};

const FooterElementItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <li title={text}>
      <a href={href} className="text-neutral-400 hover:text-white duration-500">
        {text}
      </a>
    </li>
  );
};

const FooterElement = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <p className="text-white font-bold text-xl">{title}</p>

      <ul className="mt-2 space-y-2 text-sm">{children}</ul>
    </div>
  );
};
