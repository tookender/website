import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = ({
  commitHash,
  commitMessage,
}: {
  commitHash: any;
  commitMessage: any;
}) => {
  let hash;
  let message;

  if (!commitHash) {
    hash = "DEVELOPMENT";
    message = "DEVELOPMENT";
  } else {
    hash = commitHash.slice(0, 7);
    message = commitMessage.slice(0, 12);
  
    if (commitMessage.length > 7) {
      message += "...";
    }
  }

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-t-[#333] py-12 z-50 relative bg-black text-center text-neutral-300 flex flex-col items-center justify-center">
      <p className="text-balance text-center text-sm">
        Built by{" "}
        <Link className="text-[#0091ff] underline hover:brightness-125 duration-500" href="/ender">
          Ender
        </Link>
        . The source code is available on{" "}
        <Link
          className="text-[#0091ff] underline hover:brightness-125 duration-500"
          href="https://github.com/tookender/website"
        >
          GitHub
        </Link>
        .
      </p>

      <hr className="my-6 w-full md:w-1/3 mx-auto border-[#333]" />

      <div className="flex flex-col items-center justify-center">
        <p className="text-balance text-center text-sm">
          &copy; {currentYear}{" "}
          <Link className="text-[#0091ff] underline hover:brightness-125 duration-500" href="/">
            Korino
          </Link>
          . All Rights Reserved.
        </p>

        <p className="text-balance text-center text-sm mt-4">
          Running on <code>{hash}</code> - {message}
        </p>

        <p className="text-balance text-center text-sm flex flex-row justify-center gap-2">
          Powered by{" "}
          <Image src="/vercel.svg" width={16} height={16} alt="Vercel Logomark"/>
          <a className="text-[#0091ff] underline hover:brightness-125 duration-500" href="https://vercel.com">
            Vercel
          </a>{" "}
          and{" "}
          <Image src="/nextjs.svg" width={24} height={24} alt="Next.js Logomark"/>
          <a className="text-[#0091ff] underline hover:brightness-125 duration-500" href="https://nextjs.org/">
            Next.js
          </a>
        </p>

        <Image
          src="/netscape.webp"
          alt="This page is best viewed with Netscape."
          width={88}
          height={31}
          unoptimized
          className="mt-4"
        />
      </div>
    </footer>
  );
};
