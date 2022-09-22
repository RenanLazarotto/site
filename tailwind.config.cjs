const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte', './lib/**/*.svelte', './src/app.html'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.slate,
      black: colors.black,
      blue: colors.blue,
      yellow: colors.amber,
      purple: colors.purple
    },
    extend: {
      fontFamily: {
        'sans': [
          'Inter',
          ...defaultTheme.fontFamily.sans
        ]
      }
    },
    fill: {
      purple: colors.purple
    }
  },
  plugins: [],
}