/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'dai': ['Dai Banna SIL', 'serif'],
      'bungee': ['Bungee Spice', 'cursive']
    }
  },
  plugins: [],
}