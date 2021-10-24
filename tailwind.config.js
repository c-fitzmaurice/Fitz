module.exports = {
  content: [
    "source/**/*.html",
    "source/**/*.md",
    "source/**/*.js",
    "source/**/*.php",
    "source/**/*.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        fitz: "#465058",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Constantia", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwindcss-children"),
  ],
};
