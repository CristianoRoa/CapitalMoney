/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700', // Cor do ouro
        'dark-gold': '#B8860B',
      },
    },
  },
  plugins: [],
}