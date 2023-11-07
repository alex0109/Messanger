import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native";

import type { FC } from "react";

const SettingsHeader: FC = () => {
  //Для навигации в приложении
  const navigation = useNavigation();
  const colors = useTheme().colors;

  return (
    <View>
      <StatusBar backgroundColor={colors.themeColorBlock} barStyle="dark-content" />
      <View style={[style.header, { backgroundColor: colors.themeColorBlock }]}>
        <TouchableOpacity style={style.headerButtons} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color={colors.white} />
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
  },
});

export default SettingsHeader;
