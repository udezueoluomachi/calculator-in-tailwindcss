/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors : {
      "black" : "#000000",
      "off-white" : "#E0E0E0",
      "grey" : "#2F2F2F",
      "orange" : "#F19305"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
