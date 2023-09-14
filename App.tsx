import React from "react";
import { StyleSheet, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";

import { ThemeProvider } from "./app/shared/lib/providers/ThemeProvider";

import tokenCache from "./app/pages/Auth/SignInWithOAuth";
import SignUpScreen from "./app/pages/Auth/SignUpScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./app/shared/lib/navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./app/shared/lib/store/store";
import Constants from "expo-constants";

import SignInScreen from "./app/pages/Auth/SignInScreen";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {/*  */}

        <ClerkProvider
          publishableKey={Constants.expoConfig?.extra!.clerkPublishableKey}
          tokenCache={tokenCache}
        >
          <SignedIn>
            <NavigationContainer>
              <DrawerNavigator />
            </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SignInScreen />
            </View>
          </SignedOut>
        </ClerkProvider>
      </ThemeProvider>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
