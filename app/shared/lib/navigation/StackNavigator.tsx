import React from "react";
import { View, Text } from "react-native";
import ChatsHub from "../../../pages/ChatsHub/components/ChatsHub/ChatsHub";
import ScreenTwo from "../../../pages/ScreenTwo";

const UserScreenStackNavigator = () => {
  return <ChatsHub />;
};
const CreateGroupScreenStackNavigator = () => {
  return <ScreenTwo />;
};
const SettingsScreenStackNavigator = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export {
  UserScreenStackNavigator,
  CreateGroupScreenStackNavigator,
  SettingsScreenStackNavigator,
};
