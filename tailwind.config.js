/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
  extend: {
    colors: {
      ivory: "#FFFFF0",
    },
    scrollSnapType: {
      y: "y mandatory",
    },
  },
    extend: {},
    colors: {
      ivory: "#FFFFF0",
    },
    scrollSnapType: {
      y: "y mandatory",
    },
  },
  plugins: [],
  darkMode: "class",
}

  plugins: [require("@tailwindcss/scroll-snap")],
