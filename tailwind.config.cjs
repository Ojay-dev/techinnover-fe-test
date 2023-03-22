/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				chartreuse: '#E1F16B;'
			}
		},
		fontFamily: {
			heading: ['Druk Wide Bold', 'sans-serif'],
			text: ['Product Sans', 'sans-serif']
		}
	},
	plugins: []
};
