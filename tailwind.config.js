/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        Shades: "#6689CC",
        accent: "#406BBF",
        Light: "ECF0F9",
        dim: "#C6D3EC",
        blackens: "#132039",
        Amber: " #D9E1F2",
        stripe: `linear-gradient(61deg, rgba(198,211,236,1) 0%, rgba(255,255,255,1) 44%, rgba(217,226,242,1) 92%)`,
      },
    },
  },
  plugins: ["tailwindcss-animated"],
})
