import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";

import type { FC } from "react";

const ChatListHeader: FC = () => {
  const navigation = useNavigation();

  const colors = useTheme().colors;

  return (
    <SafeAreaView style={{ backgroundColor: colors.mainBackground }}>
      <StatusBar backgroundColor={colors.header} barStyle="light-content" />
      <View style={[style.headerBar, { backgroundColor: colors.header }]}>
        <TouchableOpacity style={style.button} onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={24} color={colors.white} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={style.button}>
            <Ionicons name="md-search-sharp" size={24} color={colors.white} />
          </TouchableOpacity>
          <View style={{ borderRightWidth: 1, borderColor: colors.white }} />
          <TouchableOpacity style={style.button}>
            <Ionicons name="person-add" size={24} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatListHeader;

const style = StyleSheet.create({
  headerBar: {
    height: 50,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
});
