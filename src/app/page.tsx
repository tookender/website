"use client";

import { SlLocationPin, SlArrowDown } from "react-icons/sl";
import { Technology } from "@/components/index/technology";
import { ProjectCard } from "@/components/index/project";

import { projects } from "@/lib/projects";
import { technologies } from "@/lib/technologies";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section aria-labelledby="intro-heading">
        <div className="inline-flex items-center gap-1 text-neutral-400/80 mb-2" role="contentinfo">
        <SlLocationPin aria-hidden="true" />
        <p>Germany</p>
      </div>

      <h1 id="intro-heading" className="flex flex-row text-4xl md:text-5xl leading-[60px] font-semibold">
        Hey, I&apos;m Ender 👋
      </h1>

      <p className="text-neutral-400/80 md:mt-4 text-pretty"> 
        I&apos;m a 14 year old developer, who loves creating web-applications, and also Discord bots.
        I&apos;ve been programming since I was about 10 years old, and I&apos;m currently learning Three.JS
        </p>
      </section>

      <section aria-labelledby="technologies-heading">
        <h2 id="technologies-heading" className="mt-14 text-3xl font-semibold">
          My Technologies
        </h2>
        
        <p className="text-neutral-400/80 mt-2 text-pretty">
          I use lots of technologies to help me build my projects and to make my life easier.
          Here are the main technologies that I currently use:
        </p>
        
        <div className="mt-2 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" role="list">
          {technologies.slice(0, 8).map((tech, index) => (
            <motion.button
              key={tech.text}
              aria-label={`${tech.text} - ${tech.description}`}
              
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              <Technology
                text={tech.text}
                description={tech.description}
                background={tech.background}
                aria-label={`${tech.text} - ${tech.description}`}
              >
                {tech.icon}
              </Technology>
            </motion.button>
          ))}
        </div>
      </section>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="mt-14 text-3xl font-semibold">
          My Projects
        </h2>
        
        <p className="text-neutral-400/80 mt-2 text-pretty">
          Here is a list of some of my projects that I&apos;ve worked on:
          <br/>
          <span className="text-red-500">*</span> external site
        </p>
        
        <div className="mt-2 grid xs:grid-cols-2 lg:grid-cols-3 gap-4" role="list"> 
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  link={project.link}
                  github_link={project.github_link}
                  description={project.description}
                  languages={project.technologies}
                  aria-label={`${project.title} - ${project.description}`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {projects.length > 3 && (
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="mt-4 ml-2 flex items-center gap-2 text-neutral-400/80 hover:text-neutral-200 
                     transition-colors duration-200 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>{showAll ? "Show less" : "Show more"}</span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <SlArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        )}
      </section>
    </>
  );
}
