import React from "react";

import ChatsHub from "../../../pages/ChatsHub/components/ChatsHub/ChatsHub";
import { createStackNavigator } from "@react-navigation/stack";
import Options from "../../../pages/Options/Options";
import Auth from "../../../pages/Auth/Auth";
import SignUpScreen from "../../../pages/Auth/SignUpScreen";
import SignInScreen from "../../../pages/Auth/SignInScreen";

export type RootStackParamList = {
  ChatStack: { name: string };
  OptionsStack: { name: string };
  AuthStack: { name: string };
  DrawerStack: { name: string };
  SignUpStack: { name: string };
  SignInStack: { name: string };
};

const InitialStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<RootStackParamList>();

const InitialStackNavigator = () => {
  return (
    <InitialStack.Navigator
      initialRouteName="ChatStack"
      screenOptions={{ headerShown: false }}
    >
      <InitialStack.Screen name="ChatStack" component={ChatsHub} />
      <InitialStack.Screen name="OptionsStack" component={Options} />
      <InitialStack.Screen name="AuthStack" component={Auth} />
    </InitialStack.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignInStack"
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SignUpStack" component={SignUpScreen} />
      <AuthStack.Screen name="SignInStack" component={SignInScreen} />
    </AuthStack.Navigator>
  );
};
export { InitialStackNavigator, AuthStackNavigator };
