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
    }
  },
  plugins: [],
}