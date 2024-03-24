/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        n: {
          1: "#FFFFFF",
          2: "#D0D6F9",
          3: "#0B0D17",
        },
      },
      fontFamily: {
        bellefair: ["Bellefair", ...fontFamily.sans],
        barlow: "Barlow",
        condensed: "Barlow Condensed",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".heading-1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".heading-2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".heading-3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".heading-4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".heading-5": {
          "@apply text-2xl leading-normal": {},
        },
        ".sub-heading-1": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".sub-heading-2": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".nav-text": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-text": {
          "@apply font-semibold text-lg leading-8": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
