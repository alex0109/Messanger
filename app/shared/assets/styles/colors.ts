const commonColors = {
  main: "#5698FB",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#727272",
  success: "#298811",
  red: "#DC5656",
  warning: "#E57309",
  peach: "#FF6262",
  blue: "#4891FF",
};

const light = {
  colors: {
    header: "#4891FF",
    mainBackground: "#F1F1F1",
    chatsBars: "#C6E0FE",
    mainText: "#000000",
    secondaryText: "#4F4F4F",
    adaptiveText: "#000000",
    footer: "#FFFFFF",
    drawerBackground: "#F1F1F1",
    adaptiveGrey: "#727272",
    ...commonColors,
  },
};

const dark = {
  colors: {
    header: "#282828",
    mainBackground: "#1D1D1D",
    chatsBars: "#282828",
    mainText: "#FFFFFF",
    secondaryText: "#E7E7E7",
    adaptiveText: "#FFFFFF",
    footer: "#282828",
    drawerBackground: "#282828",
    adaptiveGrey: "#9D9D9D",
    ...commonColors,
  },
};

export default { commonColors, light, dark };
export type LightTheme = typeof light;
export type DarkTheme = typeof dark;
