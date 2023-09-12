import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SettingsHeader from "../SettingsHeader/SettingsHeader";

const SettingsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
      <SettingsHeader />
      <View style={style.base}>
        {/* блок редактирования фото */}
        <View style={style.photoEditBlock}>
          <View
            style={{
              height: 136,
              width: 136,
              borderRadius: 70,
              backgroundColor: "#D9D9D9",
            }}
          ></View>
          <TouchableOpacity style={style.photoEditButton}>
            <Text style={style.photoEditText}>Edit photo</Text>
          </TouchableOpacity>
        </View>
        {/* блок настроек данных пользователя */}
        <View style={style.infoEditBlock}>
          <Text style={style.textInfo}>Username</Text>
          <TextInput style={style.inputsInfo} />

          <Text style={style.textInfo}>Email</Text>
          <TextInput style={style.inputsInfo} />

          <Text style={style.textInfo}>Bio</Text>
          <TextInput style={style.inputsInfo} />
        </View>
        {/* блок настрое приложения */}
        <View style={style.appSettingsBlock}>
          <Text style={style.settingsMainText}>Settings</Text>
          <TouchableOpacity style={style.iconTextBlock}>
            <Ionicons name="md-chatbubbles-sharp" size={24} color="black" />
            <Text style={style.settingsText}>Chat view</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.iconTextBlock}>
            <Ionicons name="globe-outline" size={24} color="black" />
            <Text style={style.settingsText}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.iconTextBlock}>
            <Ionicons name="ios-lock-closed" size={24} color="black" />
            <Text style={style.settingsText}>Privacy & Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.iconTextBlock}>
            <Ionicons name="pie-chart" size={24} color="black" />
            <Text style={style.settingsText}>Data & Storage</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  base: {
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
  photoEditButton: {
    padding: 10,
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
    color: "#000000",
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
    color: "#000000",
    marginVertical: 15,
  },
});

export default SettingsPage;
