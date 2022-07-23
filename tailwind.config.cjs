/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#8AC63F',
					secondary: '#9966FF',
					accent: '#FFCB00',
					neutral: '#FFFF99',
					'base-100': '#8AC63F'
				}
			},
			'light'
		]
	},

	theme: {
		fontFamily: {
      'sans': ['Jost', ...defaultTheme.fontFamily.sans],
      'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
