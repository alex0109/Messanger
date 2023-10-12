import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute, useTheme } from "@react-navigation/native";
import React, { useContext, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { AuthContext } from "@/shared/lib/providers/AuthProvider";

import type { FC } from "react";

interface MessageItemProps {
  mess: string;
  myMess: boolean;
}

export const MessageItem: FC<MessageItemProps> = ({ mess, myMess }) => (
  <View style={style.messageItem}>
    <Text>{mess}</Text>
  </View>
);

const DialogPage: FC = () => {
  const [message, setMessage] = useState("");
  const { userId, setUserId } = useContext(AuthContext);
  const scrollViewRef = useRef(null);

  const route = useRoute();

  const colors = useTheme().colors;

  // const handleSend = async (messageType: "text" | "image") => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("senderId", userId);
  //   } catch (error) {
  //     console.log("error in sending message", error);
  //   }
  // };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.themeColor,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            color: colors.themeColorText,
            fontSize: 36,
          }}
        >
          {route.params.userID}
        </Text>
      </ScrollView>

      <View
        style={[style.sendContainer, { backgroundColor: colors.themeColor }]}
      >
        <TextInput
          multiline
          placeholder="Type..."
          placeholderTextColor={colors.gray}
          style={[
            style.messageInput,
            { backgroundColor: colors.themeColorBlock },
          ]}
          cursorColor="black"
          defaultValue={message}
          onChangeText={(userInput) => setMessage(userInput)}
        />

        {message.length ? (
          <TouchableOpacity style={style.sendButton}>
            <MaterialCommunityIcons
              name="send"
              size={28}
              color={colors.blue}
              style={style.buttonIcon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={style.sendButton}>
            <MaterialCommunityIcons
              name="microphone"
              size={28}
              color={colors.blue}
              style={style.buttonIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default DialogPage;

const style = StyleSheet.create({
  messageItem: {},
  sendContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  sendButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonIcon: {
    alignSelf: "center",
  },
  messageInput: {
    flex: 1,
    minHeight: 50,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
