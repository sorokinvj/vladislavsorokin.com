const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Roman", ...defaultTheme.fontFamily.sans],
        title: "Filson Pro",
        mono: ["Consolas", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        yellow: "#ffbd11",
        malibu: "#48e2fe",
        apricot: "#EA7F68",
        disabled: "#DEDEDE",
        darkgrey: "#656565",
        lightgrey: "rgba(101, 101, 101, 0.67)",
      },
    },
    letterSpacing: {
      1: "0em",
      2: "0.025em",
      3: "0.03em",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
