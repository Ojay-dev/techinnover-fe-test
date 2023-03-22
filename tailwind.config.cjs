/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				chartreuse: '#E1F16B;',
				charcoal: '#1A1D1F;'
			}
		},
		fontFamily: {
			heading: ['Druk Wide Bold', 'sans-serif'],
			text: ['Product Sans', 'sans-serif']
		}
	},
	plugins: []
};
