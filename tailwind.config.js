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
        Shades: {
          100: "#406BBF",
          500: "#6689CC",
        },
      },
    },
  },
  plugins: [[require("daisyui")], require("flowbite/plugin")],
};
