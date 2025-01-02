/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
      extend: {
          colors: {
              primary: "#1a1c21",
              accent: "#F59E0B",
              lightBackground: "#F9FAFB",
              darkBackground: "#0f0f0f",
              lightText: "#111827",
              darkText: "#F9FAFB",
          },
      },
  },
  plugins: [],
};


