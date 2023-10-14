import { Ionicons } from "@expo/vector-icons";
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
    <ScrollView style={{ flex: 1, backgroundColor: colors.themeColor }}>
      {/* Это должга быть картинка а не просто view */}
      <View style={styles.userAvatar} />

      <View style={{ width: "100%", alignItems: "center" }}>
        <View
          style={[styles.description, { borderBottomColor: colors.grayDark }]}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "600",
              color: colors.themeColorText,
            }}
          >
            User Name, 19 😎
          </Text>
        </View>
        <Text
          style={[
            styles.description,
            {
              fontSize: 16,
              fontWeight: "600",
              color: colors.grayDark,
            },
          ]}
        >
          Hi, my name is (what?)My name is (who?)My name is (chka-chka, Slim
          Shady)Hi, my name is (huh?)My name is (what?)My name is (chka-chka,
          Slim Shady)
        </Text>
        <View
          style={[
            styles.chatHistoryButtonsContainer,
            { borderTopColor: colors.grayDark },
          ]}
        >
          <TouchableOpacity>
            <Text
              style={[
                styles.chatHistoryButtonText,
                { color: colors.themeColorText },
              ]}
            >
              Messages
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.chatHistoryButtonText,
                { color: colors.themeColorText },
              ]}
            >
              Images
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.chatHistoryButtonText,
                { color: colors.themeColorText },
              ]}
            >
              Voices
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.chatHistoryButtonText,
                { color: colors.themeColorText },
              ]}
            >
              Documents
            </Text>
          </TouchableOpacity>
        </View>

        {/* В будущем историю нужно будет отделить в отдельную компоненту */}
        {/* для каждого вида истории нужна будет своя компонента */}
        <View style={styles.history}>
          <Text style={[styles.historyText, { color: colors.grayDark }]}>
            No history yet
          </Text>
        </View>
        <TouchableOpacity style={styles.chatButton}>
          <Ionicons name="chatbox-ellipses" size={31} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.friendButton}>
          <Ionicons name="person-add" size={31} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  chatButton: {
    backgroundColor: "#5698FB",
    borderRadius: 70,
    height: 70,
    width: 70,
    position: "absolute",
    bottom: 35,
    right: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  friendButton: {
    backgroundColor: "#45932A",
    borderRadius: 70,
    height: 70,
    width: 70,
    position: "absolute",
    bottom: 35,
    right: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  userAvatar: {
    height: 375,
    width: "100%",
    backgroundColor: "#1D9EBA",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  description: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonsContainer: {
    alignItems: "center",
    width: "80%",
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  chatHistoryButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    borderTopWidth: 1,
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
});
