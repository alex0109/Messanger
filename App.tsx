import React from "react";
import { StyleSheet } from "react-native";

import ScreenOne from "./app/pages/Options/Options";
import ScreenTwo from "./app/pages/Auth/Auth";
import { ThemeProvider } from "./app/shared/lib/providers/ThemeProvider";

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./app/shared/lib/navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./app/shared/lib/store/store";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
