"use client";

import { useEffect, useState } from "react";
import { decode } from "blurhash";
import { motion, AnimatePresence } from "framer-motion";
import { dogImages } from "@/lib/doggo";

type LoadedImagesType = { [key: string]: boolean };

export default function DoggoPage() {
  const [loadedImages, setLoadedImages] = useState<LoadedImagesType>({});
  const [isClient, setIsClient] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleImageLoad = (dogKey: string) => {
    setLoadedImages((prev) => ({ ...prev, [dogKey]: true }));
  };

  const generateBlurDataURL = (blurhash: string) => {
    if (!isClient) return "";

    const width = 32;
    const height = 32;
    const pixels = decode(blurhash, width, height);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const imageData = ctx.createImageData(width, height);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }

    return canvas.toDataURL();
  };

  return (
    <main>
      <head>
        <title>doggo pics :D</title>
        <meta property="og:title" content="doggo pics" />
        <meta property="og:description" content="a gallery of doggo pictures :D" />
        <meta property="og:url" content="https://korino.dev/doggo" />
        <meta name="theme-color" content="#10b981" data-react-helmet="true" />
      </head>

      <div className="flex min-h-screen flex-col">
        <h1 className="mx-12 text-center text-5xl font-extrabold md:text-6xl xl:text-7xl">
          dog pictures gallery :D
        </h1>

        <p className="text-center text-base md:text-lg xl:text-xl mt-2 mb-12 text-neutral-300">
          you may click on any image to view it in full size
        </p>

        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-3 2xl:grid-cols-4">
            {Object.keys(dogImages).map((dogKey: string) => (
              <motion.button
                key={dogKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ 
                  once: true,
                  amount: 0.3,
                  margin: "-100px 0px 0px 0px"
                }}
                transition={{ 
                  duration: 0.5,
                }}
                className="relative flex h-[367px] max-h-[367px] max-w-[274px] cursor-pointer flex-col items-center rounded-large"
                onClick={() => setSelectedImage(`/dogs/${dogKey}.webp`)}
              >
                <img
                  src={loadedImages[dogKey] ? `/dogs/${dogKey}.webp` : generateBlurDataURL(dogImages[dogKey].blurhash)}
                  alt={dogImages[dogKey].description}
                  className="relative h-[367px] w-[274px] rounded-large object-cover"
                  onLoad={() => handleImageLoad(dogKey)}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center w-[90vw] h-[90vh]"
            >
              <img
                src={selectedImage}
                alt="Full-size dog"
                className="rounded-3xl object-contain max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
