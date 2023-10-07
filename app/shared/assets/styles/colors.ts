const commonColors = {
  main: "#5698FB",
  white: "#F1F1F1",
  whiter: "#fff",
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
    themeColorBlock: "#FFFFFF",
    themeColorText: "#000",
    lightWhite: "#000000",
    sky: "#DE5E69",
    lightGray: "gray",
    ...commonColors,
  },
};

const dark = {
  colors: {
    themeColor: "#1D1D1D",
    themeColorBlock: "#5D5E63",
    themeColorText: "#fff",
    darkWhite: "#FFFFFF",
    sky: "#831a23",
    darkGray: "white",
    ...commonColors,
  },
};

export default { commonColors, light, dark };
export type LightTheme = typeof light;
export type DarkTheme = typeof dark;
