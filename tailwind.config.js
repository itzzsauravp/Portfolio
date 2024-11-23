/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        iBlack: "#0C0C0C",
        iBrown: "#481E14",
        iMaroon: "#9B3922",
        iOrange: "#F2613F",
      },
    },
  },
  plugins: [],
};
