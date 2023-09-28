import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

import type { FC } from "react";

//import DropDownPicker from "react-native-dropdown-picker";

const CustomDrawerContent: FC = () => {
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
          onPress={() => navigation.navigate("OptionsStack", {})}
        >
          <Ionicons name="people" size={30} />
          <Text style={styles.drawerButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate("DialogStack", {})}
        >
          <Ionicons name="settings" size={30} />
          <Text style={styles.drawerButtonText}>Empty</Text>
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
