"use client";

import { ProjectCard } from "./ProjectCard";

import { projects } from "@/lib/projects";
import { TechnologyItem } from "@/types/technologies";

import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";

type ProjectsListProps = {
  projects: {
    title: string;
    description: string;
    link: string;
    technologies: TechnologyItem[];
  }[];
};

function AnimatedProject({ project, index }: { project: ProjectsListProps["projects"][0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <ProjectCard
        title={project.title}
        link={project.link}
        description={project.description}
        languages={project.technologies}
      />
    </motion.div>
  );
}

export function ProjectsList() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <div className="mt-2 grid xs:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <AnimatedProject key={project.title} project={project} index={index} />
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
    </>
  );
} 