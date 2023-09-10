import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import { useNavigation } from "@react-navigation/native";
import {
  Switch,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

//import DropDownPicker from "react-native-dropdown-picker";

const CustomDrawerContent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.drawerProfile}>
        <View style={{ alignItems: "center", width: "70%" }}>
          <TouchableOpacity>
            <Image source={require("../../assets/images/Ellipse.png")} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>User Name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "gray" }}>@user_login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "100%", width: "15%", paddingVertical: 10 }}>
          <Switch
            value={theme === "dark"}
            onValueChange={(toggled) => changeTheme(toggled ? "dark" : "light")}
          />
        </View>
      </View>
      <View style={styles.drawerLinks}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("ChatStack", {})}
        >
          <Ionicons name="home" size={30} />
          <Text style={styles.drawerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("OptionsStack", {})}
        >
          <Ionicons name="people" size={30} />
          <Text style={styles.drawerButtonText}>Create group</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("AuthStack", {})}
        >
          <Ionicons name="settings" size={30} />
          <Text style={styles.drawerButtonText}>Settings</Text>
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
    backgroundColor: "#fff",
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
