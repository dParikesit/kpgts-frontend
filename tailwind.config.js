module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        primary: '#f7e9dc',
        secondary: '#883726',
        text: '#8caaaf',
    },
    extend: {
      zIndex: {
        '-10': '-10',
      },
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
