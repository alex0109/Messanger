import React, { useState } from "react";
import { Image } from "expo-image";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ChatsHub from "app/pages/ChatsHub/components/ChatsHub/ChatsHub";

const ChatListBase = () => {
  const [isUnread, setIsUnread] = useState(false);
  return (
    <TouchableOpacity
      style={style.chatItem}
      onPress={() => setIsUnread(!isUnread)}
    >
      <ChatsHub />
      <View style={style.chatItemBase}>
        <Image
          source="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Red_flag.svg/1200px-Red_flag.svg.png"
          style={style.chatItemUserAvatar}
        ></Image>
        <View
          style={{
            flexDirection: "column",
            width: "74%",
          }}
        >
          <Text style={style.chatItemUserName}>Oleg</Text>
          <Text style={style.chatItemText} numberOfLines={2}>
            LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
          </Text>
        </View>
      </View>
      <Text style={style.chatItemTime}>11:30</Text>
      <View
        style={[
          style.chatItemUnreadedMsg,
          { height: isUnread ? 0 : 20, width: isUnread ? 0 : 20 },
        ]}
      >
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
    paddingRight: 10,
    marginLeft: 10,
    width: "100%",
    height: 92,
    flexDirection: "column",
    alignItems: "center",
  },
  chatItemUnreadedMsg: {
    flex: 0,
    zIndex: 1,
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
    height: 70,
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
