import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useEffect, useState } from "react";

import type { ReactNode, FC } from "react";

export type ThemeType = "light" | "dark";
interface ThemeContextInterface {
  theme: ThemeType;
  changeTheme: (newTheme: ThemeType) => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}
const defaultThemeContext: ThemeContextInterface = {
  theme: "light",
  changeTheme: () => {},
};

const ThemeContext = createContext<ThemeContextInterface>(defaultThemeContext);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const saveTheme = useCallback(async (themeValue: ThemeType) => {
    await AsyncStorage.setItem("Theme", themeValue);
  }, []);

  const getTheme = useCallback(async () => {
    const savedTheme = await AsyncStorage.getItem("Theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  const changeTheme = useCallback(
    (newTheme: ThemeType) => {
      setTheme(newTheme);
    },
    [saveTheme]
  );

  const contextValue = { theme, changeTheme };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
export { ThemeContext, ThemeProvider };
