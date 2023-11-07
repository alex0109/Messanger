import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import type { FC } from "react";

interface ChatRequestProps {
  userID: string;
  userName: string;
  isRequestApproved: boolean;
}

const ChatRequest: FC<ChatRequestProps> = ({
  userID,
  userName,
  isRequestApproved,
}) => {
  const navigation = useNavigation();

  const colors = useTheme().colors;

  return (
    <TouchableOpacity
      style={style.chatItem}
      onPress={() =>
        navigation.navigate("DialogStack", { userID, isRequestApproved })
      }
    >
      <View style={[style.chatItemContent, { backgroundColor: colors.blue }]}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          width={55}
          height={55}
          borderRadius={30}
        />
        <View style={{ flexDirection: "row", width: "75%" }}>
          <Text style={[style.chatItemUserName, { color: colors.white }]}>
            {userName}{" "}
          </Text>
          <Text
            style={[
              style.chatItemUserName,
              { fontWeight: "500", color: colors.white },
            ]}
          >
            send request to be friends
          </Text>
        </View>
      </View>
      <Text style={[style.chatItemTime, { color: colors.gray }]}>11:30</Text>
    </TouchableOpacity>
  );
};

export default ChatRequest;

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
    color: "#FFFFFF",
  },
  chatItemContent: {
    marginTop: 10,
    padding: 10,
    width: "100%",
    height: 65,
    backgroundColor: "#C6E0FE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  chatItemUserName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginVertical: 4,
  },
  chatItemText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4F4F4F",
  },
  chatItemTime: {
    fontSize: 12,
    fontWeight: "600",
    color: "#727272",
    alignSelf: "flex-start",
  },
});
