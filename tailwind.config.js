/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

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
        },
        ".orientation-mixed": { "text-orientation": "mixed" },
        ".orientation-upright": { "text-orientation": "upright" },
        ".orientation-sideways-right": { "text-orientation": "sideways-right" },
        ".orientation-sideways": { "text-orientation": "sideways" },
        ".orientation-glyph": { "text-orientation": "use-glyph-orientation" },
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
      },
      fontFamily: {
        'mono': ['Azeret Mono', ...defaultTheme.fontFamily.mono]
      },
      fontSize: {
        'xs': '0.7rem',
      },
      backgroundImage: {
        'avatar': "url('/rino.png')",
        'mountains': "url('/mountains.jpg')",
      }
    },
    variants: {
      extend: {},
    },
  },
}