"use client";
import React, { useEffect } from "react";
import { Button } from "../components/button";
import { motion } from "framer-motion";

export default function NotFound() {
  useEffect(() => {
    // Back button
    const goBackButton = document.getElementById("goBack");

    if (goBackButton) {
      goBackButton.addEventListener("click", (event) => {
        history.back();
      });
    }

    // Blob
    const blob = document.getElementById("blob")!;
    window.addEventListener("load", (_) => {
      if (!window.matchMedia("(pointer:fine)").matches) {
        blob.classList.add("hidden");
      }
    });

    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    });
  });

  return (
    <div>
      <div
        id="blob"
        className="animate-rotate bg-white opacity-50 overflow-hidden duration-1000 rounded-1/2 h-34 aspect-square fixed top-1/2 left-1/2"
      />
      <div id="blur" className="h-full w-full fixed z-10 backdrop-blur-12" />

      <motion.div
        className="z-10 relative"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-9xl font-extrabold">404</h1>
          <h2 className="mt-2 text-2xl">Not Found</h2>

          <div className="flex flex-row gap-8 mt-12 text-2xl font-semibold">
            <Button text="Home" href="/" />

            <Button text="Go Back" id="goBack" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
