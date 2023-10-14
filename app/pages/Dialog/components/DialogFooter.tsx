import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableHighlight, TextInput } from "react-native";

import type { FC } from "react";

//Входящие пропсы надо типизировать
const Footer: FC = ({ setData, data }) => {
  //Отделяй константы, функции и методы энтерами
  //Константы групируй и отделяй между собой тоже, стейты отдельно, другие хуки отдельно(сортируй по библиотекам, например)
  const [input, setInput] = useState("");

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
    <View style={style.sendBar}>
      <TextInput
        multiline
        placeholder="Type..."
        style={style.msgInput}
        cursorColor="black"
        defaultValue={input}
        onChangeText={(userInput) => setInput(userInput)}
      />
      <View style={style.separator} />
      <TouchableHighlight
        style={style.sendButton}
        onPress={() => sendMessageHandler()}
        underlayColor="#c0c0c0"
      >
        <Ionicons
          name="send"
          size={24}
          color="black"
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
