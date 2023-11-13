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
      },
      backgroundImage: {
        'about1': "url('./src/assets/bg-img/food-11.webp')",
        'about2': "url('./src/assets/bg-img/food-133.webp')",
        'about3': "url('./src/assets/bg-img/food-100.webp')",
        'about4': "url('./src/assets/bg-img/food-84.webp')",
        'about5': "url('./src/assets/bg-img/food-135.webp')",
      }
    },
  },
  plugins: [],
}

