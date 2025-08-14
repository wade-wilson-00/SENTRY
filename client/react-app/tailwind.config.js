/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Bebas Neue', 'sans-serif', 'cursive'], // 'custom' is the class name you'll use
      },
    },
  },
  plugins: [],
}

