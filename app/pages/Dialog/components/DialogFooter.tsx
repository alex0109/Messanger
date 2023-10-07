import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableHighlight, TextInput } from "react-native";

import { useNavigation, useTheme } from "@react-navigation/native";

import type { FC } from "react";
import colors from "@/shared/assets/styles/colors";

//Входящие пропсы надо типизировать
const Footer: FC = ({ setData, data }) => {
  //Отделяй константы, функции и методы энтерами
  //Константы групируй и отделяй между собой тоже, стейты отдельно, другие хуки отдельно(сортируй по библиотекам, например)
  const [input, setInput] = useState("");

  const colors = useTheme().colors;

  useEffect(() => {}, [input]);

  const sendMessageHandler = () => {
    if (input.length > 0) {
      setData([
        { id: `${Math.random(1, 1000)}`, title: input, index: 1 },
        ...data,
      ]);
      setInput("");
    }
  };

  return (
    <View style={[style.sendBar, { backgroundColor: colors.footer }]}>
      <TextInput
        multiline
        placeholder="Type..."
        placeholderTextColor={colors.grey}
        style={[style.msgInput, { color: colors.adaptiveText }]}
        cursorColor={colors.adaptiveText}
        defaultValue={input}
        onChangeText={(userInput) => setInput(userInput)}
      />
      <View style={[style.separator, { backgroundColor: colors.darkGrey }]} />
      <TouchableHighlight
        style={style.sendButton}
        onPress={() => sendMessageHandler()}
      >
        <Ionicons
          name="send"
          size={24}
          color={colors.blue}
          style={style.buttonIcon}
        />
      </TouchableHighlight>
    </View>
  );
};

export default Footer;

const style = StyleSheet.create({
  separator: {
    backgroundColor: "gray",
    height: "70%",
    alignSelf: "center",
    width: 2,
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
  sendBar: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
  },
  msgInput: {
    flex: 7,
    margin: 12,
    maxHeight: 100,
    fontSize: 16,
  },
});
