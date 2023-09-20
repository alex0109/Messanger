import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface UserScreenProps {
  userName: string;
  message: string;
  avatarUrl: string;
}

const UserScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="arrow-left" size={17} />
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.hederText}>user_name</Text>
        </View>

        <TouchableOpacity>
          <MaterialCommunityIcons name="dots-vertical" size={17} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4891FF",
    width: "100%",
    height: 51,
    borderRadius: 10,
    justifyContent: "center",
  },
  hederText: {
    justifyContent: "center",
    textAlign: "center",
  },
});

export default UserScreen;
