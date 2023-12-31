const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      grey: {
        DEFAULT: "#262A34",
        50: "#76819B",
        100: "#6B7692",
        200: "#5A637B",
        300: "#485063",
        400: "#373D4C",
        500: "#262A34",
        600: "#0E1014",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      aquamarine: {
        DEFAULT: "#80FFDB",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FAFFFE",
        300: "#D2FFF2",
        400: "#A9FFE7",
        500: "#80FFDB",
        600: "#48FFCB",
        700: "#10FFBB",
        800: "#00D79A",
        900: "#009F72",
      },
      swans: {
        DEFAULT: "#E1F1ED",
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#FFFFFF",
        300: "#FFFFFF",
        400: "#FDFEFE",
        500: "#E1F1ED",
        600: "#BBDFD6",
        700: "#95CDBF",
        800: "#6EBBA8",
        900: "#4DA58F",
      },
      smoke: {
        DEFAULT: "#101217",
        50: "#5B6783",
        100: "#535D77",
        200: "#424A5F",
        300: "#313847",
        400: "#21252F",
        500: "#101217",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
      },
      green: {
        DEFAULT: "#74AE98",
        50: "#E8F2EE",
        100: "#DBEAE4",
        200: "#C1DBD1",
        300: "#A8CCBE",
        400: "#8EBDAB",
        500: "#74AE98",
        600: "#56947C",
        700: "#41705F",
        800: "#2D4D41",
        900: "#182923",
      },
    },
    extend: {
      textUnderlineOffset: {
        10: "20px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
