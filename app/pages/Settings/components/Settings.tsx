import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useTheme } from "@react-navigation/native";

import type { FC } from "react";

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
            backgroundColor: "#D9D9D9",
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
          defaultValue='Username'
        />

        <Text style={[style.textInfo, { color: colors.adaptiveGrey }]}>Email</Text>
        <TextInput
          style={[style.inputsInfo, { color: colors.adaptiveText }]}
          defaultValue='Email'
        />

        <Text style={[style.textInfo, { color: colors.adaptiveGrey }]}>Bio</Text>
        <TextInput style={[style.inputsInfo, { color: colors.adaptiveText }]} defaultValue='Bio' />
      </View>
      {/* блок настрое приложения */}
      <View style={style.appSettingsBlock}>
        <Text style={[style.settingsMainText, { color: colors.adaptiveText }]}>Settings</Text>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons name='md-chatbubbles-sharp' size={24} color={colors.adaptiveText} />
          <Text style={[style.settingsText, { color: colors.adaptiveText }]}>Chat view</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons name='globe-outline' size={24} color={colors.adaptiveText} />
          <Text style={[style.settingsText, { color: colors.adaptiveText }]}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons name='ios-lock-closed' size={24} color={colors.adaptiveText} />
          <Text style={[style.settingsText, { color: colors.adaptiveText }]}>
            Privacy & Security
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons name='pie-chart' size={24} color={colors.adaptiveText} />
          <Text style={[style.settingsText, { color: colors.adaptiveText }]}>Data & Storage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons name='log-out-outline' size={24} color={colors.adaptiveText} />
          <Text style={[style.logOutText, { color: colors.red }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  photoEditBlock: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 28,
  },
  photoEditText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  infoEditBlock: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "90%",
  },
  inputsInfo: {
    width: "100%",
    padding: 0,
    borderBottomWidth: 1,
    borderColor: "#9D9D9D",
    fontSize: 16,
    fontWeight: "500",
  },
  textInfo: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "500",
  },
  appSettingsBlock: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 30,
  },
  settingsText: {
    fontSize: 18,
    fontWeight: "500",
    marginHorizontal: 10,
  },
  iconTextBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  settingsMainText: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 15,
  },
  logOutText: {
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 10,
  },
});
