const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FCC537",
        disabled: "#DEDEDE",
      },
    },
    letterSpacing: {
      1: "0em",
      2: "0.025em",
      3: "0.03em",
    },
  },
  plugins: [],
};
