import React from 'react';
import { View, Text } from 'react-native';

const UserScreenStackNavigator = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Screen</Text>
    </View>
  );
};
const CreateGroupScreenStackNavigator = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Create Group Screen</Text>
    </View>
  );
};
const SettingsScreenStackNavigator = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    );
  };

export {
    UserScreenStackNavigator,
    CreateGroupScreenStackNavigator,
    SettingsScreenStackNavigator};