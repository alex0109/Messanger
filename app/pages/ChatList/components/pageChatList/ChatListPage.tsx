import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ChatListBase from "@/pages/ChatList/components/ChatListBase/ChatListBase";
import ChatListHeader from "../ChatListHeader/ChatListHeader";
import { useTypedSelector } from "@/shared/lib/hooks/useTypedSelector";
import { useActions } from "@/shared/lib/hooks/useActions";
import { chatsSlice } from "@/pages/ChatsHub/lib/store/chatSlice";

const ChatListPage = () => {
  const chats = useTypedSelector((state) => state.chats);
  const { addChatHandler, deleteChatHandler, archiveChatHandler } =
    useActions();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ChatListHeader />
        <ScrollView>
          {chats.map((chat) => (
            <ChatListBase
              key={chat.id}
              id={chat.id}
              userName={chat.userName}
              message={chat.message}
            />
          ))}
        </ScrollView>
      </View>
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
export default ChatListPage;
