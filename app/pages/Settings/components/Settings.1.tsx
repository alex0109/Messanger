import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { style } from './Settings';

import type { FC } from 'react';

const Settings: FC = () => {
  const colors = useTheme().colors;

  return (
    <View style={[style.container, { backgroundColor: colors.mainBackground }]}>
      {/* блок редактирования фото */}
      <View style={style.photoEditBlock}>
        <View
          style={{
            height: 136,
            width: 136,
            borderRadius: 70,
            backgroundColor: '#D9D9D9',
          }}
        />
        <TouchableOpacity style={{ padding: 10 }}>
          <Text style={[style.photoEditText, { color: colors.blue }]}>Edit photo</Text>
        </TouchableOpacity>
      </View>
      {/* блок настроек данных пользователя */}
      <View style={style.infoEditBlock}>
        <Text style={[style.textInfo, { color: colors.adaptiveGrey }]}>Username</Text>
        <TextInput
          style={[style.inputsInfo, { color: colors.adaptiveText }]}
          defaultValue="Username"
        />

        <Text style={[style.textInfo, { color: colors.adaptiveGrey }]}>Email</Text>
        <TextInput
          style={[style.inputsInfo, { color: colors.adaptiveText }]}
          defaultValue="Email"
        />

        <Text style={[style.textInfo, { color: colors.adaptiveGrey }]}>Bio</Text>
        <TextInput style={[style.inputsInfo, { color: colors.adaptiveText }]} defaultValue="Bio" />
      </View>
      {/* блок настрое приложения */}
      <View style={style.appSettingsBlock}>
        <Text style={[style.settingsMainText, { color: colors.adaptiveText }]}>Settings</Text>
        <TouchableOpacity style={style.iconTextBlock}>
          <MaterialCommunityIcons name="wechat" size={24} color={colors.adaptiveText} />
          <Text style={[style.settingsText, { color: colors.adaptiveText }]}>Chat view</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <MaterialCommunityIcons name="web" size={24} color={colors.adaptiveText} />
          <Text style={[style.settingsText, { color: colors.adaptiveText }]}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <MaterialCommunityIcons name="lock" size={24} color={colors.adaptiveText} />
          <Text style={[style.settingsText, { color: colors.adaptiveText }]}>
            Privacy & Security
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <MaterialCommunityIcons name="chart-pie" size={24} color={colors.adaptiveText} />
          <Text style={[style.settingsText, { color: colors.adaptiveText }]}>Data & Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <MaterialCommunityIcons name="logout" size={24} color={colors.adaptiveText} />
          <Text style={[style.logOutText, { color: colors.red }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
