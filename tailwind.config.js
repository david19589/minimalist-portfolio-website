/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    letterSpacing: {
      tight: "-.36px",
      wide: "-.45px",
      wider: "2px",
    },
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
