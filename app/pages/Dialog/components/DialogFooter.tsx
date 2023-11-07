import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight, TextInput } from "react-native";

import type { FC } from "react";

//Входящие пропсы надо типизировать
const Footer: FC = () => {
  //Отделяй константы, функции и методы энтерами
  //Константы групируй и отделяй между собой тоже, стейты отдельно, другие хуки отдельно(сортируй по библиотекам, например)
  const [input, setInput] = useState("");

  return (
    <View style={style.sendBar}>
      <TextInput
        multiline
        placeholder="Type..."
        style={style.msgInput}
        cursorColor="black"
        defaultValue={input}
        onChangeText={(userInput) => setInput(userInput)}
      />

      <TouchableHighlight style={style.sendButton} underlayColor="#c0c0c0">
        <Ionicons name="send" size={24} color="black" style={style.buttonIcon} />
      </TouchableHighlight>
    </View>
  );
};

export default Footer;

const style = StyleSheet.create({
  sendBar: {
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

  msgInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
