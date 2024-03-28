/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        n: {
          1: "#FFFFFF",
          2: "#D0D6F9",
          3: "#979797",
          4: "#0B0D17",
        },
      },
      fontFamily: {
        bellefair: ["Bellefair", ...fontFamily.sans],
        barlow: "Barlow",
        condensed: "Barlow Condensed",
      },
      backgroundImage: {
        "hero-xs": "url('../src/assets/home/background-home-mobile.jpg')",
        "hero-sm": "url('../src/assets/home/background-home-tablet.jpg')",
        "hero-lg": "url('../src/assets/home/background-home-desktop.jpg')",
      },
      letterSpacing: {
        tight: "2.35px",
        normal: "2.7px",
        wide: "4.75px",
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
          "@apply font-bellefair text-[5rem] md:text-[9.375rem]  uppercase": {},
        },
        ".heading-2": {
          "@apply font-bellefair text-[3.5rem]  md:text-[5rem]  lg:text-[6.25rem]  uppercase":
            {},
        },
        ".heading-3": {
          "@apply font-bellefair text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem] uppercase":
            {},
        },
        ".heading-4": {
          "@apply font-bellefair text-[1rem] md:text-[1.5rem] lg:text-[2rem] uppercase":
            {},
        },
        ".heading-5": {
          "@apply font-condensed text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] tracking-wide uppercase":
            {},
        },
        ".sub-heading-1": {
          "@apply font-bellefair text-[1.75rem] uppercase": {},
        },
        ".sub-heading-2": {
          "@apply font-condensed text-[0.875rem] tracking-tight uppercase": {},
        },
        ".nav-text": {
          "@apply font-condensed text-[0.875rem] lg:text-[1rem] tracking-normal uppercase":
            {},
        },
        ".body-text": {
          "@apply font-barlow text-[1rem]": {},
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
