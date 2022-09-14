/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:
    [
      "hidden", "sm:hidden", "flex", "block", "absolute", "sm:block", "ml-auto", "pb-3", "ml-2", "my-auto",
      "m-2", "bg-[#1A1036]", "mb-auto", "mx-5", "sm:mx-10", "lg:mx-16", "hover:bg-primary", "hover:text-white",
      "inline", "mx-1", "text-black", "m-3", "text-[#FF002E]", "rounded", "rounded-lg", "lg:mr-auto", "pt-2",
      "sm:pt-3", "border-l-2", "border-primary", "w-32", "text-sm", "text-md", "text-xl", "text-2xl", "text-3xl",
      "ml-1", "lg:mr-auto", "lg:ml-0"
    ],
  theme: {
    extend: {
      colors: {
        primary: '#02AAB0'
      }
    },
  },
  plugins: [],
}