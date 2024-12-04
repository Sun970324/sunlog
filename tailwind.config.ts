import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suitVariable: "SUIT-Variable, sans-serif",
        montserrat: "montserrat, sans-serif",
        "montserrat-semibold": "montserrat-bold, sans-serif",
        "montserrat-bold": "montserrat-bold, sans-serif",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        dialog: "0px 10px 20px rgba(19, 21, 12, 0.05)",
        card: "0px 0px 20px rgba(0, 0, 0, 0.02)",
        floating: "0px 5px 10px rgba(24, 24, 32, 0.1)",
        floatingReverse: "0px -5px 5px rgba(24, 24, 32, 0.1)",
      },
      colors: {
        primary: {
          DEFAULT: "#2C3A84",
          hover: "#3A4CA8",
          active: "#07124F",
        },
        secondary: {
          light: "#d8deff",
          dark: "#979fc7",
        },
      },
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1650px",
    },
  },
  plugins: [],
};
export default config;
