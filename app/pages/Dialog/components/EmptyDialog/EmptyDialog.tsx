import React from "react";
import { StyleSheet, View, Text } from "react-native";

const EmptyChat = () => (
  <View style={style.emptyBlock}>
    <Text style={style.upperText}>Chat’s clear!</Text>
    <Text style={style.centerText}>
      Send your first message to start a dialog ;)
    </Text>
    <Text style={style.downText}>wish you good luck</Text>
  </View>
);

const style = StyleSheet.create({
  emptyBlock: {
    width: 320,
    height: 350,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  upperText: {
    fontSize: 20,
    fontWeight: "700",
    color: "black",
    marginTop: 40,
  },
  centerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    width: "75%",
    textAlign: "center",
  },
  downText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#989898",
    marginBottom: 40,
  },
});

export default EmptyChat;
