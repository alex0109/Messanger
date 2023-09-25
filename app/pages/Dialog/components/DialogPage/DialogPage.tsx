import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import type { FC } from "react";
import DialogHeader from "../DialogHeader/DialogHeader";
import DialogFooter from "../DialogFooter/DialogFooter";
import { useTypedSelector } from "@/shared/lib/hooks/useTypedSelector";
import { useActions } from "@/shared/lib/hooks/useActions";

interface MessageItemProps {
  mess: string;
  myMess: boolean;
}

export const MessageItem: FC<MessageItemProps> = ({ mess, myMess }) => (
  <View style={style.messageItem}>
    <Text>{mess}</Text>
  </View>
);

export default function DialogPage() {
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
  const dialogs = useTypedSelector((state) => state.dialogs);
  const { addMessageHendler, deleteMessage, editMessage } = useActions();
  return (
    <View style={{ flex: 1 }}>
      <DialogHeader />
      <FlatList></FlatList>
      <DialogFooter setData={undefined} data={undefined} />
    </View>
  );
}

const style = StyleSheet.create({
  messageItem: {
    backgroundColor: "purple",
  },
});
