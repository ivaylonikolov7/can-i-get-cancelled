module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		colors: {
		  'primary': '#003049',
		  'secondary': '#F77F00',
		  'third': '#D62828',
		  'light': '#EAE2B7'
		}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
