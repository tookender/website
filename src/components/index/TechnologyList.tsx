import { technologies } from "@/lib/technologies"
import { TechnologyCard } from "./TechnologyCard"

export const TechnologyList = () => {
  return (
    <div className="mt-2 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" role="list">
      {technologies.slice(0, 8).map((tech, index) => (
        <TechnologyCard
          key={tech.text}
          text={tech.text}
          description={tech.description}
          background={tech.background}
          index={index}
          icon={tech.icon}
        />
      ))}
    </div>
  )
}