/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["hidden", "sm:hidden"],
  theme: {
    extend: {
      colors: {
        primary: '#02AAB0'
      }
    },
  },
  plugins: [],
}