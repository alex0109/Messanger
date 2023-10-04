const commonColors = {
  main: "#5698FB",
  white: "#fff",
  black: "#000000",
  gray: "#727272",
  grayDark: "#9D9D9D",
  grayLight: "#D9D9D9",
  success: "#298811",
  red: "#C51D1D",
  warning: "#E57309",
  peach: "#FF6262",
  blue: "#4891FF",
};
const light = {
  colors: {
    themeColor: "#F1F1F1",
    themeColorText: "#000",
    themeColorBlock:"#fff",
    ...commonColors,
  },
};

const dark = {
  colors: {
    themeColor: "#1D1D1D",
    themeColorText: "#fff",
    themeColorBlock:"#282828",
    ...commonColors,
  },
};

export default { commonColors, light, dark };
export type LightTheme = typeof light;
export type DarkTheme = typeof dark;
