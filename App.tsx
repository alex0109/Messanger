import React from "react";

import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "@shared/lib/store/store";
import { AuthStackNavigator } from "@/shared/lib/navigation/StackNavigator";
import DrawerNavigator from "@/shared/lib/navigation/DrawerNavigator";
import ChatListPage from "@/pages/ChatList/components/pageChatList/ChatListPage";
import DialogPage from "@/pages/Dialog/components/DialogPage/DialogPage";
import { MessageScreen } from "@/pages/ChatsHub/components/MessageScreen/MessageScreen";
import SettingsPage from "@/pages/SettingsPage/components/Settings/SettingsPage";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          {/* <DialogPage /> */}
          <ChatListPage />
          {/* <DrawerNavigator /> */}
          {/* <AuthStackNavigator /> */}
          {/* <SettingsPage /> */}
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
