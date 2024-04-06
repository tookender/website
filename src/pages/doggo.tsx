/* eslint-disable @next/next/no-img-element */
/* can't use it since we don't know the width/height */
import { dogImages } from "@/lib/doggo";
import Head from "next/head";
import { MouseEvent, useState } from "react";

export default function Home() {
  const [image, setImage] = useState("/dogs/dog1.webp");

  const changeImage = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLImageElement) {
      setImage(event.target.src);
    }
    toggleDisplay(event);
  };

  const toggleDisplay = (event: MouseEvent<HTMLElement>) => {
    const display = document.getElementById("display") as HTMLElement;
    if (display.classList.contains("flex")) {
      if (
        !(event.target instanceof HTMLImageElement) &&
        !(event.target instanceof HTMLParagraphElement)
      ) {
        display.classList.remove("flex");
        display.classList.add("hidden");
        document.body.style.overflow = "auto";
      }
    } else {
      display.classList.add("flex");
      display.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

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

      <div
        className="fixed z-20 hidden h-screen w-screen select-none items-center justify-center bg-background/60 backdrop-blur"
        onClick={toggleDisplay}
        id="display"
      >
        <div className="mt-12 flex max-w-[85vw] -translate-y-12 flex-col rounded-lg border-2 border-zinc-800 bg-black text-center">
          <img
            src={image}
            className="skeleton max-h-[60vh] rounded-t-md"
            alt={
              dogImages[
                image.substring(image.lastIndexOf("/") + 1).replace(".webp", "")
              ]
            }
          />
          <p className="py-2 text-xl font-semibold">
            {
              dogImages[
                image.substring(image.lastIndexOf("/") + 1).replace(".webp", "")
              ]
            }
          </p>
        </div>
      </div>

      <div className="mb-12 flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-12 mt-24 text-center text-4xl font-extrabold md:text-6xl xl:text-7xl">
          dog pictures gallery :D
        </h1>

        <div className="flex w-[80vw] flex-col items-center justify-center">
          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {Object.keys(dogImages).map((dogKey: string) => (
              <button
                key={dogKey}
                onClick={changeImage}
                className="flex h-full flex-col items-center rounded-lg border-2 border-zinc-800 text-center font-semibold duration-500 hover:scale-[1.01] active:scale-[0.99]"
              >
                <img
                  src={`/dogs/${dogKey}.webp`}
                  alt={`Dog ${dogKey}`}
                  className="skeleton select-none rounded-t-md"
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
