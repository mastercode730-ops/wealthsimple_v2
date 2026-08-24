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
          light: '#ffffff',
          lighter: '#f7f8fa',
          card: '#ffffff',
          cardHover: '#f9fafb',
          emerald: '#10b981',
          teal: '#14b8a6',
          blue: '#3b82f6',
          border: '#e5e7eb',
          textDark: '#111827',
          textLight: '#6b7280',
        }
      }
    },
  },
  plugins: [],
}
