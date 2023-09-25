import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import SignInScreen from "../../../pages/Auth/SignInScreen";
import SignUpScreen from "../../../pages/Auth/SignUpScreen";
import ChatsHub from "../../../pages/ChatsHub/components/ChatsHub/ChatsHub";
import Options from "../../../pages/Options/Options";
import ChatListBase from "@/pages/ChatList/components/ChatListBase/ChatListBase";
import { MessageScreen } from "@/pages/ChatsHub/components/MessageScreen/MessageScreen";

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

const InitialStackNavigator = () => (
  <InitialStack.Navigator
    initialRouteName="ChatStack"
    screenOptions={{ headerShown: false }}
  >
    <InitialStack.Screen
      name="ChatStack"
      component={ChatListPage}
      options={{
        headerStyle: { backgroundColor: "green", height: 100, width: 100 },
      }}
    />
    <InitialStack.Screen name="DialogStack" component={MessageScreen} />
    <InitialStack.Screen name="OptionsStack" component={Options} />
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
