"use client";

import { useState } from "react";
import { dogImages } from "@/lib/doggo";
import { DogGrid } from "@/components/doggo/dog-grid";
import { DogModal } from "@/components/doggo/dog-modal";

type LoadedImagesType = { [key: string]: boolean };

export const DoggoClient = () => {
  const [loadedImages, setLoadedImages] = useState<LoadedImagesType>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageLoad = (dogKey: string) => {
    setLoadedImages((prev) => ({ ...prev, [dogKey]: true }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="mx-12 text-center text-5xl font-extrabold md:text-6xl xl:text-7xl">
        dog pictures gallery :D
      </h1>

      <p className="text-center text-base md:text-lg xl:text-xl mt-2 text-neutral-300">
        he is a <b>yorkshire terrier</b> and his name is <b>Melman</b>
      </p>

      <p className="text-center text-base md:text-lg xl:text-xl mt-2 mb-12 text-neutral-300">
        you may click on any image to view it in full size
      </p>

      <DogGrid 
        dogImages={dogImages} 
        loadedImages={loadedImages} 
        handleImageLoad={handleImageLoad} 
        setSelectedImage={setSelectedImage} 
      />
      
      <DogModal 
        selectedImage={selectedImage} 
        setSelectedImage={setSelectedImage} 
      />
    </div>
  );
};