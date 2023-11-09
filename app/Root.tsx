import { NavigationContainer } from "@react-navigation/native";

import Colors from "@shared/assets/styles/colors";
import DrawerNavigator from "@shared/lib/navigation/DrawerNavigator";
import { AuthStackNavigator } from "@shared/lib/navigation/StackNavigator";
import { ThemeContext } from "@shared/lib/providers/ThemeProvider";
import * as SecureStore from "expo-secure-store";
import React, { useContext, useEffect } from "react";

import { connect } from "socket.io-client";

import { useActions } from "./shared/lib/hooks/useActions";
import { useAppDispatch } from "./shared/lib/hooks/useAppDispatch";
import { useTypedSelector } from "./shared/lib/hooks/useTypedSelector";

import { updateSocketThunk } from "./shared/lib/store/user-thunks";

import type { ThemeType } from "@shared/lib/providers/ThemeProvider";

const url = process.env.EXPO_PUBLIC_LOCAL_SOCKET;
const socket = connect(url);

export default function Root() {
  const { theme } = useContext(ThemeContext);
  const { isAuth, user, socketId } = useTypedSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { authentificate } = useActions();

  const currentTheme = (theme: ThemeType) => {
    if (theme === "light") {
      return Colors.light;
    }
    if (theme === "dark") {
      return Colors.dark;
    }
  };

  useEffect(() => {
    async function checkForToken() {
      const token = await SecureStore.getItemAsync("token");

      if (token) {
        authentificate();
      }
    }

    socket.on("connect", () => {
      console.log("Connected", socket.id);
      dispatch(updateSocketThunk({ userID: user.id, socketId: socket.id }));
    });

    socket.on("newFriendRequest", (data) => {
      // Обновление интерфейса или вывод уведомления
      console.log(data.message);
    });

    checkForToken();
  }, []);

  return (
    <NavigationContainer theme={currentTheme(theme)}>
      {isAuth ? <DrawerNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
