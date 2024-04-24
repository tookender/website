import { TechItem } from "@/components/portfolio/tech_item"
import { Project } from "@/components/portfolio/project"
import { SiDiscord, SiPython } from "react-icons/si"

export const Bot = () => {
  return (
    <Project
      title="Korii Bot"
      rounded={true}
      icon="korii.webp"
      link="/bot"
      description="Korii is a fully customizable multi-purpose Discord bot for your Discord server."
    >
      <TechItem name="Python" color="#ffe262">
        <SiPython />
      </TechItem>

      <TechItem name="discord.py" color="#4280b1">
        <SiDiscord />
      </TechItem>
    </Project>
  )
}