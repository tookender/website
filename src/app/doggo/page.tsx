"use client";
import { dogImages } from "@/lib/doggo";
import Head from "next/head";
import { Image } from "@nextui-org/react";

export default function DoggoPage() {
  return (
    <main>
      <Head>
        <title>doggo pics :D</title>
        <meta content="doggo pics" property="og:title" />
        <meta
          content="a gallery of doggo pictures :D"
          property="og:description"
        />
        <meta content="https://korino.dev/doggo" property="og:url" />
        <meta content="#10b981" data-react-helmet="true" name="theme-color" />
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mx-12 mb-12 text-center text-5xl font-extrabold md:text-6xl xl:text-7xl">
          dog pictures gallery :D
        </h1>

        <div className="flex w-[90vw] flex-col items-center justify-center xl:w-[80vw]">
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxxl:grid-cols-6">
            {Object.keys(dogImages).map((dogKey: string) => (
              <button
                key={dogKey}
                className="relative flex h-[367px] max-h-[367px] max-w-[274px] cursor-pointer flex-col items-center rounded-large duration-300 transition-transform-background hover:scale-[1.01] active:scale-[0.99] motion-reduce:transition-none"
              >
                <Image
                  src={`/dogs/${dogKey}.webp`}
                  alt={`Dog ${dogKey}`}
                  className="relative h-[367px] w-[274px] rounded-large object-cover"
                />

                <p className="absolute bottom-1 z-10 w-[95%] rounded-large border-1 border-white/20 bg-background/10 p-3 py-1 text-center subpixel-antialiased shadow-small backdrop-blur backdrop-saturate-150">
                  {dogImages[dogKey]}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
