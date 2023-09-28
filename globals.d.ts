import type { DarkTheme, LightTheme } from "@shared/assets/styles/colors";

declare module "@react-navigation/native" {
  export function useTheme(): LightTheme | DarkTheme;
}
