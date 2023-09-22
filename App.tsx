import React from "react";
import ChatScreen from "./app/pages/page1/components/page/ChatScreen";
import { StyleSheet } from "react-native";

import ScreenOne from "./app/pages/ScreenOne";
import ScreenTwo from "./app/pages/ScreenTwo";
import { ThemeProvider } from "./app/shared/lib/providers/ThemeProvider";

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./app/shared/lib/navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Footer from "./app/pages/page1/components/pageFooter/Footer";
import ChatListPage from "./app/pages/ChatList/components/pageChatList/ChatListPage";
import SettingsPage from "./app/pages/SettingsPage/components/Settings/SettingsPage";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <ChatListPage />
      </NavigationContainer>
    </ThemeProvider>
  );
}
