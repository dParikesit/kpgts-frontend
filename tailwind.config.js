/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
        primary: '#f7e9dc',
        secondary: '#883726',
        text: '#7c9599',
    },
    extend: {
      backgroundImage: (theme)=>({
        'kapal': "url('/img/bg.jpg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
