/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './index.html'],
  plugins: [
    require('daisyui'),
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl'
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr'
        }
      }
      addUtilities(newUtilities)
    })
  ],

  daisyui: {
    darkTheme: "light",
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

  theme: {
    extend: {
      screens: {
        "print": { "raw": "print" },
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px'
      }
    },
    variants: {
      extend: {},
    },
  },
}