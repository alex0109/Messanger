import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from "react-native";

import type * as StackNavigator from "@shared/lib/navigation/StackNavigator";

const url = process.env.EXPO_PUBLIC_LOCAL_URL;

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  const navigation = useNavigation<StackNavigator.RootStackParamList>();

  const onSignUpPress = async () => {
    if (password !== confirmPassword) {
      return;
    }
    try {
      const user = {
        email,
        password,
      };

      await axios.post(`${url}/register`, user).then(() => {
        Alert.alert("Successfully registered✅");
      });
    } catch (err: any) {
      console.log(err);
      Alert.alert("Error while registring⛔️");
    }
  };

  return (
    <View style={[styles.registration]}>
      <View style={[styles.registrationTitle]}>
        <Text style={styles.titleText}>Register</Text>
      </View>
      <View style={styles.registrationBox}>
        <View style={styles.inputsContainer}>
          <View style={styles.textInput}>
            <TextInput
              autoCapitalize="none"
              value={email}
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
              placeholderTextColor="#9D9D9D"
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
                <MaterialCommunityIcons name="eye" size={25} color="white" />
              ) : (
                <MaterialCommunityIcons
                  name="eye-off"
                  size={25}
                  color="white"
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textInput}>
            <TextInput
              value={confirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor="#9D9D9D"
              secureTextEntry={secureConfirmPassword}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setSecureConfirmPassword((state) => !state)}
            >
              {secureConfirmPassword ? (
                <MaterialCommunityIcons name="eye" size={25} color="white" />
              ) : (
                <MaterialCommunityIcons
                  name="eye-off"
                  size={25}
                  color="white"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={onSignUpPress} style={styles.loginButton}>
          <Text style={styles.loginText}>Create account</Text>
        </TouchableOpacity>
      </View>

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
        style={styles.createAccountButton}
        onPress={() => navigation.navigate("SignInStack", {})}
      >
        <Text style={styles.createAccountText}>Log in</Text>
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
  eye: { width: "15%", justifyContent: "center", alignItems: "center" },
  registrationBox: {
    borderRadius: 30,
    backgroundColor: "#9D9D9D80",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  registrationTitle: {
    width: "100%",
    height: 40,
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
    color: "#FFF",
  },
  inputsContainer: {
    paddingVertical: 20,
    marginHorizontal: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
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
    marginVertical: 23,
    borderRadius: 30,
  },
  googleText: { fontSize: 20, fontWeight: "600" },
  facebookButton: {
    width: "80%",
    height: 48,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 23,
    borderRadius: 30,
  },
  facebookText: { color: "#4267B2", fontSize: 20, fontWeight: "600" },

  createAccountButton: {
    marginTop: 20,
  },
  createAccountText: { fontWeight: "600", fontSize: 20, color: "#2E84E8" },
});
