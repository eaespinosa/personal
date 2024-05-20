/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
    },
       screens: { 'sm': { 'max': '640px' } },
  },
  plugins: [],
}
}
