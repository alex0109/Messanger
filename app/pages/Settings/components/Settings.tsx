import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import type { FC } from "react";

const Settings: FC = () => {
  const colors = useTheme().colors;
  return (
    <View style={[style.container, { backgroundColor: colors.themeColor }]}>
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
          <Text style={style.photoEditText}>Edit photo</Text>
        </TouchableOpacity>
      </View>
      {/* блок настроек данных пользователя */}
      <View style={style.infoEditBlock}>
        <Text style={style.textInfo}>Username</Text>
        <TextInput
          style={[style.inputsInfo, { color: colors.themeColorText }]}
          defaultValue="Username"
        />

        <Text style={style.textInfo}>Email</Text>
        <TextInput
          style={[style.inputsInfo, { color: colors.themeColorText }]}
          defaultValue="Email"
        />

        <Text style={style.textInfo}>Bio</Text>
        <TextInput
          style={[style.inputsInfo, { color: colors.themeColorText }]}
          defaultValue="Bio"
        />
      </View>
      {/* блок настрое приложения */}
      <View style={style.appSettingsBlock}>
        <Text
          style={[style.settingsMainText, { color: colors.themeColorText }]}
        >
          Settings
        </Text>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons
            name="md-chatbubbles-sharp"
            size={24}
            color={colors.themeColorText}
          />
          <Text style={[style.settingsText, { color: colors.themeColorText }]}>
            Chat view
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons
            name="globe-outline"
            size={24}
            color={colors.themeColorText}
          />
          <Text style={[style.settingsText, { color: colors.themeColorText }]}>
            Language
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons
            name="ios-lock-closed"
            size={24}
            color={colors.themeColorText}
          />
          <Text style={[style.settingsText, { color: colors.themeColorText }]}>
            Privacy & Security
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons name="pie-chart" size={24} color={colors.themeColorText} />
          <Text style={[style.settingsText, { color: colors.themeColorText }]}>
            Data & Storage
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.iconTextBlock}>
          <Ionicons
            name="exit-outline"
            size={24}
            color={colors.themeColorText}
          />
          <Text style={[style.settingsText, { color: "#DC5656" }]}>
            Log out
          </Text>
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
    color: "#2E84E8",
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
    color: "#000000",
  },
  textInfo: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "500",
    color: "#9D9D9D",
  },
  appSettingsBlock: {
    flexDirection: "column",
    alignItems: "center",
    margin: 50,
  },
  settingsText: {
    fontSize: 18,
    fontWeight: "500",
    marginHorizontal: 10,
  },
  iconTextBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  settingsMainText: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 15,
  },
});
