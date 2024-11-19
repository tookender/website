"use client";

import { useState } from "react";
import { dogImages } from "@/lib/doggo";
import { DogImageGrid } from "@/components/doggo/DogImageGrid";
import { DogImageModal } from "@/components/doggo/DogImageModal";

type LoadedImagesType = { [key: string]: boolean };

export const DoggoClient = () => {
  const [loadedImages, setLoadedImages] = useState<LoadedImagesType>({});
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageLoad = (dogKey: string) => {
    setLoadedImages((prev) => ({ ...prev, [dogKey]: true }));
  };

  // useEffect(() => {
  //   const cursor = document.getElementById("cursor");

  //   document.addEventListener("mousemove", function(event) {
  //     cursor?.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, {duration: 2500, fill: "forwards"})
  //   });

  //   document.addEventListener("mouseenter", function(event) {
  //     cursor?.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, {duration: 1000, fill: "forwards"})
  //   });
  // })

  return (
    <div className="flex min-h-screen flex-col">
      {/* <img id="cursor" src="/dogs/dog15.webp" alt="cute cursor ngl..." width={16} height={16} className="w-12 h-12 rounded-full object-cover  absolute z-50"/> */}

      <h1 className="mx-12 text-center text-5xl font-extrabold md:text-6xl xl:text-7xl">
        dog pictures gallery :D
      </h1>

      <p className="text-center text-base md:text-lg xl:text-xl mt-2 mb-12 text-neutral-300">
        he is a <b>yorkshire terrir</b> and his name is <b>Melman</b>
      </p>

      <p className="text-center text-base md:text-lg xl:text-xl mt-2 text-neutral-300">
        you may click on any image to view it in full size
      </p>

      <DogImageGrid 
        dogImages={dogImages} 
        loadedImages={loadedImages} 
        handleImageLoad={handleImageLoad} 
        setSelectedImage={setSelectedImage} 
      />
      
      <DogImageModal 
        selectedImage={selectedImage} 
        setSelectedImage={setSelectedImage} 
      />
    </div>
  );
};