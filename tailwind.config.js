/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '7': '200px',
      },
      screens: {
        'print': {'raw': 'print'},
        // => @media  print { ... }
      }
    },
  },
  plugins: [],
}

