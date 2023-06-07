/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        Shades: "#6689CC",
        accent: "#406BBF",
        light: "ECF0F9",
        dim: "#C6D3EC",
      },
    },
  },
  plugins: [[require("daisyui")], require("flowbite/plugin")],
};
