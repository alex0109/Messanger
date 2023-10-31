import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useContext } from "react";
import {
  Switch,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ThemeContext } from "../providers/ThemeProvider";

import { logoutThunk } from "../store/user-thunks";

import type { FC } from "react";

//import DropDownPicker from "react-native-dropdown-picker";

const CustomDrawerContent: FC = () => {
  const colors = useTheme().colors;
  const { theme, changeTheme } = useContext(ThemeContext);

  const user = useTypedSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.themeColor }]}>
      <View
        style={[styles.drawerProfile, { borderColor: colors.themeColorText }]}
      >
        <View style={{ alignItems: "center", width: "70%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("UserStack")}>
            {/* <Image source={require("../../assets/images/Ellipse.png")} /> */}
            <View
              style={{
                width: 100,
                height: 100,
                backgroundColor: colors.peach,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 100,
              }}
            >
              <Text style={{ fontSize: 40, fontWeight: "600" }}>
                {user.user.email.split("")[0]}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("UserStack")}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.themeColorText,
              }}
            >
              {user.user.email.split("@")[0]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("UserStack")}>
            <Text style={{ color: "gray" }}>{user.user.email}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "100%", width: "15%", paddingVertical: 10 }}>
          <Switch
            value={theme === "dark"}
            onValueChange={(toggled) => {
              changeTheme(toggled ? "dark" : "light");
            }}
          />
        </View>
      </View>
      <View style={styles.drawerLinks}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("ChatStack", {})}
        >
          <Ionicons name="home" size={30} />
          <Text style={styles.drawerButtonText}>Chats List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("UserStack", {})}
        >
          <Ionicons name="people" size={30} />
          <Text style={styles.drawerButtonText}>User settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("DialogStack", {})}
        >
          <Ionicons name="settings" size={30} />
          <Text style={styles.drawerButtonText}>Dialog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("SettingsStack", {})}
        >
          <Ionicons name="settings" size={30} />
          <Text style={styles.drawerButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => dispatch(logoutThunk())}
        >
          <MaterialCommunityIcons name="logout" size={24} color="black" />
          <Text style={styles.drawerButtonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerButtonText: { fontSize: 16, paddingLeft: 10 },
  container: {
    flex: 1,
    padding: 15,
  },
  drawerProfile: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  drawerLinks: { marginTop: 10 },
  drawerButtonContainer: {
    marginVertical: 10,
  },
  drawerButton: { flexDirection: "row", alignItems: "center", padding: 10 },
});
