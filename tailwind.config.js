module.exports = {
  darkMode: false, // or 'media' or 'class'

  purge: {
    content: ["./src/**/*.tsx"],
  },

  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1rem",
      },
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
