/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				chartreuse: '#E1F16B;',
				charcoal: '#1A1D1F;',
				'slate-grey': '#6F767E;'
			},
			backgroundImage: {
				'pattern-vector': "url('./src/assets/images/pattern-vector.svg')"
				// 'footer-texture': "url('/img/footer-texture.png')"
			}
		},
		fontFamily: {
			heading: ['Druk Wide Bold', 'sans-serif'],
			text: ['Product Sans', 'sans-serif'],
			'clash-display': ['Clash Display', 'sans-serif'],
			'integral-CF': ['Integral CF', 'sans-serif']
		}
	},
	plugins: []
};
