import React from "react";
import { Image } from "expo-image";
import { View, Text, StyleSheet } from "react-native";

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

const style = StyleSheet.create({});
export default ChatListPage;
