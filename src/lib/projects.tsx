import { ProjectItem } from "@/types/projects";
import { technologies } from "@/lib/technologies";
import { TechnologyItem } from "@/types/technologies";

// function to find technology by name
const findTechnology = (name: string) => technologies.find(tech => tech.text === name);

export const projects: ProjectItem[] = [
  {
    title: "korino.dev",
    link: "/",
    github_link: "https://github.com/tookender/website",
    description: "🌐 My personal space on the internet",
    technologies: [
      findTechnology("Next.js"),
      findTechnology("TypeScript"),
      findTechnology("TailwindCSS"),
      findTechnology("React")
    ].filter((tech): tech is TechnologyItem => tech !== undefined)
  },
  {
    title: "Korii-Bot",
    link: "/bot",
    github_link: "https://github.com/tookender/Korii-Bot",
    description: "🤖 Multi-purpose Discord bot for all your needs",
    technologies: [
      findTechnology("Python"),
      findTechnology("PostgreSQL"),
      findTechnology("Docker")
    ].filter((tech): tech is TechnologyItem => tech !== undefined)
  },
  {
    title: "rustbyte",
    link: "https://rustbyte.dev",
    github_link: "https://github.com/rustbyte-solutions/rustbyte-website",
    description: "🌐 Website for Rustbyte Solutions",
    technologies: [
      findTechnology("Astro"),
      findTechnology("TypeScript"),
      findTechnology("TailwindCSS"),
      findTechnology("Docker")
    ].filter((tech): tech is TechnologyItem => tech !== undefined)
  },

  {
    title: "BandBot",
    link: "https://github.com/tookender/SuitBot",
    github_link: "https://github.com/tookender/BandBot",
    description: "🎵 Commissioned bot for a local band",
    technologies: [
      findTechnology("Python"),
      findTechnology("PostgreSQL")
    ].filter((tech): tech is TechnologyItem => tech !== undefined)
  },
  {
    title: "SuitBot",
    link: "https://github.com/tookender/SuitBot",
    github_link: "https://github.com/tookender/SuitBot",
    description: "🖼️ Commissioned bot for image editing",
    technologies: [
      findTechnology("Python"),
      findTechnology("Pillow (PIL fork, Python library)")
    ].filter((tech): tech is TechnologyItem => tech !== undefined)
  },
  {
    title: "QuizBot",
    link: "https://github.com/tookender/SuitBot",
    github_link: "https://github.com/tookender/QuizBot",
    description: "❓ Commissioned bot for interactive quizzes",
    technologies: [
      findTechnology("Python"),
      findTechnology("PostgreSQL")
    ].filter((tech): tech is TechnologyItem => tech !== undefined)
  },
]; 