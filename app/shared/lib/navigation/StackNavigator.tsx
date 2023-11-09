import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';

import { View, Image } from 'react-native';

import SignInScreen from '@/pages/Auth/components/SignInScreen';
import SignUpScreen from '@/pages/Auth/components/SignUpScreen';
import ChatList from '@/pages/ChatList/components/ChatList';
import ChatListHeader from '@/pages/ChatList/components/ChatListHeader';

import DialogHeader from '@/pages/Dialog/components/DialogHeader';
import Settings from '@/pages/Settings/components/Settings.1';
import SettingsHeader from '@/pages/Settings/components/SettingsHeader';
import UserScreen from '@/pages/Settings/components/UserScreen';
import UserScreenHeader from '@/pages/Settings/components/UserScreenHeader';

import type { FC } from 'react';
import DialogPage from '@/pages/Dialog/components/DialogPage';
import colors from '@/shared/assets/styles/colors';

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

const Empty: FC = () => <View />;

const InitialStackNavigator = () => {
  const colors = useTheme().colors;
  return (
    <InitialStack.Navigator initialRouteName="ChatStack">
      <InitialStack.Screen
        name="ChatStack"
        component={ChatList}
        options={{
          header: () => <ChatListHeader />,
          cardStyle: { backgroundColor: colors.mainBackground },
        }}
      />
      <InitialStack.Screen
        name="DialogStack"
        component={DialogPage}
        options={{
          header: () => <DialogHeader />,
          cardStyle: { backgroundColor: colors.mainBackground },
        }}
      />
      <InitialStack.Screen
        name="UserStack"
        component={UserScreen}
        options={{
          header: () => <UserScreenHeader />,
          cardStyle: { backgroundColor: colors.mainBackground },
        }}
      />
      <InitialStack.Screen
        name="SettingsStack"
        component={Settings}
        options={{
          header: () => <SettingsHeader />,
          cardStyle: { backgroundColor: colors.mainBackground },
        }}
      />
    </InitialStack.Navigator>
  );
};

const AuthStackNavigator = () => (
  <AuthStack.Navigator initialRouteName="SignInStack" screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="SignUpStack" component={SignUpScreen} />
    <AuthStack.Screen name="SignInStack" component={SignInScreen} />
  </AuthStack.Navigator>
);
export { InitialStackNavigator, AuthStackNavigator };
