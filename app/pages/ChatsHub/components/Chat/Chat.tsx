import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { FC } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { truncate } from "../../lib/helpers/truncate";

interface ChatProps {
  userName: string;
  message: string;
}

const { width } = Dimensions.get("screen");

const Chat: FC<ChatProps> = ({ userName, message }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.userAvatarContainer}>
            <View style={styles.userAvatar} />
          </View>
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoName}>{userName}</Text>
          <View style={styles.userInfoMessageContainer}>
            <Text>{truncate(message, 70)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ccc",
    width: width / 1.1,
    height: 90,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  userAvatarContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  userAvatar: {
    height: 70,
    width: 70,
    backgroundColor: "violet",
    borderRadius: 50,
  },
  userInfoContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 70,
    width: "80%",
    padding: 5,
  },
  userInfoName: {
    fontWeight: "600",
    fontSize: 16,
  },
  userInfoMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
