/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      colors: {
        black: {
          100: "#1B1E26"
        },
        gray: {
          100: "#808080",
          200: "#2B2F37"
        },
        green: {
          100: "#8EC07C",
        },
        pink: {
          100: "#f25ac9"
        },
        orange: {
          100: "#FBA94C",
        },
        purple: {
          100: "#A55FEB"
        },
        red: {
          100: "#F75A68",
        }
      }
    },
  },
  plugins: [],
}
