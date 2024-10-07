/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    colors: {
      color1: '#96BBBB',
      color2: '#618985',
      color3: '#414535',
      color4: '#F2E3BC',
      color5: '#C19875',
      color6: {
        DEFAULT: '#090FEA',  
          dark: '#070CBE',   
          light: '#3A4CF8', 
        },      
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
