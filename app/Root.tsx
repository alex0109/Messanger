import { NavigationContainer } from "@react-navigation/native";

import Colors from "@shared/assets/styles/colors";
import DrawerNavigator from "@shared/lib/navigation/DrawerNavigator";
import { AuthStackNavigator } from "@shared/lib/navigation/StackNavigator";
import { ThemeContext } from "@shared/lib/providers/ThemeProvider";
import React, { useContext } from "react";

import type { ThemeType } from "@shared/lib/providers/ThemeProvider";

export default function Root() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = (theme: ThemeType) => {
    if (theme === "light") {
      return Colors.light;
    }
    if (theme === "dark") {
      return Colors.dark;
    }
  };

  return (
    <NavigationContainer theme={currentTheme(theme)}>
      <DrawerNavigator />
      {/* <AuthStackNavigator /> */}
    </NavigationContainer>
  );
}
