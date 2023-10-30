import { NavigationContainer } from "@react-navigation/native";

import Colors from "@shared/assets/styles/colors";
import DrawerNavigator from "@shared/lib/navigation/DrawerNavigator";
import { AuthStackNavigator } from "@shared/lib/navigation/StackNavigator";
import { ThemeContext } from "@shared/lib/providers/ThemeProvider";
import * as SecureStore from "expo-secure-store";
import React, { useContext, useEffect } from "react";

import { useActions } from "./shared/lib/hooks/useActions";
import { useTypedSelector } from "./shared/lib/hooks/useTypedSelector";

import type { ThemeType } from "@shared/lib/providers/ThemeProvider";

export default function Root() {
  const { theme } = useContext(ThemeContext);
  const { isAuth } = useTypedSelector((state) => state.user);

  const { authentificate } = useActions();

  const currentTheme = (theme: ThemeType) => {
    if (theme === "light") {
      return Colors.light;
    }
    if (theme === "dark") {
      return Colors.dark;
    }
  };

  useEffect(() => {
    async function checkForToken() {
      const token = await SecureStore.getItemAsync("token");

      if (token) {
        authentificate();
      }
    }

    checkForToken();
  }, [isAuth]);

  return (
    <NavigationContainer theme={currentTheme(theme)}>
      {isAuth ? <DrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
