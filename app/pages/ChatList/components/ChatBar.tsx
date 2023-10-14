import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import { useActions } from "@/shared/lib/hooks/useActions";

import type { FC } from "react";

interface ChatBarProps {
  id: string;
  userName: string;
  message: string;
  archived: boolean;
}

const ChatBar: FC<ChatBarProps> = ({ id, userName, message, archived }) => {
  // const [isUnread, setIsUnread] = useState(false);
  const [isArchived, setIsArchived] = useState(archived);
  const colors = useTheme().colors;
  const navigation = useNavigation();

  const { archiveChatHandler } = useActions();

  const handleClick = () => {
    archiveChatHandler({ id });
    setIsArchived(!isArchived);
  };

  return (
    //Зачем длинное нажатие?
    <TouchableOpacity
      style={[
        style.chatItem,
        { backgroundColor: isArchived ? "mediumslateblue" : "transparent" },
      ]}
      onPress={() => navigation.navigate("DialogStack", {})}
      onLongPress={() => handleClick()}
    >
      <View
        style={[
          style.chatItemContent,
          { backgroundColor: colors.themeColorChatBlock },
        ]}
      >
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          width={60}
          height={60}
          borderRadius={30}
        />
        <View style={{ flexDirection: "column", width: "75%" }}>
          <Text
            style={[style.chatItemUserName, { color: colors.themeColorText }]}
          >
            {userName}
          </Text>
          <Text
            style={[style.chatItemText, { color: colors.themeColorText }]}
            numberOfLines={2}
          >
            {isArchived
              ? "archived"
              : "najlksdnfjasbdjfaksbdjfbasdkfbasdfbanajlksdnfjasbdjfaksbdjfbasdkfbasdfbanajlksdnfjasbdjfaksbdjfbasdkfbasdfbanajlksdnfjasbdjfaksbdjfbasdkfbasdfbanajlksdnfjasbdjfaksbdjfbasdkfbasdfba"}
          </Text>
        </View>
      </View>
      <Text style={style.chatItemTime}>11:30</Text>
      <View style={[style.chatItemUnreadedMsg]}>
        <Text
          allowFontScaling
          adjustsFontSizeToFit
          style={[style.chatItemUnreadMeassageText, { color: colors.white }]}
        >
          1
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatBar;

const style = StyleSheet.create({
  chatItem: {
    marginVertical: 5,
    paddingHorizontal: 10,
    width: "100%",
    height: 92,
    flexDirection: "column",
    alignItems: "center",
  },
  chatItemUnreadedMsg: {
    left: 8,
    position: "absolute",
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#5698FB",
    justifyContent: "center",
    alignItems: "center",
  },
  chatItemUnreadMeassageText: {
    fontSize: 12,
    fontWeight: "600",
  },
  chatItemContent: {
    marginTop: 10,
    padding: 10,
    width: "100%",
    height: 65,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  chatItemUserName: {
    fontSize: 14,
    fontWeight: "700",
    marginVertical: 4,
  },
  chatItemText: {
    fontSize: 12,
    fontWeight: "600",
  },
  chatItemTime: {
    fontSize: 12,
    fontWeight: "600",
    color: "#727272",
    alignSelf: "flex-start",
  },
});
