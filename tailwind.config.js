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
      xl: '1290px',
      '2xl': '1440px',
      '3xl': '1536px',
      tall: { 'raw': '(min-height: 820px)' },
    },
    extend: {
      colors: {
        primary: '#1c1c1c',
        accent: '#269DF2',
        accentLess: '#4F738C',
        lightGray: '#595959',
        darkGray: '#ADADAD',
        lighterGray: '#E8EBF2',
      },
      fontFamily: {
        inter: ['Inter'],
        mont: ['Montserrat']
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'up-down-1': 'up-down 1s ease-in-out infinite',
        'up-down-2': 'up-down 1s ease-in-out 100ms  infinite',
        'up-down-3': 'up-down 1s ease-in-out 200ms  infinite',
      },
      keyframes: {
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }, 
        'up-down': {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
        }
      }
    },
  },
  plugins: [],
}

