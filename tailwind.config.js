function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

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
          base: withOpacity('--color-text-base'),
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
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
