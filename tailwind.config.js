/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmserif: ["var(--font-dm-serif)"],
        merriweather: ["var(--font-merriweather)"],
        inter: ["var(--font-inter)"],
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#54032d",
        gold: "#daaa4a",
        beige: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
