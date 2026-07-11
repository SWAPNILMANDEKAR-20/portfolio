/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F3EFE6",
        surface: "#FBFAF6",
        line: "#E4DECE",
        ink: "#1C1710",
        mist: "#7A7263",
        rust: "#C2551C",
        pine: "#2F5D50",
        gold: "#A9822A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
