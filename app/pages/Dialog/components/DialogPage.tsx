import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import DialogFooter from "./DialogFooter";

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
    <View style={{ flex: 1, backgroundColor: colors.mainBackground, position: "relative" }}>
      {/* <FlatList /> */}
      <View style={{ flex: 1, zIndex: 0 }}>
        <Image
          source={{
            uri: "https://d1biw2rz2h5h5w.cloudfront.net/images/patterns/thumbs/detail/24147/Vertical-Chains.jpg",
          }}
          style={{ flex: 1 }}
        />
      </View>
      <View style={{ zIndex: 1, position: "absolute", width: "100%", bottom: 0 }}>
        <DialogFooter />
      </View>
    </View>
  );
};

export default DialogPage;

const style = StyleSheet.create({
  messageItem: {
    backgroundColor: "purple",
  },
});
