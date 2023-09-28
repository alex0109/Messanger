import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import ChatListBase from "@/pages/ChatList/components/ChatBar";
import { useActions } from "@/shared/lib/hooks/useActions";
import { useTypedSelector } from "@/shared/lib/hooks/useTypedSelector";

import type { FC } from "react";

const ChatList: FC = () => {
  const chats = useTypedSelector((state) => state.chats);
  const { addChatHandler } = useActions();
  return (
    //Углубись в то как работает flexbox позиционирование
    <View style={{ flex: 1 }}>
      <ScrollView>
        {chats.map((chat) => (
          <ChatListBase
            key={chat.userID}
            id={chat.userID}
            userName={chat.userName}
            message={chat.message}
            archived={chat.isArchived}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={style.addButton}
        onPress={() =>
          addChatHandler({
            id: new Date().getTime().toString(),
            userName: "Vova",
            message: "dfasdfafas",
          })
        }
      >
        <Ionicons name="md-add" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ChatList;

const style = StyleSheet.create({
  addButton: {
    backgroundColor: "#5698FB",
    borderRadius: 60,
    height: 60,
    width: 60,
    position: "absolute",
    bottom: 30,
    right: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});