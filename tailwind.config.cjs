/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#FFCB00',
					secondary: '#9966FF',
					accent: '#8AC63F',
					neutral: '#FFFF99',
					'base-100': '#252525'
				}
			},
			{
				'custom-light': {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#FFCB00',
					secondary: '#9966FF',
					accent: '#8AC63F',
					neutral: '#252525',
					'OFFbase-100': '#252525'
				}
			},
			'light'
		]
	},

	theme: {
		REPLACESmaxWidth: {
			'1/2': '50%'
		},
		OFF_fontFamily: {
			sans: ['Jost', ...defaultTheme.fontFamily.sans],
			serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
			mono: [...defaultTheme.fontFamily.mono]
		},
		extend: {
			maxWidth: {
				'1/2': '50%',
				'3/4': '75%'
			},
			maxHeight: {
				'1/2': '50%'
			},
			screens: {
        'sm-landscape': { 'raw': '(max-height: 500px)' }
        // => @media (max-height: 500px) { ... }
      }
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
