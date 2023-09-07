import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  Keyboard,
} from "react-native";
import ChatScreenHeader from "./../pageHeader/ChatScreenHeader";
import Footer from "../pageFooter/Footer";
import EmptyChat from "../pageEmptyChat/EmptyElem";

type ItemProps = { title: string; index: number };

const Item = ({ title, index }: ItemProps) => (
  <View style={index ? style.myMessage : style.otherMessage}>
    <Text>{title}</Text>
  </View>
);

const hideKeyboard = () => {
  Keyboard.dismiss();
};

export default function ChatScreen() {
  const [data, setData] = useState([
    { id: "2", title: "2", index: 0 },
    { id: "1", title: "1", index: 1 },
  ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#F1F1F1",
      }}
    >
      <ChatScreenHeader />

      <View
        style={{
          justifyContent: "flex-end",
          flex: 1,
          flexDirection: "column-reverse",
          backgroundColor: "purple",
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Item title={item.title} index={item.index} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            justifyContent: data.length == 0 ? "center" : "flex-end",
            backgroundColor: "yellow",
            height: data.length == 0 ? "100%" : null,
          }}
          inverted={data.length != 0}
          ListEmptyComponent={<EmptyChat />}
          onScrollBeginDrag={() => hideKeyboard()}
        />
      </View>
      <Footer setData={setData} data={data} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  myMessage: {
    backgroundColor: "lightblue",
    borderRadius: 20,
    padding: 10,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: 10,
  },
  otherMessage: {
    padding: 10,
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: "lightgrey",
    borderRadius: 20,
  },
});
