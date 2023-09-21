/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clashDisplay: ['Clash Display', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"]
      },
    },
  },
  plugins: [],
}

