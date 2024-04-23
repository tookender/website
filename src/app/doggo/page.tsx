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
        <h1 className="mb-12 text-center mx-12 text-5xl font-extrabold md:text-6xl xl:text-7xl">
          dog pictures gallery :D
        </h1>

        <div className="flex w-[90vw] xl:w-[80vw] flex-col items-center justify-center">
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxxl:grid-cols-6">
            {Object.keys(dogImages).map((dogKey: string) => (
              <button
                key={dogKey}
                className="flex flex-col items-center max-h-[367px] max-w-[274px] relative rounded-large transition-transform-background motion-reduce:transition-none cursor-pointer duration-300 h-[367px] hover:scale-[1.01] active:scale-[0.99]"
              >
                <Image
                  src={`/dogs/${dogKey}.webp`}
                  alt={`Dog ${dogKey}`}
                  className="relative rounded-large w-[274px] h-[367px] object-cover"
                />

                <p className="p-3 text-center subpixel-antialiased bg-background/10 backdrop-blur backdrop-saturate-150 border-white/20 border-1 py-1 absolute rounded-large bottom-1 shadow-small w-[95%] z-10">
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
