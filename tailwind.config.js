/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0a0e27',
          navy: '#1a1f3a',
          purple: '#2d1b69',
          gold: '#ffd700',
          'gold-light': '#ffe55c',
          silver: '#c0c0c0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d1b69 100%)',
        'gold-gradient': 'linear-gradient(135deg, #ffd700 0%, #ffe55c 100%)',
      },
      boxShadow: {
        'cosmic': '0 10px 40px rgba(255, 215, 0, 0.1)',
        'cosmic-lg': '0 20px 60px rgba(255, 215, 0, 0.2)',
      },
    },
  },
  plugins: [],
}