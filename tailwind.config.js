/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#F4F4F4"
      },
      fontFamily: {
        nhg: ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}