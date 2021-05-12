module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		screens: {
			'sm': '740px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px'
		},
		colors: {
			white: '#ffffff',
			black: '#000000',
			gray: '5F5F5F'
		}
	},
	variants: {
		extend: {},
	},
	plugins: [],
}