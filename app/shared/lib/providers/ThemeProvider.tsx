/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect, useCallback } from "react";

import { save, get } from "../utils/asyncMethods";

import type { FC, ReactNode } from "react";
import Animated, { useDerivedValue, withTiming } from "react-native-reanimated";

interface ThemeContextType {
  theme: string;
  changeTheme: (newTheme: string) => void;
  themeProgress: Readonly<Animated.SharedValue<0 | 1>>;
}

const defaultThemeContext: ThemeContextType = {
  theme: "light",
  changeTheme: () => {},
  themeProgress: 0,
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const themeProgress = useDerivedValue(() => {
    return theme === "dark" ? withTiming(1) : withTiming(0);
  }, [theme]);

  const saveTheme = useCallback(async (themeValue: string) => {
    await save("Theme", themeValue);
  }, []);

  const getTheme = useCallback(async () => {
    const savedTheme = await get("Theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    void getTheme();
  }, [getTheme]);

  const changeTheme = useCallback(
    async (newTheme: string) => {
      setTheme(newTheme);
      await saveTheme(newTheme);
    },
    [saveTheme]
  );

  const contextValue = {
    theme,
    changeTheme,
    themeProgress,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
