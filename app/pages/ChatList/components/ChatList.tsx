import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import ChatBar from "@/pages/ChatList/components/ChatBar";
import { useActions } from "@/shared/lib/hooks/useActions";
import { useTypedSelector } from "@/shared/lib/hooks/useTypedSelector";
import jwt_decode from "jwt-decode";

import ChatRequest from "./ChatRequest";

import type { FC } from "react";
import axios from "axios";

const ChatList: FC = () => {
  const chats = useTypedSelector((state) => state.chats);
  const { addChatHandler } = useActions();

  const colors = useTheme().colors;

  return (
    //Углубись в то как работает flexbox позиционирование
    <View style={{ flex: 1, backgroundColor: colors.themeColor }}>
      <ScrollView>
        {chats.map((chat) =>
          chat.isRequestApproved === false ? (
            <ChatRequest
              key={chat.userID}
              userID={chat.userID}
              userName={chat.userName}
              isRequestApproved={chat.isRequestApproved}
            />
          ) : null
        )}
        <View
          style={{
            width: "85%",
            alignSelf: "center",
            borderBottomWidth: 1,
            borderColor: colors.gray,
          }}
        />
        {chats.map((chat) =>
          chat.isRequestApproved ? (
            <ChatBar
              key={chat.userID}
              userID={chat.userID}
              userName={chat.userName}
              message={chat.message}
              isArchived={chat.isArchived}
            />
          ) : null
        )}
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
