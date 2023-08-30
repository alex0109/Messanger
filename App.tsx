import React from "react";
import { StyleSheet } from "react-native";

import ScreenOne from "./app/pages/ScreenOne";
import ScreenTwo from "./app/pages/ScreenTwo";
import { ThemeProvider } from "./app/shared/lib/providers/ThemeProvider";

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./app/shared/lib/navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import ChatScreen from "./app/pages/page1/components/page/ChatScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <ChatScreen/>
      </NavigationContainer>
    </ThemeProvider>
  );
}
