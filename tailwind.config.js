/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)',
        yellow: 'hsl(47, 88%, 63%)'
      },
      fontFamily: {
        sans: ["Figtree", "sans-serif"]
      }
    },
  },
  plugins: [],
}

