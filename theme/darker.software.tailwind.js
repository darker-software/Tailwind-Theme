const theme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  theme: {
    colors: {
      ...theme.colors,
			blue: {
        light: '#7cbbee',
        DEFAULT: '#2F93E4',
        dark: '#024c88'
      },
			purple: {
        light: '#9185f1',
        DEFAULT: '#563EFF',
        dark: '#4a4097'
      },
			gray: {
        light: '#d3dce6',
			  DEFAULT: '#46515e',
			  dark: '#1a1f24'
      },
			pink: {
        light: '#ffb4d6',
        DEFAULT: '#d1729d',
        dark: '#793e59'
      },
			orange: {
        light: '#f7a286',
        DEFAULT: '#ff7849',
        dark: '#9c3d1d'
      },
			green: {
        light: '#9bf0c1',
        DEFAULT: '#13ce66',
        dark: '#086b35'
      },
			yellow: {
        light: '#f3df95',
        DEFAULT: '#FACF39',
        dark: '#b19327'
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
