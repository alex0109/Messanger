import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import type { FC } from "react";

const DialogHeader: FC = () => {
  //Для навигации в приложении
  const navigation = useNavigation();
  const colors = useTheme().colors;

  return (
    <View style={[styles.header, { backgroundColor: colors.themeColorHeader }]}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.fullAlign]}>
        <MaterialCommunityIcons name="arrow-left" size={24} color={colors.white} />
      </TouchableOpacity>
      <View style={[{ flex: 1, borderRadius: 30 }, styles.fullAlign]}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/266/266033.png",
          }}
        />
      </View>
      <View style={[{ flex: 4 }, styles.topStatus]}>
        <Text style={[styles.username, { color: colors.white }]}>Username</Text>
        <Text style={[styles.timeStatus, { color: colors.themeGrayText }]}>last time 09:32</Text>
      </View>
      <View style={[{ flex: 1 }, styles.fullAlign]}>
        <MaterialCommunityIcons name="dots-vertical" size={24} color={colors.white} />
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

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 5,
  },
  userAvatar: {
    height: 40,
    width: 40,

    borderRadius: 30,
  },
  topStatus: {
    height: "100%",
    justifyContent: "center",
  },
  username: {
    fontSize: 12,

    fontWeight: "600",
  },
  timeStatus: {
    fontSize: 12,

    fontWeight: "400",
  },
  fullAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
});
