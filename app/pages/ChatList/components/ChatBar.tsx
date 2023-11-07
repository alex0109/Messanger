import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import type { FC } from "react";

interface ChatBarProps {
  userID: string;
  userName: string;
  message: string;
  isArchived: boolean;
}

const ChatBar: FC<ChatBarProps> = ({ userID, userName, message, isArchived }) => {
  // const [isUnread, setIsUnread] = useState(false);
  const [isArchived, setIsArchived] = useState(archived);

  const navigation = useNavigation();

  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      style={[style.chatItem, { backgroundColor: isArchived ? "mediumslateblue" : "transparent" }]}
      onPress={() => navigation.navigate("DialogStack", { userID })}>
      <View style={[style.chatItemContent, { backgroundColor: colors.themeColorChatBlock }]}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          width={55}
          height={55}
          borderRadius={30}
        />
        <View style={{ flexDirection: "column", width: "75%" }}>
          <Text style={style.chatItemUserName}>{userName}</Text>
          <Text style={style.chatItemText} numberOfLines={2}>
            {isArchived ? "archived" : message}
          </Text>
        </View>
      </View>
      <Text style={style.chatItemTime}>11:30</Text>
      <View style={[style.chatItemUnreadedMsg]}>
        <Text allowFontScaling adjustsFontSizeToFit style={style.chatItemUnreadMeassageText}>
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
    fontSize: 16,
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
    alignSelf: "flex-start",
  },
});
