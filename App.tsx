import React from "react";

import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "@shared/lib/store/store";
import { AuthStackNavigator } from "@/shared/lib/navigation/StackNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          {/* <DrawerNavigator /> */}
          <AuthStackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
