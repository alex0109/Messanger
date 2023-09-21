import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import UserScreen from "@/pages/User/components/UserScreen/UserScreen";

import SignInScreen from "../../../pages/Auth/SignInScreen";
import SignUpScreen from "../../../pages/Auth/SignUpScreen";
import ChatsHub from "../../../pages/ChatsHub/components/ChatsHub/ChatsHub";
import Options from "../../../pages/Options/Options";

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
  <InitialStack.Navigator
    initialRouteName="ChatStack"
    screenOptions={{ headerShown: false }}
  >
    <InitialStack.Screen name="ChatStack" component={ChatsHub} />
    <InitialStack.Screen name="OptionsStack" component={Options} />
    <InitialStack.Screen name="UserStack" component={UserScreen} />
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
