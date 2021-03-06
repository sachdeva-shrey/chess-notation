module.exports = {
  purge: ["./src/components/**/*.tsx"],
  darkMode: false,
  theme: {
    screens: {
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
        ],
      },
      opacity: ["disabled"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
