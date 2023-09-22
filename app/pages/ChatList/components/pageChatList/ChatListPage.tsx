import React from "react";
import { Image } from "expo-image";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ChatListBase from "../ChatListBase/ChatListBase";
import ChatListHeader from "../ChatListHeader/ChatListHeader";

const ChatListPage = () => {
  return (
    <View>
      <ChatListHeader />
      <View style={{ flex: 1 }}>
        <ChatListBase />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  addButton: {
    height: "100%",
    borderRadius: 50,
    backgroundColor: "#5698FB",
    alignSelf: "center",
  },
});
export default ChatListPage;
