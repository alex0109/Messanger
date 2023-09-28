import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { View } from "react-native";

import SignInScreen from "@/pages/Auth/SignInScreen";
import SignUpScreen from "@/pages/Auth/SignUpScreen";
import ChatList from "@/pages/ChatList/components/ChatList";
import ChatListHeader from "@/pages/ChatList/components/ChatListHeader";

import DialogHeader from "@/pages/Dialog/components/DialogHeader";
import SettingsPage from "@/pages/Settings/components/Settings";
import SettingsHeader from "@/pages/Settings/components/SettingsHeader";

import type { FC } from "react";

export type RootStackParamList = {
  ChatStack: { name: string };
  OptionsStack: { name: string };
  AuthStack: { name: string };
  DrawerStack: { name: string };
  SignUpStack: { name: string };
  SignInStack: { name: string };
  DialogStack: { name: string };
};

const InitialStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<RootStackParamList>();

const Empty: FC = () => <View />;

const InitialStackNavigator = () => (
  <InitialStack.Navigator
    initialRouteName="ChatStack"
    screenOptions={{ headerShown: true }}
  >
    <InitialStack.Screen
      name="ChatStack"
      component={ChatList}
      options={{ header: () => <ChatListHeader /> }}
    />
    <InitialStack.Screen
      name="DialogStack"
      component={Empty}
      options={{ header: () => <DialogHeader /> }}
    />
    <InitialStack.Screen
      name="OptionsStack"
      component={SettingsPage}
      options={{ header: () => <SettingsHeader /> }}
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
