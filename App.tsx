import ChatScreen from "./app/pages/page1/components/page/ChatScreen";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
