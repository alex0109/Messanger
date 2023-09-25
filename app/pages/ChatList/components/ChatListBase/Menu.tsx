import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Menu() {
  return (
    <View style={style.menu}>
      <TouchableOpacity style={style.menuItem}>
        <Text style={{ color: "white" }}>archive</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.menuItem}>
        <Text style={{ color: "red" }}>delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  menu: {
    borderRadius: 20,
    flexDirection: "column",
  },
  menuItem: {
    height: 40,
    width: 100,
    justifyContent: "center",
  },
});
