/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
    theme: {
      extend: {
        spacing: {
          "7": "200px",
        },
        screens: {
          "print": {"raw": "print"},
          // => @media  print { ... }
        }
      },
    },
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
}