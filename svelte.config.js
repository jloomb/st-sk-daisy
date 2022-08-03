import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: true
		})
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
