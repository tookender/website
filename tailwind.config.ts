import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xs": "475px",
      ...defaultTheme.screens
    }
  },
  plugins: [],
};
export default config;
