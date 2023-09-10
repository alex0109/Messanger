// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export function MessageScreen() {
  return (
    <View style={{ backgroundColor: "#F1F1F1" }}>
      <StatusBar />

      <View style={style.header}>
        <View style={[{ flex: 1 }, style.fullAlign]}>
          <AntDesign name="arrowleft" size={24} color="black"></AntDesign>
        </View>
        <View style={[{ flex: 1, borderRadius: 90 }, style.fullAlign]}>
          <Image
            style={style.userAvatar}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/266/266033.png",
            }}
          />
        </View>
        <View style={[{ flex: 4 }, style.topStatus]}>
          <Text style={style.username}>Username</Text>
          <Text style={style.timeStatus}>last time 09:32</Text>
        </View>
        <View style={[{ flex: 1 }, style.fullAlign]}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </View>
      </View>
      <View style={style.main}>
        <View style={style.clrChatBG}>
          <Text style={[style.clrCMess1]}>Chat’s clear!</Text>
          <Text style={style.clrCMess2}>
            Send your first message to start a dialog ;)
          </Text>
          <Text style={style.clrCMess3}>wish you good luck</Text>
        </View>
      </View>

      <View style={style.footer}>
        <View style={{ flex: 6, justifyContent: "center" }}>
          <TextInput
            style={style.baseText}
            multiline
            placeholder="Type type"
            placeholderTextColor={"#747474"}
          ></TextInput>
        </View>
        <View style={style.separator}></View>
        <View style={[{ flex: 1 }, style.fullAlign]}>
          {/* <Feather name="send" size={24} color="black" /> */}
          <Text style={style.sendText}>Send</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  // Верхнее меню
  header: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#5698FB",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  // Подложка чата
  main: {
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
  },
  // Нижняя панель
  footer: {
    height: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
  },
  // Полное выравнивание
  fullAlign: {
    justifyContent: "center",
    alignItems: "center",
  },
  // Ава пользователя
  userAvatar: {
    height: "80%",
    width: "80%",
    backgroundColor: "#4265E1",
    borderRadius: 30,
  },
  //Центральная часть верхнего меню
  topStatus: {
    height: "100%",
    justifyContent: "center",
  },
  // Имя пользователя
  username: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  //Статус времени
  timeStatus: {
    fontSize: 12,
    color: "#C0C0C0",
    fontWeight: "400",
  },
  // Подложка для сообщений при пустом чате
  clrChatBG: {
    height: 350,
    width: 320,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  // Сообщения при пустом чате
  // 1
  clrCMess1: {
    color: "#000000",
    fontWeight: "bold",
    marginTop: 15,
    fontSize: 20,
  },
  // 2
  clrCMess2: {
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    width: "70%",
    fontSize: 16,
    marginTop: "auto",
    marginBottom: "auto",
  },
  // 3
  clrCMess3: {
    color: "#989898",
    fontSize: 14,
    marginBottom: 15,
  },
  // Текст пустого поля ввода
  baseText: {
    fontSize: 16,
    marginLeft: 16,
    marginRight: 16,
    color: "#000000",
    height: "100%",
  },
  // Разделительная черта кнопки "Send"
  separator: {
    height: "80%",
    width: 2,
    backgroundColor: "black",
  },
  // Надпись Send
  sendText: {
    fontSize: 18,
    color: "#5698FB",
    fontWeight: "bold",
  },
});
