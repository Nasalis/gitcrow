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
          100: "#1B1E26",
          200: "#2B2F37",
          300: "#23262e",
        },
        gray: {
          100: "#808080",
          200: "#8B949E"
        },
        green: {
          100: "#8EC07C",
        },
        orange: {
          100: "#FBA94C",
        },
        pink: {
          100: "#f25ac9"
        },
        purple: {
          100: "#A55FEB"
        },
        red: {
          100: "#F75A68",
        },
        white: {
          100: "#ffffff",
          200: "#ffffff80",
        }
      }
    },
  },
  plugins: [],
}
