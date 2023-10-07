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

import type { FC } from "react";
import { UserContext } from "@/shared/lib/providers/UserProvider";
import { Ionicons } from "@expo/vector-icons";

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
  const { userId, setUserId } = useContext(UserContext);
  const scrollViewRef = useRef(null);

  const handleSenad = async (messageType: "text" | "image") => {
    try {
      const formData = new FormData();
      formData.append("senderId", userId);
    } catch (error) {
      console.log("error in sending message", error);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{ flexGrow: 1 }}
      ></ScrollView>

      <View style={style.sendContainer}>
        <TextInput
          multiline
          placeholder="Type..."
          style={style.messageInput}
          cursorColor="black"
          defaultValue={message}
          onChangeText={(userInput) => setMessage(userInput)}
        />

        <TouchableOpacity style={style.sendButton}>
          <Ionicons
            name="send"
            size={24}
            color="black"
            style={style.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default DialogPage;

const style = StyleSheet.create({
  messageItem: {
    backgroundColor: "purple",
  },
  sendContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
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
    height: 40,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
