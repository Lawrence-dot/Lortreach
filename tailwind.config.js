/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["hidden", "sm:hidden", "flex", "block", "absolute", "sm:block", "ml-auto", "pb-3", "ml-2", "my-auto", "m-2", "bg-[#1A1036]"],
  theme: {
    extend: {
      colors: {
        primary: '#02AAB0'
      }
    },
  },
  plugins: [],
}