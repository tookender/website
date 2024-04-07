import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const colors = require("tailwindcss/colors");
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      whitney: [
        "Whitney",
        "Noto Sans",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      code: [
        "Consolas",
        "Andale Mono WT",
        "Andale Mono",
        "Lucida Console",
        "Lucida Sans Typewriter",
        "DejaVu Sans Mono",
        "Bitstream Vera Sans Mono",
        "Liberation Mono",
        "Nimbus Mono L",
        "Monaco",
        "Courier New",
        "Courier",
        "monospace",
      ],
    },
    colors: {
      "background-color": "hsl(240, 10%, 4%, 1)",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      purple: colors.violet,
      zinc: colors.zinc,
      sky: colors.sky,
      orange: colors.orange,
      yellow: colors.yellow,
      cyan: colors.cyan,
      blue: colors.blue,
      neutral: colors.neutral,
      green: colors.green,
      emerald: colors.emerald,
      red: colors.red,
    },
    screens: {
      xxl: "1400px",
      ...defaultTheme.screens,
    },
    animation: {
      blob: "blob 10s infinite",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0px, 0px) scale(1) rotate(5deg)",
        },
        "33%": {
          transform: "translate(30px, -5px) scale(1.1) rotate(10deg)",
        },
        "66%": {
          transform: "translate(-5px, 30px) scale(0.9) rotate(15deg)",
        },
        "100%": {
          transform: "tranlate(0px, 0px) scale(1) rotate(10deg)",
        },
      },
    },
  },
  plugins: [
    nextui(),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="42" height="42" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-big-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="84" height="84" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
