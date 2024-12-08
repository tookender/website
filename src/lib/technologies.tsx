import { TechnologyItem } from "@/types/technologies";
import { FaMarkdown, FaMattressPillow } from "react-icons/fa6";
import { SiPython, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiDocker, SiPostgresql, SiAstro, SiSupabase } from "react-icons/si";

export const technologies: TechnologyItem[] = [
  {
    text: "Python",
    description: "flexible language",
    background: "bg-yellow-200/20",
    icon: <SiPython className="text-yellow-300" />
  },
  {
    text: "TypeScript",
    description: "typed JavaScript",
    background: "bg-blue-500/20",
    icon: <SiTypescript className="text-blue-500" />
  },
  {
    text: "React",
    description: "JavaScript library",
    background: "bg-sky-300/20",
    icon: <SiReact className="text-sky-300" />
  },
  {
    text: "Next.js",
    description: "React framework",
    background: "bg-neutral-200/20",
    icon: <SiNextdotjs className="text-white" />
  },
  {
    text: "TailwindCSS",
    description: "CSS framework",
    background: "bg-sky-400/20",
    icon: <SiTailwindcss className="text-sky-400" />
  },
  {
    text: "Git",
    description: "version control",
    background: "bg-red-500/20",
    icon: <SiGit className="text-red-500" />
  },
  {
    text: "Docker",
    description: "app containers",
    background: "bg-blue-700/20",
    icon: <SiDocker className="text-blue-700" />
  },
  {
    text: "PostgreSQL",
    description: "fast database",
    background: "bg-cyan-300/20",
    icon: <SiPostgresql className="text-cyan-300" />
  },
  {
    text: "Astro",
    description: "static site generator",
    background: "bg-pink-300/20",
    icon: <SiAstro className="text-pink-300" />
  },
  {
    text: "Pillow (PIL fork, Python library)",
    description: "image processing",
    background: "bg-pink-300/20",
    icon: <FaMattressPillow className="text-pink-300" />
  },
  {
    text: "Markdown",
    description: "image processing",
    background: "bg-white-200/20",
    icon: <FaMarkdown className="text-white-200" />
  },
  {
    text: "Supabase",
    description: "image processing",
    background: "bg-green-400/20",
    icon: <SiSupabase className="text-green-400" />
  }
]; 