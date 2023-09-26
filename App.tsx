import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shared/lib/providers/ThemeProvider";
import { store } from "@shared/lib/store/store";
import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";

import DrawerNavigator from "@/shared/lib/navigation/DrawerNavigator";
import { AuthStackNavigator } from "@/shared/lib/navigation/StackNavigator";

export default function App() {
  const [logedin, setLogedin] = useState(false);
  useEffect(() => {
    async function getToken() {
      const token = await AsyncStorage.getItem("authToken");

      if (token) {
        setLogedin(true);
      }
    }

    getToken();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          {logedin ? <DrawerNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
