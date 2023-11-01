import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import type { FC } from "react";

const UserScreen: FC = () => {
  const colors = useTheme().colors;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.mainBackground }}>
      <View style={styles.userAvatarContainer}>
        {/* Это должга быть картинка а не просто view */}
        <View style={styles.userAvatar} />
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={styles.description}>
          <Text style={{ fontSize: 13, color: colors.adaptiveGrey }}>Bio </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: colors.adaptiveText,
            }}
          >
            I love flowers🌸
          </Text>
        </View>
        <View
          style={[styles.buttonsContainer, { borderColor: colors.adaptiveGrey }]}
        >
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.blue }]}
          >
            <Text style={[styles.buttonText, { color: colors.white }]}>
              Open Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.success }]}
          >
            <Text style={[styles.buttonText, { color: colors.white }]}>
              Add Friend
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.chatHistoryButtonsContainer}>
          <TouchableOpacity>
            <Text
              style={[
                styles.chatHistoryButtonText,
                { color: colors.adaptiveText },
              ]}
            >
              Messages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.chatHistoryButtonText,
                { color: colors.adaptiveText },
              ]}
            >
              Images
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.chatHistoryButtonText,
                { color: colors.adaptiveText },
              ]}
            >
              Voices
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.chatHistoryButtonText,
                { color: colors.adaptiveText },
              ]}
            >
              Documents
            </Text>
          </TouchableOpacity>
        </View>

        {/* В будущем историю нужно будет отделить в отдельную компоненту */}
        {/* для каждого вида истории нужна будет своя компонента */}
        <View style={styles.history}>
          <Text style={[styles.historyText, { color: colors.adaptiveGrey }]}>
            No history yet
          </Text>
        </View>
      </View>

      <View style={styles.blockButtonContainer}>
        <TouchableOpacity
          style={[styles.blockButton, { borderColor: colors.adaptiveGrey }]}
        >
          <Text style={styles.blockButtonText}>Block user</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  userAvatarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 37,
  },
  userAvatar: {
    height: 207,
    width: 207,
    backgroundColor: "#A1C9DA",
    borderRadius: 180,
  },
  description: {
    width: "80%",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonsContainer: {
    alignItems: "center",
    width: "80%",
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  button: {
    width: "80%",
    borderRadius: 30,
    height: 40,
    marginBottom: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  // Лишний стиль, кнопки одинаковые, не надо дублироваться
  // addFriendsButton: {
  //   width: "80%",
  //   backgroundColor: "#4ACD86",
  //   borderRadius: 30,
  //   height: 40,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
  },
  chatHistoryButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  chatHistoryButtonText: {
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
