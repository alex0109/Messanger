import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { useTheme } from "@react-navigation/native";

import DialogFooter from "./DialogFooter";
import DialogHeader from "./DialogHeader";

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

//Придерживайся одного стиля экспорта компоненты, не мешай разные экспорты
//У нас это объявление стрелочной функции, типизация ее с помощью FC и дефолтный экспорт
//А потом стили компоненты
// export default function DialogPage() {
const DialogPage: FC = () => {
  const colors = useTheme().colors;

  const [mess, setMess] = useState([
    {
      id: "1",
      myMess: true,
      mess: "afasfdafdafd",
    },
    {
      id: "2",
      myMess: false,
      mess: "afasfdafdafd",
    },
    {
      id: "3",
      myMess: false,
      mess: "afasfdafdafd",
    },
    {
      id: "4",
      myMess: true,
      mess: "afasfdafdafd",
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.mainBackground }}>
      {/* <FlatList /> */}
      <View style={{ flex: 1 }}></View>
      <DialogFooter />
    </View>
  );
};

export default DialogPage;

const style = StyleSheet.create({
  messageItem: {
    backgroundColor: "purple",
  },
});
