/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      workSans: ['Work Sans', 'sans-serif'],
      spaceMono: ['Space Mono', 'monospace']
    },
    backgroundImage: {
      highlightedBg: "url('https://pbs.twimg.com/media/FrcERKSXwAcUwJ9?format=jpg&name=large')"
    }
  },
  plugins: [],
}