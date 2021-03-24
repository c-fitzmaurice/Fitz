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
  darkMode: false, // or 'media' or 'class'
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
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Constantia', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
};
