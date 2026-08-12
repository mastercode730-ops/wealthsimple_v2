/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ws-off-white': '#F6F3EE',
        'ws-dark': '#1a1a1a',
        'ws-yellow': '#fdeca6',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
