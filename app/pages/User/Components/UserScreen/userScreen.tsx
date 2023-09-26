import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const UserScreen = () => {
  const colors = useTheme().colors;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
      <View style={[styles.header, { backgroundColor: colors.blue }]}>
        <TouchableOpacity
          style={{
            justifyContent: "flex-start",
          }}
        >
          <MaterialCommunityIcons name="arrow-left" size={18} color="white" />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.hederText}>user_name</Text>
        </View>
        <TouchableOpacity style={{ justifyContent: "flex-end" }}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={18}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.userAvatarContainer}>
        <View style={styles.userAvatar} />
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.description}>
          <Text style={{ fontSize: 13, color: colors.grayDark }}>Bio </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: colors.themeColorText,
            }}
          >
            I love flowers🌸
          </Text>
        </View>
        <View
          style={[styles.friendContainer, { borderColor: colors.grayDark }]}
        >
          <TouchableOpacity
            style={[styles.openChatButton, { backgroundColor: colors.blue }]}
          >
            <Text style={[styles.buttonText, { color: colors.whiter }]}>
              Open Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addFriendsButton}>
            <Text style={[styles.buttonText, { color: colors.whiter }]}>
              Add Friend
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userList}>
          <TouchableOpacity>
            <Text
              style={[styles.userListText, { color: colors.themeColorText }]}
            >
              Messages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[styles.userListText, { color: colors.themeColorText }]}
            >
              Images
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[styles.userListText, { color: colors.themeColorText }]}
            >
              Voices
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[styles.userListText, { color: colors.themeColorText }]}
            >
              Documents
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.history}>
          <Text style={[styles.historyText, { color: colors.grayDark }]}>
            No history yet
          </Text>
        </View>
      </View>

      <View style={styles.blockButtonContainer}>
        <TouchableOpacity
          style={[styles.blockButton, { borderColor: colors.grayDark }]}
        >
          <Text style={styles.blockButtonText}>Block user</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default UserScreen;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 51,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
  },
  hederText: {
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  userAvatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 37,
  },
  description: {
    width: "80%",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  friendContainer: {
    alignItems: "center",
    width: "80%",
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  openChatButton: {
    width: "80%",
    borderRadius: 30,
    height: 40,
    marginBottom: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  addFriendsButton: {
    width: "80%",
    backgroundColor: "#4ACD86",
    borderRadius: 30,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
  },
  userAvatar: {
    height: 207,
    width: 207,
    backgroundColor: "#A1C9DA",
    borderRadius: 180,
  },
  userList: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  userListText: {
    fontSize: 16,
    fontWeight: "700",
  },
  history: {
    alignItems: "center",
    minHeight: 300,
    justifyContent: "center",
  },
  historyText: {
    fontWeight: "500",
    fontSize: 20,
  },
  blockButtonContainer: {
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  blockButton: {
    alignItems: "center",
    borderTopWidth: 1,
    width: "80%",
  },
  blockButtonText: {
    color: "#DC5656",
    fontSize: 20,
    fontWeight: "700",
  },
});
