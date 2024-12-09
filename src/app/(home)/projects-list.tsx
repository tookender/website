"use client";

import { projects } from "@/lib/projects";
import { Tooltip } from "@/components/tooltip";
import { motion, AnimatePresence } from "motion/react";

export function ProjectsList() {
  return (
    <>
      <div className="mt-2 grid xs:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
        <AnimatePresence>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a key={index} href={project.link} title={project.title} target={project.link.startsWith("/") ? "_self" : "_blank"}>
                <div className="flex flex-col justify-between p-4 rounded-lg bg-neutral-800/70 border border-transparent hover:border-[#404040] hover:bg-neutral-700/60 group active:scale-[0.98] duration-300 items-start h-[8.5rem]"> 				
                  <div className="flex flex-col gap-1 w-full">
                    <div className="flex flex-row justify-between w-full">
                      <h1 className="text-lg font-semibold">
                        {project.title}
                      </h1>

                      {!project.link.startsWith("/") && (
                        <p className="text-red-500" title="External site">
                          *
                        </p>
                      )}
                    </div>

                    <p className="text-neutral-400/80 text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="flex flex-row">
                      {project.technologies.map((technology, index) => (
                        <Tooltip key={index} content={technology.text}>
                          <div className="p-1.5 rounded-lg text-xl">
                            {technology.icon}
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
} 