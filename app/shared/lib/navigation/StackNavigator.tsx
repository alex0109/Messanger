import SignInScreen from "@pages/Auth/components/SignInScreen";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import SignUpScreen from "@/pages/Auth/components/SignUpScreen";
import UserScreen from "@/pages/Settings/components/UserScreen";
import UserScreenHeader from "@/pages/Settings/components/UserScreenHeader";

export type RootStackParamList = {
  ChatStack: { name: string };
  OptionsStack: { name: string };
  AuthStack: { name: string };
  DrawerStack: { name: string };
  SignUpStack: { name: string };
  SignInStack: { name: string };
  UserStack: { name: string };
};

const InitialStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<RootStackParamList>();

const InitialStackNavigator = () => (
  <InitialStack.Navigator initialRouteName="UserStack">
    <InitialStack.Screen
      name="UserStack"
      component={UserScreen}
      options={{ header: () => <UserScreenHeader /> }}
    />
  </InitialStack.Navigator>
);

const AuthStackNavigator = () => (
  <AuthStack.Navigator
    initialRouteName="SignInStack"
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name="SignUpStack" component={SignUpScreen} />
    <AuthStack.Screen name="SignInStack" component={SignInScreen} />
  </AuthStack.Navigator>
);
export { InitialStackNavigator, AuthStackNavigator };
