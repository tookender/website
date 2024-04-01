/* eslint-disable @next/next/no-img-element */
/* can't use it since we don't know the width/height */
import { dogImages } from "@/utils/doggo";
import Head from "next/head";
import { MouseEvent, useState } from "react";

export default function Home() {
  const [image, setImage] = useState("/dogs/dog1.webp");

  const changeImage = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof HTMLImageElement) {
      setImage(event.target.src);
    }
    toggleDisplay();
  };

  const toggleDisplay = () => {
    const display = document.getElementById("display") as HTMLElement;
    if (display.classList.contains("flex")) {
      display.classList.remove("flex");
      display.classList.add("hidden");
    } else {
      display.classList.add("flex");
      display.classList.remove("hidden");
    }
  };

  return (
    <main>
      <Head>
        <title>doggo pics :D</title>
      </Head>

      <div
        className="hidden items-center justify-center w-screen h-screen z-[999] fixed bg-black/70 backdrop-blur-xl select-none"
        onClick={toggleDisplay}
        id="display"
      >
        <div className="flex flex-col text-center bg-black backdrop-blur-xl rounded-lg mt-12 border-2 border-zinc-800">
          <img
            src={image}
            className="rounded-t-md max-h-[60vh]"
            alt={
              dogImages[
                image.substring(image.lastIndexOf("/") + 1).replace(".webp", "")
              ]
            }
          />
          <p className="text-xl font-semibold my-4">
            {
              dogImages[
                image.substring(image.lastIndexOf("/") + 1).replace(".webp", "")
              ]
            }
          </p>
        </div>
      </div>

      <div className="min-h-screen mb-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-center mb-12 mt-24">
          dog pictures gallery :D
        </h1>

        <div className="flex flex-col items-center justify-center w-[80vw]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
            {Object.keys(dogImages).map((dogKey: string) => (
              <button
                key={dogKey}
                onClick={changeImage}
                className="h-full flex flex-col items-center text-center font-semibold border-2 border-zinc-800 rounded-lg hover:scale-[1.01] active:scale-[0.99] duration-500"
              >
                <img
                  src={`/dogs/${dogKey}.webp`}
                  alt={`Dog ${dogKey}`}
                  className="rounded-t-md skeleton select-none"
                />

                <p className="my-2 mx-2">{dogImages[dogKey]}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
