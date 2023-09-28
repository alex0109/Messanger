import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, TouchableHighlight, TextInput } from "react-native";

//Ты не импортируешь стили из DialogFooter
import style from "./DialogFooter";

import type { FC } from "react";

//Зачем нужен этот футер если у тебя уже есть dialogfooter?
const Footer: FC = ({ setData, data }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, [input]);
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
        cursorColor={"black"}
        defaultValue={input}
        onChangeText={(userInput) => setInput(userInput)}
      />
      <View style={style.separator} />
      <TouchableHighlight
        style={style.sendButton}
        onPress={() => sendMessageHandler()}
        underlayColor={"#c0c0c0"}
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
