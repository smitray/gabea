module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        cormo: ['Cormorant Garamond', 'serif'],
      },
      textColor: {
        skin: {
          base: '#707070',
          primary: '#892432',
          secondary: '#4F748B',
        },
      },
      backgroundColor: {
        skin: {
          primary: '#892432',
          secondary: '#4F748B',
          overlay: '#060f21',
          bgBack: '#ededed',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
