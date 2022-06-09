const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
