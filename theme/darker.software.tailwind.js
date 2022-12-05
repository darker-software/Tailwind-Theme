const theme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    colors: {
			blue: {
        DEFAULT: '#2F93E4'
      },
			purple: {
        DEFAULT: '#563EFF'
      },
			gray: {
        light: '#d3dce6',
			  DEFAULT: '#46515e',
			  dark: '#1a1f24'
      },
			pink: {
        DEFAULT: '#d1729d'
      },
			orange: {
        DEFAULT: '#ff7849'
      },
			green: {
        DEFAULT: '#13ce66'
      },
			yellow: {
        DEFAULT: '#FACF39'
      }
		},
		fontFamily: {
			sans: ['Raleway', ...theme.fontFamily.sans],
			serif: [...theme.fontFamily.serif],
			mono: ['"Nova Mono"', ...theme.fontFamily.mono]
		},
    extend: {},
  },
  plugins: [],
}
