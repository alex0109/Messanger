import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";

import { store } from "@shared/lib/store/store";
import React from "react";
import { Provider } from "react-redux";

import UserScreen from "@/pages/User/components/UserScreen/UserScreen";
import DrawerNavigator from "@/shared/lib/navigation/DrawerNavigator";
import { AuthStackNavigator } from "@/shared/lib/navigation/StackNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <DrawerNavigator />
          {/* <AuthStackNavigator /> */}
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
