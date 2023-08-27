import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Chat from "../Chat/Chat";

const ChatsHub = () => {
  const [mockData, setMockData] = useState([
    {
      id: "1",
      userName: "User1",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: "2",
      userName: "User2",
      message:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      id: "3",
      userName: "User3",
      message:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
    },
    { id: "4", userName: "User4", message: "Hello!" },
    {
      id: "5",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "6",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "7",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "8",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "9",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "10",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "11",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "12",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "13",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "14",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "15",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "16",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
    {
      id: "17",
      userName: "User5",
      message: "The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..'",
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={({ item }) => (
          <Chat userName={item.userName} message={item.message} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ChatsHub;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
});
