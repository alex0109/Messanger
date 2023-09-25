import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ChatScreenHeader = () => (
  <View style={style.mainView}>
    <StatusBar
      barStyle="dark-content"
      animated={true}
      backgroundColor={"#5698FB"}
    />
    <View style={style.headerBar}>
      <TouchableHighlight
        style={style.button}
        onPress={() => alert("кнопка назад была нажата")}
        underlayColor={"#C6E0FE"}
      >
        <Ionicons
          name="arrow-back"
          size={25}
          color="black"
          style={style.icons}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => alert("кнопка user была нажата")}
        style={{ borderRadius: 5 }}
        underlayColor={"#C6E0FE"}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{}}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
              }}
              style={style.userAvatar}
            ></Image>
          </View>

          <View style={style.userInfo}>
            <Text style={style.userName}>User</Text>
            <Text style={style.timeStatus}>last seen recentry</Text>
          </View>
          <View></View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={style.button}
        onPress={() => alert("кнопка ещё была нажата")}
        activeOpacity={1}
        underlayColor={"#C6E0FE"}
      >
        <Ionicons
          name="ellipsis-vertical"
          size={24}
          color="black"
          style={style.icons}
        />
      </TouchableHighlight>
    </View>
  </View>
);

const style = StyleSheet.create({
  mainView: {},
  timeStatus: {
    fontSize: 12,
    color: "#C0C0C0",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  userInfo: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    width: "50%",
  },
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
  userAvatar: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  button: {
    borderRadius: 20,
    height: 40,
    width: 40,
    margin: 10,
    justifyContent: "center",
    alignContent: "flex-end",
  },
  icons: {
    alignSelf: "center",
  },
});
export default ChatScreenHeader;
