import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar } from "react-native";

import type { FC } from "react";

const ChatListHeader: FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar backgroundColor="#5698FB" barStyle="dark-content" />
      <View style={style.headerBar}>
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="ios-menu" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={style.button}>
            <Ionicons name="md-search-sharp" size={24} color="black" />
          </TouchableOpacity>
          <View style={{ borderRightWidth: 1 }} />
          <TouchableOpacity style={style.button}>
            <Ionicons name="person-add" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatListHeader;

const style = StyleSheet.create({
  headerBar: {
    height: 50,
    backgroundColor: "#5698FB",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 5,
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
