import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
  // purge: [],
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        primary: {
          100: "#FFE8F0",
          DEFAULT: "#EE2B69",
        },
        secondary: "#FBE843",
        black: {
          100: "#333333",
          200: "#141413",
          300: "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          100: "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["font-work-sans"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(238, 43, 105)",
      },
    },
  },
  // variants: {
  //   extend: {},
  // },
  // plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  // plugins: {
  //   typography: require("@tailwindcss/typography"),
  //   animate: require("tailwindcss-animate"),
  // },
  plugins: [
    animate,
    typography,
    // plugin(({ addUtilities }) => {
    //   addUtilities({
    //     ".pattern": {
    //       backgroundImage:
    //         "linear-gradient(to right, transparent 49.5%, rgba(251,232,67,0.2) 49.5%, rgba(251,232,67,0.6) 50.5%, transparent 50.5%)",
    //       backgroundSize: "5% 100%",
    //       backgroundPosition: "center",
    //       backgroundRepeat: "repeat-x",
    //     },
    //   });
    // }),
  ],
};

export default config;
