import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "475px",
      ...defaultTheme.screens
    }
  },
  plugins: [nextui()],
  darkMode: "class",
};

export default config;
