import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from "react-native";

import ChatBar from "@/pages/ChatList/components/ChatBar";
import { useActions } from "@/shared/lib/hooks/useActions";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useTypedSelector } from "@/shared/lib/hooks/useTypedSelector";

import { getUsersThunk } from "@/shared/lib/store/user-thunks";

import ChatRequest from "./ChatRequest";

import type { FC } from "react";

const ChatList: FC = () => {
  const chats = useTypedSelector((state) => state.chats);
  const user = useTypedSelector((state) => state.user);
  const { addChatHandler } = useActions();

  const dispatch = useAppDispatch();

  const colors = useTheme().colors;

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return (
    //Углубись в то как работает flexbox позиционирование
    <View style={{ flex: 1, backgroundColor: colors.mainBackground }}>
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
              archived={chat.isArchived}
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
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}>
          {user.loadedUsers.length == 0 ? (
            <View>
              <Text>No users has been loaded</Text>
            </View>
          ) : (
            user.loadedUsers.map((oneUser) => (
              <View
                key={oneUser._id}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                  backgroundColor: colors.chatsBars,
                  height: 70,
                  paddingHorizontal: 20,
                  marginBottom: 10,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    width: "70%",
                    height: "70%",
                    justifyContent: "center",
                    borderRightWidth: 1,
                  }}>
                  <Text style={{ fontWeight: "800", fontSize: 16 }}>{oneUser.email}</Text>
                  <Text>Registred: {moment(oneUser.registeredAt).format("DD.MM.YYYY")}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "30%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Text
                    style={{
                      fontWeight: "700",
                      fontSize: 18,
                      color: colors.success,
                    }}>
                    Request
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[style.addButton, { backgroundColor: colors.headerColor }]}
        onPress={() =>
          addChatHandler({
            id: new Date().getTime().toString(),
            userName: "Vova",
            message: "dfasdfafas",
          })
        }>
        <Ionicons name='md-add' size={50} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export default ChatList;

const style = StyleSheet.create({
  addButton: {
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
