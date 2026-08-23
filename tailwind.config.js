/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        fintech: {
          dark: '#0a0a0a',
          darker: '#050505',
          card: '#141414',
          cardHover: '#1a1a1a',
          emerald: '#10b981',
          teal: '#14b8a6',
          blue: '#3b82f6',
          border: '#262626',
        }
      }
    },
  },
  plugins: [],
}
