import { NavigationContainer } from "@react-navigation/native";

import { store } from "@shared/lib/store/store";
import React from "react";

import { Provider } from "react-redux";

import DrawerNavigator from "@/shared/lib/navigation/DrawerNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}
