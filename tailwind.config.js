/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        dark: "#0f172a",
      },
      width: {
        circle: "50px",
      },
      height: {
        circle: "50px",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
