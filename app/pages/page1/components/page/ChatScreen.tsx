// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";


export default function ChatScreen() {
  return (
    <View style = {style.mainView}>
      <StatusBar barStyle = "default"></StatusBar>
      <View style = {style.headerView}>
        <TouchableOpacity style = {style.headerButtons}></TouchableOpacity>
        <Image source={require("")} style={style.headerImage}></Image>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  // Верхнее меню
  mainView: {
    flex: 1,
  },
  headerView: {

  },
  header: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#5698FB",
    borderBottomRadius: 10,
  },
  headerImage: {
    height: '100%',
  },
  headerButtons: {
    borderRadius: 30,
    backgroundColor: '#5698FB',
    height: '100%',
    width: '100%',
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
