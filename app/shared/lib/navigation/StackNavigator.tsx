import React from "react";
import { View, Text } from "react-native";
import ScreenOne from "../../../pages/ScreenOne";
import ScreenTwo from "../../../pages/ScreenTwo";

const UserScreenStackNavigator = () => {
  return <ScreenOne />;
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
