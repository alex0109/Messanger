const commonColors = {
  main: "#5698FB",
  //
  white: "#FFFFFF",
  lightGrey: "#E7E7E7",
  darkGrey: "#5D5E63",
  grey: "#727272",
  labelGrey: "#9D9D9D",
  blue: "#4891FF",
  red: "#DC5656",
  //
  whiter: "#fff",
  black: "#000000",
  grayDark: "#9D9D9D",
  grayLight: "#D9D9D9",
  success: "#298811",
  warning: "#E57309",
  peach: "#FF6262",
};
const light = {
  colors: {
    //
    header: "#4891FF",
    mainBackground: "#F1F1F1",
    chatsBars: "#C6E0FE",
    mainText: "#000000",
    secondaryText: "#4F4F4F",
    adaptiveText: "#000000",
    footer: "#FFFFFF",
    drawerBackground: "#F1F1F1",
    //
    ligtWhite: "#000000",
    sky: "#DE5E69",
    ligtGray: "gray",
    ...commonColors,
  },
};

const dark = {
  colors: {
    //
    header: "#282828",
    mainBackground: "#1D1D1D",
    chatsBars: "#282828",
    mainText: "#FFFFFF",
    secondaryText: "#E7E7E7",
    adaptiveText: "#FFFFFF",
    footer: "#282828",
    drawerBackground: "#282828",
    //
    ...commonColors,
  },
};

export default { commonColors, light, dark };
export type LightTheme = typeof light;
export type DarkTheme = typeof dark;
