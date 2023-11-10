import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { BlurView } from "expo-blur";

import { useNavigation, useTheme } from "@react-navigation/native";
import EmojiSelector from "react-native-emoji-selector";

import type { FC } from "react";
import colors from "@/shared/assets/styles/colors";

//Входящие пропсы надо типизировать
const Footer: FC = ({ setData, data }) => {
  //Отделяй константы, функции и методы энтерами
  //Константы групируй и отделяй между собой тоже, стейты отдельно, другие хуки отдельно(сортируй по библиотекам, например)
  const [input, setInput] = useState("");
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const handleEmojiPress = () => {
    setShowEmojiSelector(!showEmojiSelector);
    Keyboard.dismiss();
  };

  const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
    showEmojiSelector ? setShowEmojiSelector(!showEmojiSelector) : null;
  });

  const colors = useTheme().colors;

  useEffect(() => {}, [input]);

  const sendMessageHandler = () => {
    if (input.length > 0) {
      setData([{ id: `${Math.random(1, 1000)}`, title: input, index: 1 }, ...data]);
      setInput("");
    }
  };

  return (
    <BlurView intensity={100}>
      <BlurView style={[style.sendBar]} intensity={10}>
        <View style={[style.textInputBar, { backgroundColor: colors.footer }]}>
          <TouchableOpacity
            style={{ justifyContent: "flex-end", alignItems: "center", margin: 5 }}
            onPress={() => handleEmojiPress()}>
            <Ionicons name='happy-outline' size={30} color={colors.adaptiveText} />
          </TouchableOpacity>
          <TextInput
            multiline
            placeholder='Type...'
            placeholderTextColor={colors.adaptiveGrey}
            style={[style.msgInput, { color: colors.adaptiveText }]}
            cursorColor={colors.adaptiveText}
            defaultValue={input}
            onChangeText={(userInput) => setInput(userInput)}
          />
        </View>
        {input ? (
          <TouchableHighlight
            style={style.sendButton}
            underlayColor={colors.mainBackground}
            onPress={() => sendMessageHandler()}>
            <Ionicons name='send' size={26} color={colors.blue} style={style.buttonIcon} />
          </TouchableHighlight>
        ) : (
          <TouchableHighlight style={style.sendButton} underlayColor={colors.mainBackground}>
            <Ionicons name='mic' size={26} color={colors.blue} style={style.buttonIcon} />
          </TouchableHighlight>
        )}
      </BlurView>
      {showEmojiSelector && (
        <EmojiSelector
          style={{ height: 250 }}
          onEmojiSelected={(emoji) => {
            setInput((prevInput) => prevInput + emoji);
          }}
        />
      )}
    </BlurView>
  );
};

export default Footer;

const style = StyleSheet.create({
  sendButton: {
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
  },
  buttonIcon: {
    alignSelf: "center",
  },
  sendBar: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  msgInput: {
    flex: 1,
    marginVertical: 8,
    maxHeight: 100,
    fontSize: 16,
    paddingRight: 8,
  },
  textInputBar: {
    borderRadius: 25,
    marginVertical: 5,
    backgroundColor: "red",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
