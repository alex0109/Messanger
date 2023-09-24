import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import type { RootStackParamList } from "@/shared/lib/navigation/StackNavigator";

export default function SignInScreen() {
  const colors = useTheme().colors;
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [securePassword, setSecurePassword] = useState(true);

  const navigation = useNavigation<RootStackParamList>();

  const onSignInPress = async () => {
    try {
      console.log("Loged in");
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <View style={[styles.registration, { backgroundColor: colors.themeColor }]}>
      <View style={styles.registrationTitle}>
        <Text style={[styles.titleText, { color: colors.themeColorText }]}>
          Authorize first
        </Text>
      </View>
      <View style={styles.registrationBox}>
        <View style={styles.inputsContainer}>
          <View style={styles.textInput}>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholderTextColor="#9D9D9D"
              placeholder="Email"
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
              style={styles.input}
            />
          </View>

          <View style={styles.textInput}>
            <TextInput
              value={password}
              placeholder="Password"
              placeholderTextColor="#9D9D9D"
              secureTextEntry={securePassword}
              onChangeText={(password) => setPassword(password)}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setSecurePassword((state) => !state)}
            >
              {securePassword ? (
                <MaterialCommunityIcons name="eye" size={25} color="#D9D9D9" />
              ) : (
                <MaterialCommunityIcons
                  name="eye-off"
                  size={25}
                  color="#D9D9D9"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={onSignInPress} style={styles.loginButton}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <Text style={[{ color: "#4285F4" }, styles.googleText]}>G</Text>
        <Text style={[{ color: "#DB4437" }, styles.googleText]}>o</Text>
        <Text style={[{ color: "#F4B400" }, styles.googleText]}>o</Text>
        <Text style={[{ color: "#4285F4" }, styles.googleText]}>g</Text>
        <Text style={[{ color: "#0F9D58" }, styles.googleText]}>l</Text>
        <Text style={[{ color: "#DB4437" }, styles.googleText]}>e</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <Text style={styles.facebookText}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUpStack", {})}
        style={styles.createAccountButton}
      >
        <Text style={styles.createAccountText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  registration: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F0F6FF",
  },
  textInput: {
    height: 40,
    width: "85%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#9D9D9D",
  },
  registrationBox: {
    borderRadius: 30,
    backgroundColor: "#9D9D9D80",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  registrationTitle: {
    width: "100%",
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
  },
  titleText: {
    fontSize: 31,
    fontWeight: "700",
  },
  input: {
    width: "90%",
    marginVertical: 10,
    color: "#000",
  },
  inputsContainer: {
    paddingVertical: 20,
    marginHorizontal: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  eye: { width: "15%", justifyContent: "center", alignItems: "center" },
  loginButton: {
    width: "80%",
    height: 48,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 30,
  },
  loginText: { color: "#2E84E8", fontSize: 20, fontWeight: "600" },
  forgotPasswordButton: { marginVertical: 18 },
  forgotPasswordText: { fontWeight: "500", fontSize: 16, color: "#2E84E8" },
  googleButton: {
    flexDirection: "row",
    width: "80%",
    height: 48,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 23,
    borderRadius: 30,
  },
  googleText: { fontSize: 20, fontWeight: "600" },
  facebookButton: {
    width: "80%",
    height: 48,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17,
    borderRadius: 30,
  },
  facebookText: { color: "#4267B2", fontSize: 20, fontWeight: "600" },

  createAccountButton: {
    marginTop: 20,
  },
  createAccountText: { fontWeight: "600", fontSize: 20, color: "#2E84E8" },
});
