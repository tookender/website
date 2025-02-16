import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");
const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "time": ["TimeTraveler", "Arial"]
    },
    screens: {
      "xs": "475px",
      "ml": "920px",
      ...defaultTheme.screens
    }
  },
  plugins: [heroui(), require("@tailwindcss/typography")],
  darkMode: "class",
};

export default config;
