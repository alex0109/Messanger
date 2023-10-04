import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import type { FC } from "react";

const SettingsHeader: FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar backgroundColor="#5698FB" barStyle="dark-content" />
      <View style={style.header}>
        <TouchableOpacity
          style={style.headerButtons}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={25} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={style.headerButtons}>
          <Text style={style.saveBtn}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#5698FB",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerButtons: {
    borderRadius: 30,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  saveBtn: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default SettingsHeader;
