const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      // purple: colors.violet,
      // pink: colors.pink,
      white: '#ffffff',
      side: '#3C4B64',
      'side-top': '#303C54',
      'side-top-dark': '#22222F',
      'form-control-dark': '#464750',
      active: '#46546C',
      'active-dark': '#353640',
    },
    extend: {
      backgroundImage: theme => ({
        'loader': "url('assets/bg-loader.png')"
      }),
      screens: {
        'xs': { 'min': '0px', 'max': '639px' },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
