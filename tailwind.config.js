/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  
      },
    },
    colors: {
      primaryLight: {
        DEFAULT: '#F2F2F2',
        50: 'rgba(242, 242, 242, 0.1)',
        100: 'rgba(242, 242, 242, 0.3)',
        200: 'rgba(242, 242, 242, 0.5)',
      },
      primaryGreen: {
        DEFAULT: '#8CC63F',
        50: 'rgba(140, 198, 63, 0.1)',
        100: 'rgba(140, 198, 63, 0.3)',
        200: 'rgba(140, 198, 63, 0.5)',
      },
      primaryDark: {
        DEFAULT: '#005A32',
        50: 'rgba(0, 90, 50, 0.1)',
        100: 'rgba(0, 90, 50, 0.3)',
        200: 'rgba(0, 90, 50, 0.5)',
      },
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    boxShadow: {
      'primaryLight-sm': '0 1px 2px 0 rgba(242, 242, 242, 0.1)',
      'primaryLight-md': '0 4px 6px -1px rgba(242, 242, 242, 0.3)',
      'primaryLight-lg': '0 10px 15px -3px rgba(242, 242, 242, 0.5)',

      'primaryGreen-sm': '0 1px 2px 0 rgba(140, 198, 63, 0.1)',
      'primaryGreen-md': '0 4px 6px -1px rgba(140, 198, 63, 0.3)',
      'primaryGreen-lg': '0 10px 15px -3px rgba(140, 198, 63, 0.5)',

      'primaryDark-sm': '0 1px 2px 0 rgba(0, 90, 50, 0.1)',
      'primaryDark-md': '0 4px 6px -1px rgba(0, 90, 50, 0.3)',
      'primaryDark-lg': '0 10px 15px -3px rgba(0, 90, 50, 0.5)',
    },
  },
  plugins: [

  ],
}

