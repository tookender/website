"use client";

import { ProjectCard } from "./ProjectCard";

import { projects } from "@/lib/projects";
import { TechnologyItem } from "@/types/technologies";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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

  return (
    <>
      <div className="mt-2 grid xs:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
        <AnimatePresence>
          {projects.map((project, index) => (
            <AnimatedProject key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
} 