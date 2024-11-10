"use client";

import Image from "next/image";
import Link from "next/link";
import { FaDog, FaHouseChimney } from "react-icons/fa6";

export default function Home() {
  return (
    <section aria-labelledby="not-found" className="flex flex-col items-center justify-center gap-8">
      <div className="relative active:scale-[0.98] duration-300 h-[70vh] w-[60vw] rounded-xl flex items-center justify-center overflow-hidden">
        <div className="text-3xl font-bold absolute bottom-0 bg-gradient-to-b from-transparent via-black/70 to-black/90 w-full text-center p-24">
          <h1 className="translate-y-12">Not Found 👻</h1>
          <p className="translate-y-14 text-xl text-neutral-300 font-normal">
            i&apos;m probably not who you&apos;re looking for...
          </p>
        </div>

        <Image
          src="/dogs/dog13.webp"
          height={1512}
          width={2016}
          alt="probably not who you're looking for..."
          className="h-full w-full object-cover rounded-large"
        />
      </div>

      <div className="flex flex-row gap-4">
        <Link href="/">
          <button className="py-4 h-[58px] w-[135px] px-5 flex flex-row border rounded-md items-center justify-center font-semibold gap-2 active:bg-neutral-800/40 group hover:bg-neutral-800/70 duration-300">
            <FaHouseChimney/>
            <span>Go Home</span>
          </button>
        </Link>

        <Link href="/doggo">
          <button className="py-4 px-5 flex flex-row border rounded-md items-center justify-center font-semibold gap-2 active:bg-neutral-800/40 group hover:bg-neutral-800/70 duration-300">
            <FaDog/>
            <span>Dog Pictures</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
