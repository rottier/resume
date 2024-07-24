/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    require('daisyui'),
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
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
      spacing: {
        "7": "200px",
      },
      screens: {
        "print": { "raw": "print" },
        // => @media  print { ... }
      }
    },
  },
  variants: {
    extend: {},
  },
}