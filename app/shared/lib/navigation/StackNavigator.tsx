import { useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import SignInScreen from "@/pages/Auth/components/SignInScreen";
import SignUpScreen from "@/pages/Auth/components/SignUpScreen";
import ChatList from "@/pages/ChatList/components/ChatList";
import ChatListHeader from "@/pages/ChatList/components/ChatListHeader";

import DialogHeader from "@/pages/Dialog/components/DialogHeader";
import DialogPage from "@/pages/Dialog/components/DialogPage";
import SettingsPage from "@/pages/Settings/components/Settings";
import SettingsHeader from "@/pages/Settings/components/SettingsHeader";
import UserScreen from "@/pages/Settings/components/UserScreen";
import UserScreenHeader from "@/pages/Settings/components/UserScreenHeader";
import RespondDialog from "@/pages/Dialog/components/RespondDialog";

export type RootStackParamList = {
  ChatStack: { name: string };
  SettingsStack: { name: string };
  AuthStack: { name: string };
  DrawerStack: { name: string };
  SignUpStack: { name: string };
  SignInStack: { name: string };
  UserStack: { name: string };
  DialogStack: { name: string };
};

const InitialStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<RootStackParamList>();

const InitialStackNavigator = () => {
  const colors = useTheme().colors;

  return (
    <InitialStack.Navigator
      initialRouteName="ChatStack"
      screenOptions={{ cardStyle: { backgroundColor: colors.themeColor } }}
    >
      <InitialStack.Screen
        name="ChatStack"
        component={ChatList}
        options={{
          header: () => <ChatListHeader />,
        }}
      />
      <InitialStack.Screen
        name="DialogStack"
        component={RespondDialog}
        options={{
          header: () => <DialogHeader />,
        }}
      />
      <InitialStack.Screen
        name="UserStack"
        component={UserScreen}
        options={{
          header: () => <UserScreenHeader />,
        }}
      />
      <InitialStack.Screen
        name="SettingsStack"
        component={SettingsPage}
        options={{
          header: () => <SettingsHeader />,
        }}
      />
    </InitialStack.Navigator>
  );
};

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
