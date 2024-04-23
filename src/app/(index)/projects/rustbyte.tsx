import { TechItem } from "@/components/portfolio/tech_item"
import { Project } from "@/components/project"
import { SiAstro, SiReact, SiTailwindcss } from "react-icons/si"

export const Rustbyte = () => {
  return (
    <Project
      title="Rustbyte"
      link="https://rustbyte.dev"
      description="A small studio where we make mods for the game Rust to enhance the game-play and add new features."
    >
      <TechItem name="Astro" color="#df376d">
        <SiAstro />
      </TechItem>

      <TechItem name="React" color="#149eca">
        <SiReact />
      </TechItem>

      <TechItem name="TailwindCSS" color="#38bdf8">
        <SiTailwindcss />
      </TechItem>
    </Project>
  )
}