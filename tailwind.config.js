const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
        title: "Filson Pro",
      },
      colors: {
        disabled: "#DEDEDE",
        darkgrey: "#656565",
        lightgrey: "rgba(101, 101, 101, 0.67)",
        yellow: "#ffbd11",
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
