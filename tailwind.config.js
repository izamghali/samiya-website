/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#1c1c1c',
        accent: '#269DF2',
        accentLess: '#4F738C',
        lightGray: '#595959',
        darkGray: '#ADADAD',

      },
      fontFamily: {
        inter: ['Inter'],
        mont: ['Montserrat']
      }
    },
  },
  plugins: [],
}

