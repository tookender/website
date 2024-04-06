import { Card } from "@/components/card";
import {
  IconBrandPython,
  IconBrandTypescript,
  IconCoffee,
} from "@tabler/icons-react";

export const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black">
      <h1 className="mt-16 text-center text-5xl font-bold">Technologies</h1>

      <p className="mt-4 text-center text-neutral-400">
        A list of technologies we use at Korino Development <br /> to make what
        we do possible.
      </p>

      <div className="mx-4 mt-6 flex flex-col items-center justify-center gap-4 pb-16 md:flex-row">
        <Card
          title="Python"
          description="We use Python a lot for it's ease-of-use and great developer experience with its amazing package manager."
          link="https://python.org"
          target="_blank"
        >
          <IconBrandPython className="h-12 w-12 text-yellow-500" />
        </Card>

        <Card
          title="TypeScript"
          description="TypeScript is mainly utilized for our website, we use it as a typed alternative to JavaScript."
          link="https://typescriptlang.org"
          target="_blank"
        >
          <IconBrandTypescript className="h-12 w-12 text-sky-500" />
        </Card>

        <Card
          title="Java"
          description="We use Java to write custom plugins for the Korino PvP server to customize the game-play."
          link="https://java.com"
          target="_blank"
        >
          <IconCoffee className="h-12 w-12 text-orange-400" />
        </Card>
      </div>
    </div>
  );
};
