import { TechItem } from "@/components/portfolio/tech_item";
import { Project } from "@/components/portfolio/project";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export const Korino = () => {
  return (
    <Project
      title="Korino"
      rounded={true}
      icon="korino.webp"
      link="/"
      description="You're here! A website for mainly showcasing all of my personal projects and the work I've done."
    >
      <TechItem name="Next.js" color="#fff">
        <SiNextdotjs />
      </TechItem>

      <TechItem name="React" color="#149eca">
        <SiReact />
      </TechItem>

      <TechItem name="TailwindCSS" color="#38bdf8">
        <SiTailwindcss />
      </TechItem>
    </Project>
  );
};
