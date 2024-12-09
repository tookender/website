"use client";

import { decode } from "blurhash";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type DogGridProps = {
  dogImages: { [key: string]: { blurhash: string; description: string } };
  loadedImages: { [key: string]: boolean };
  handleImageLoad: (dogKey: string) => void;
  setSelectedImage: (image: string | null) => void;
};

export const DogGrid = ({ dogImages, loadedImages, handleImageLoad, setSelectedImage }: DogGridProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
  );
};