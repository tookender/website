import { TechItem } from "@/components/portfolio/tech_item"
import { Project } from "@/components/project"
import { FaJava } from "react-icons/fa"
import { SiMinecraft } from "react-icons/si"

export const PvP = () => {
  return (
    <Project
      title="Korino PvP"
      rounded={true}
      icon="minecraft.webp"
      link="/"
      description="A heavily work in progress fun Minecraft Skywars server with more game-modes coming soon."
    >
      <TechItem name="Java" color="#f0931c">
        <FaJava />
      </TechItem>

      <TechItem name="Minecraft" color="#24b742">
        <SiMinecraft />
      </TechItem>
    </Project>
  )
}