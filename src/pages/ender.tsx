import { motion } from "framer-motion";
import { Block } from "@/components/block";
import Code from "@/components/shiki";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { useEffect } from "react";

export default function Home() {
  const python = `from introduction import AboutMeBuilder

data = AboutMeBuilder() \\
  .set_name("ender") \\
  .set_gender("male") \\
  .set_languages("Python, JavaScript, TypeScript, Java, Lua, HTML") \\
  .set_projects("Korino PvP, Korii Bot, JBTC Bot, JBTC MC") \\
  .set_hobbies("Coding, Gaming, Minecraft Servers")`;

  const javascript = `const { AboutMeBuilder } = require("introduction");

module.exports = {
  data: new AboutMeBuilder()
    .setName("ender")
    .setGender("male")
    .setLanguages("Python, JavaScript, TypeScript, Java, Lua, HTML")
    .setProjects("Korino PvP, Korii Bot, JBTC Bot, JBTC MC")
    .setHobbies("Coding, Gaming, Minecraft Servers")
}`;

  const java = `import java.util.HashMap;
import java.util.Map;

public class AboutMeData {
    public static void main(String[] args) {
        Map<String, String> data = new HashMap<>();
        data.put("name", "ender");
        data.put("gender", "male");
        data.put("languages", "Python, JavaScript, TypeScript, Java, Lua, HTML");
        data.put("projects", "Korino PvP, Korii Bot, JBTC Bot, JBTC MC");
        data.put("hobbies", "Coding, Gaming, Minecraft Servers");
    }
}`;

  const html = `<div id="about-me">
  <p><strong>Name:</strong> <span id="name">ender</span></p>
  <p><strong>Gender:</strong> <span id="gender">male</span></p>
  <p><strong>Languages:</strong> <span id="languages">Python, JavaScript, TypeScript, Java, Lua, HTML</span></p>
  <p><strong>Projects:</strong> <span id="projects">Korino PvP, Korii Bot, JBTC Bot, JBTC MC</span></p>
  <p><strong>Hobbies:</strong> <span id="hobbies">Coding, Gaming, Minecraft Servers</span></p>
</div>}`;

  useEffect(() => {
    const button = document.getElementById("select") as HTMLButtonElement;
    const collapsed = document.getElementById("collapsed") as HTMLElement;
    const uncollapsed = document.getElementById("uncollapsed") as HTMLElement;
    const hidden = document.getElementById("hidden") as HTMLButtonElement;

    button.addEventListener("click", (_) => {
      if (uncollapsed.classList.contains("hidden")) {
        uncollapsed.classList.remove("hidden");
        collapsed.classList.add("hidden");

        hidden.classList.remove("hidden");
      } else {
        uncollapsed.classList.add("hidden");
        collapsed.classList.remove("hidden");

        hidden.classList.add("hidden");
      }
    });
  });

  return (
    <main className="mx-4">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.35 }}
      >
        <div className="flex flex-col w-full max-w-[1400px] min-h-screen mx-auto mt-24 gap-1">
          <h1 className="text-4xl font-extrabold">hey, I&apos;m ender 👋</h1>

          <p className="text-base">
            I&apos;m a full-stack developer, gamer, and Orthodox Christian ☦️
            <br />I currently work at{" "}
            <Block
              text="Rustbyte"
              href="https://rustbyte.dev"
              image="rustbyte.svg"
              alt="Rustbyte logomark"
            />{" "}
            as the co-founder, and the owner of{" "}
            <Block
              text="Korino"
              href="https://korino.dev"
              image="avatar.webp"
              alt="Ender profile picture"
            />
            , which is just a passion project.
          </p>

          <p className="text-neutral-300">
            Prefer code?
            <select className="w-36 ml-2 rounded text-sm outline-none border bg-neutral-800 text-neutral-100 border-neutral-700 focus:bg-neutral-700 focus:border-neutral-500 duration-500">
              <option disabled={true} className="text-white">
                Choose a language...
              </option>
              <option value="python">🐍 Python</option>
              <option value="javascript">🚀 JavaScript</option>
              <option value="java">☕️ Java</option>
              <option value="html">🌐 HTML</option>
            </select>
          </p>

          <div className="text-base text-neutral-400">
            <button className="flex flex-row gap-0.5 items-center" id="select">
              <IconChevronRight id="collapsed" height={16} width={16} />
              <IconChevronDown className="hidden" id="uncollapsed" height={16} width={16} />
              Click Me
            </button>

            <div className="hidden mt-2" id="hidden">
              <Code code={python} lang="python" />
            </div>
          </div>

          {/* <Code code={javascript} lang="javascript" />
          <Code code={java} lang="java" />
          <Code code={html} lang="html" /> */}
        </div>
      </motion.div>
    </main>
  );
}
