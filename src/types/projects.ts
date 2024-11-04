import { TechnologyItem } from "@/types/technologies";

export interface ProjectItem {
  title: string;
  link: string;
  github_link: string;
  description: string;
  technologies: TechnologyItem[];
} 