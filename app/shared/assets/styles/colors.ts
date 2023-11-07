const commonColors = {
  main: "#5698FB",
  white: "#fff",
  black: "#000000",
  gray: "#727272",
  success: "#298811",
  red: "#C51D1D",
  warning: "#E57309",
  peach: "#FF6262",
  blue: "#1E70ED",
};

const light = {
  colors: {
    themeColor: "#F1F1F1",
    themeColorBlock: "#FFFFFF",
    themeColorText: "#000",
    themeColorChatBlock: "#C6E0FE",
    headerColor: "#1E70ED",
    ...commonColors,
  },
};

const dark = {
  colors: {
    themeColor: "#1D1D1D",
    themeColorBlock: "#282828",
    themeColorHeader: "#282828",
    themeColorText: "#fff",
    themeColorChatBlock: "#282828",
    headerColor: "#282828",
    themeGrayText: "#E7E7E7",
    ...commonColors,
  },
};

export default { commonColors, light, dark };
export type LightTheme = typeof light;
export type DarkTheme = typeof dark;
