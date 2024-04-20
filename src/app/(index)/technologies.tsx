import { Card } from "@/components/card";
import { SiNextdotjs, SiPython, SiTypescript } from "react-icons/si";

const technologies = [
  {
    title: "Python",
    description:
      "We use Python a lot for its ease-of-use and great developer experience with its amazing package manager.",
    link: "https://python.org",
    icon: SiPython,
    color: "text-yellow-500",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is mainly utilized for our website, we use it as a typed alternative to JavaScript.",
    link: "https://typescriptlang.org",
    icon: SiTypescript,
    color: "text-sky-500",
  },
  {
    title: "Next.js",
    description:
      "We use Next.js to write fast, performant, and accessible sites.",
    link: "https://nextjs.org",
    icon: SiNextdotjs,
    color: "text-blue-200",
  },
];

export const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black">
      <h1 className="mt-16 text-center text-5xl font-bold">Technologies</h1>

      <p className="mt-4 text-center text-neutral-400">
        A list of technologies we use at Korino Development <br /> to make what
        we do possible.
      </p>

      <div className="mx-4 mt-6 flex flex-col items-center justify-center gap-4 pb-16 md:flex-row">
        {technologies.map((tech, index) => (
          <Card
            key={index}
            title={tech.title}
            description={tech.description}
            link={tech.link}
            target="_blank"
          >
            <tech.icon className={`h-12 w-12 ${tech.color}`} />
          </Card>
        ))}
      </div>
    </div>
  );
};
