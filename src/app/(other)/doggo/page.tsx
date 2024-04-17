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

      <div className="mb-12 flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-12 mt-24 text-center text-4xl font-extrabold md:text-6xl xl:text-7xl">
          dog pictures gallery :D
        </h1>

        <div className="flex w-[80vw] flex-col items-center justify-center">
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Object.keys(dogImages).map((dogKey: string) => (
              <button
                key={dogKey}
                className="flex h-full flex-col items-center rounded-lg border-2 border-zinc-800 text-center font-semibold duration-500 hover:scale-[1.01] active:scale-[0.99]"
              >
                <Image
                  src={`/dogs/${dogKey}.webp`}
                  alt={`Dog ${dogKey}`}
                  className="select-none rounded-t-md"
                />

                <p className="mx-2 my-2">{dogImages[dogKey]}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
