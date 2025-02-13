/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "cidade": "url(../img/bg_cidade.jpg)",
        "tailwind": "url(../img/tailwind.png)"
      })
    },
  },
  plugins: [],
}