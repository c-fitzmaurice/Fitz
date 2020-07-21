const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: [
      'source/**/*.html',
      'source/**/*.md',
      'source/**/*.js',
      'source/**/*.php',
      'source/**/*.vue',
    ],
    options: {
      whitelist: [/language/, /hljs/, /mce/],
    },
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        fitz: '#465058',
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Constantia', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [],
};
