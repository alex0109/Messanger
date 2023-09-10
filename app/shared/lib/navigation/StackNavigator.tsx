import React from "react";

import ChatsHub from "../../../pages/ChatsHub/components/ChatsHub/ChatsHub";
import { createStackNavigator } from "@react-navigation/stack";
import Options from "../../../pages/Options/Options";
import Auth from "../../../pages/Auth/Auth";

export type RootStackParamList = {
  ChatStack: { name: string };
  OptionsStack: { name: string };
  AuthStack: { name: string };
  DrawerStack: { name: string };
};

const InitialStack = createStackNavigator<RootStackParamList>();

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

export { InitialStackNavigator };
