import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import type { FC } from "react";

const DialogHeader: FC = () => {
  //Для навигации в приложении
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.fullAlign]}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View style={[{ flex: 1, borderRadius: 90 }, styles.fullAlign]}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/266/266033.png",
          }}
        />
      </View>
      <View style={[{ flex: 4 }, styles.topStatus]}>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.timeStatus}>last time 09:32</Text>
      </View>
      <View style={[{ flex: 1 }, styles.fullAlign]}>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
    </View>
  );
};

export default DialogHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#5698FB",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  userAvatar: {
    height: "80%",
    width: "80%",
    backgroundColor: "#4265E1",
    borderRadius: 30,
  },
  topStatus: {
    height: "100%",
    justifyContent: "center",
  },
  username: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  timeStatus: {
    fontSize: 12,
    color: "#C0C0C0",
    fontWeight: "400",
  },
  fullAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
});
