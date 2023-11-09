import { useTheme } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RespondDialog = () => {
  const colors = useTheme().colors;

  return (
    <View style={{ flex: 1 }}>
      <BlurView intensity={10} tint="dark" style={styles.blurContainer}>
        <View
          style={[
            styles.content,
            {
              backgroundColor: colors.themeColorBlock,
            },
          ]}>
          <View style={styles.userInfo}>
            <View style={styles.avatar} />
            <Text style={{ fontSize: 18, color: colors.themeColorText }}>
              <Text style={{ fontWeight: "600" }}>User </Text>
              is sending the request
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Text style={[styles.button, { color: colors.success }]}>Accept</Text>
            </TouchableOpacity>
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: colors.themeGrayText,
              }}
            />
            <TouchableOpacity>
              <Text style={[styles.button, { color: colors.red }]}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

export default RespondDialog;

const styles = StyleSheet.create({
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  content: {
    width: "80%",
    height: 300,
    padding: 20,

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "orange",
    borderRadius: 100,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "30%",
  },
  button: {
    fontSize: 18,
    fontWeight: "800",
  },
});
