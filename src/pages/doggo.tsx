import { dogImages } from "@/utils/doggo";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Doggo Test</title>
      </Head>

      <div className="min-h-screen mb-12 mt-36 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-center mb-12">
          dog pictures gallery :D
        </h1>

        <div className="flex flex-col items-center justify-center w-[80vw]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
            {Object.keys(dogImages).map((dogKey: string) => (
              <div
                key={dogKey}
                className="h-full flex flex-col items-center text-center font-semibold border-2 border-zinc-800 rounded-lg hover:scale-[1.01] active:scale-[0.99] duration-500"
              >
                {/* can't use it since we don't know the width/height */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/dogs/${dogKey}.webp`}
                  alt={`Dog ${dogKey}`}
                  className="rounded-t-md skeleton"
                />

                <p className="my-2 mx-2">{dogImages[dogKey]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
