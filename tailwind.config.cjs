/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm/2': '540px',
      'sm/3': '350px',
      ...defaultTheme.screens
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: 0, transform: 'translateY(-2rem)' },
          '100': { opacity: 1, transform: 'translateY(0rem)' },
        },
        wiggleX: {
          '0%': { opacity: 0, transform: 'translateX(-2rem)' },
          '100': { opacity: 1, transform: 'translateX(0rem)' },
        },
        rotate: {
          '0%%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
      },
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
