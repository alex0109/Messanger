import type { FC } from "react";
import React, { useState, Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import ChatsHub from "@/pages/ChatsHub/components/ChatsHub/ChatsHub";
import { useActions } from "@/shared/lib/hooks/useActions";
import { useTypedSelector } from "@/shared/lib/hooks/useTypedSelector";

interface ChatListBaseProps {
  id: string;
  userName: string;
  message: string;
  archived: boolean;
}
const ChatListBase: FC<ChatListBaseProps> = ({
  id,
  userName,
  message,
  archived,
}) => {
  const [isUnread, setIsUnread] = useState(false);
  const navigation = useNavigation();
  const chats = useTypedSelector((state) => state.chats);
  const { deleteChatHandler, addChatHandler, archiveChatHandler } =
    useActions();
  const [isArchived, setIsArchived] = useState(archived);
  const handleClick = () => {
    archiveChatHandler({ id: id });
    setIsArchived(!isArchived);
  };

  return (
    <TouchableOpacity
      style={[
        style.chatItem,
        { backgroundColor: isArchived ? "mediumslateblue" : "transparent" },
      ]}
      onPress={() => navigation.navigate("DialogStack", {})}
      onLongPress={() => handleClick()}
    >
      <View style={style.chatItemBase}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={style.chatItemUserAvatar}
        ></Image>
        <View
          style={{
            flexDirection: "column",
            width: "74%",
          }}
        >
          <Text style={style.chatItemUserName}>{userName}</Text>
          <Text style={style.chatItemText} numberOfLines={2}>
            {isArchived ? "archived" : "none"}
          </Text>
        </View>
      </View>
      <Text style={style.chatItemTime}>11:30</Text>
      <View style={[style.chatItemUnreadedMsg]}>
        <Text
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
          style={style.chatItemUMText}
        >
          1
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  chatItem: {
    marginTop: 5,
    marginBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    width: "100%",
    height: 92,
    flexDirection: "column",
    alignItems: "center",
  },
  chatItemUnreadedMsg: {
    flex: 0,
    zIndex: 1,
    left: 8,
    position: "absolute",
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#5698FB",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  chatItemUMText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  chatItemBase: {
    marginTop: 10,
    width: "96%",
    height: 65,
    backgroundColor: "#C6E0FE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  chatItemUserAvatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  chatItemUserName: {
    fontSize: 14,
    fontWeight: "700",
    color: "black",
    marginVertical: 4,
  },
  chatItemText: {
    fontSize: 12,
    flex: 1,
    fontWeight: "600",
    color: "#4F4F4F",
    marginVertical: 5,
  },
  chatItemTime: {
    fontSize: 12,
    fontWeight: "600",
    color: "#727272",
    alignSelf: "flex-start",
    marginHorizontal: 20,
  },
});

export default ChatListBase;
