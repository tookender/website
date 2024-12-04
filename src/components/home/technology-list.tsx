"use client";

import { motion } from "motion/react";
import { technologies } from "@/lib/technologies"

export const TechnologyList = () => {
  return (
    <div className="mt-2 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" role="list">
      {technologies.slice(0, 8).map((tech, index) => (
        <motion.button
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: index * 0.08 }}
        >
          <div className="flex flex-row gap-3 p-2 rounded-lg bg-neutral-800/70 border border-transparent hover:border-[#404040] hover:bg-neutral-700/60 active:scale-95 duration-300 items-center"> 
            <div className={`${tech.background} p-2.5 rounded-lg text-3xl`}>
              {tech.icon}
            </div>
            <div className="flex flex-col items-start">
              <h1 className="font-semibold text-lg">
                {tech.text}
              </h1>
    
              <p className="text-neutral-400/80 -translate-y-1">
                {tech.description}
              </p>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  )
}