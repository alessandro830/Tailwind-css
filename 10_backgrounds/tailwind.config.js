/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "arial": "Arial"
      },
      fontSize: {
        "12xl": "8rem"
      }
    },
  },
  plugins: [],
}