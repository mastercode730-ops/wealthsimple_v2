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
        ws: {
          'off-white': '#090a0f',
          'dark': '#ffffff',
        },
        fintech: {
          dark: '#0d0e15',
          darker: '#090a0f',
          light: '#090a0f',
          lighter: '#0d0e15',
          card: '#13151f',
          cardHover: '#1a1d2b',
          emerald: '#10b981',
          teal: '#14b8a6',
          blue: '#3b82f6',
          border: '#1f2434',
          textDark: '#ffffff',
          textLight: '#94a3b8',
        }
      }
    },
  },
  plugins: [],
}
