import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import type { FC } from "react";

//Хедер выносим в отдельную компоненту
const UserScreenHeader: FC = () => {
  const navigation = useNavigation();
  const colors = useTheme().colors;
  return (
    <View style={[styles.header, { backgroundColor: colors.header }]}>
      {/* Для хедера обяхателен StatusBar */}
      <StatusBar backgroundColor={colors.header} barStyle="light-content" />
      <TouchableOpacity
        style={{
          justifyContent: "flex-start",
        }}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={18} color={colors.white} />
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.hederText}>user_name</Text>
      </View>
      <TouchableOpacity style={{ justifyContent: "flex-end" }}>
        <MaterialCommunityIcons name="dots-vertical" size={18} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default UserScreenHeader;

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
});
