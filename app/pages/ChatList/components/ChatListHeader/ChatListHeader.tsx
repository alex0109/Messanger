import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChatListHeader = () => (
    <View>
      <StatusBar
        backgroundColor={"#5698FB"}
        barStyle={"dark-content"}
      ></StatusBar>
      <View style={style.headerBar}>
        <TouchableOpacity style={style.button}>
          <Ionicons name="ios-menu" size={24} color="black" />
        </TouchableOpacity>
        <View
          style={{
            borderRightWidth: 1,
            borderColor: "black",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <TextInput style={{ flex: 1 }}></TextInput>
          <TouchableOpacity style={style.button}>
            <Ionicons name="md-search-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.button}>
          <Ionicons name="person-add" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

const style = StyleSheet.create({
  headerBar: {
    height: 50,
    width: "100%",
    backgroundColor: "#5698FB",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 15,
  },
});
export default ChatListHeader;
