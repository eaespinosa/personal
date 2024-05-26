/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
    },
       screens: { 'xs': { 'max': '640px' },
                  'sm': { 'max': '768px' },
       },
  },
  plugins: [],
}
}
