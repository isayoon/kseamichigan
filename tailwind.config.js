/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
        colors:{
            'bg1-color': '#FCFAF4',
            'textblue-color': '#3954A5',
        },
        fontFamily: {
            custom: ['Archivo_Black', 'sans-serif'],
            custom1: ['Outfit_bold', 'sans-serif'],
          },
    },
  },
  plugins: [],
}

