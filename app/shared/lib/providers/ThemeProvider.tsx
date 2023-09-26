/* eslint-disable no-unused-vars */
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useEffect, useCallback } from "react";

import type { FC, ReactNode } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  themeIndex: number;
  changeTheme: (newTheme: "light" | "dark", newIndex: number) => void;
}

const defaultThemeContext: ThemeContextType = {
  theme: "light",
  themeIndex: 2,
  changeTheme: () => {},
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeIndex, setThemeIndex] = useState<number>(2);

  const saveTheme = useCallback(async (themeValue: "light" | "dark") => {
    await AsyncStorage.setItem("Theme", themeValue);
  }, []);

  const saveThemeIndex = useCallback(async (index: number) => {
    await AsyncStorage.setItem("ThemeIndex", String(index));
  }, []);

  const getTheme = useCallback(async () => {
    const savedTheme = await AsyncStorage.getItem("Theme");
    const savedThemeIndex = await AsyncStorage.getItem("ThemeIndex");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedThemeIndex) {
      setThemeIndex(Number(savedThemeIndex));
    }
  }, []);

  useEffect(() => {
    void getTheme();
  }, [getTheme]);

  const changeTheme = useCallback(
    (newTheme: "light" | "dark", newIndex: number) => {
      setTheme(newTheme);
      setThemeIndex(newIndex);
      saveTheme(newTheme);
      saveThemeIndex(newIndex);
    },
    [saveTheme, saveThemeIndex]
  );

  const contextValue = {
    theme,
    themeIndex,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
