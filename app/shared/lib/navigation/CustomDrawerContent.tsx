import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useContext } from "react";
import {
  Switch,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import { ThemeContext } from "../providers/ThemeProvider";

const CustomDrawerContent = () => {
  const colors = useTheme().colors;
  const { theme, changeTheme } = useContext(ThemeContext);

  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: colors.themeColor }]}>
      <View
        style={[styles.drawerProfile, { borderColor: colors.themeColorText }]}
      >
        <View style={{ alignItems: "center", width: "70%" }}>
          <TouchableOpacity onPress={() => navigation.navigate("UserStack")}>
            <Image source={require("../../assets/images/Ellipse.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("UserStack")}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.themeColorText,
              }}
            >
              User Name
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("UserStack")}>
            <Text style={{ color: "gray" }}>@user_login</Text>
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
      <View style={styles.drawerLinks}></View>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("ChatStack", {})}
        >
          <Ionicons name="home" size={30} />
          <Text style={styles.drawerButtonText}>Home</Text>
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
          onPress={() => AsyncStorage.removeItem("authToken", undefined)}
        >
          <Ionicons name="settings" size={30} />
          <Text style={styles.drawerButtonText}>Remove jwt</Text>
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
