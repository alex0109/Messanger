import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import type { RootStackParamList } from "@/shared/lib/navigation/StackNavigator";

const url = process.env.EXPO_PUBLIC_LOCAL_URL;

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [securePassword, setSecurePassword] = useState(true);

  const navigation = useNavigation<RootStackParamList>();

  const onSignInPress = async () => {
    setLoading(true);
    try {
      const user = {
        email,
        password,
      };

      const response = await axios.post(`${url}/login`, user);
      const token = response.data.token;
      AsyncStorage.setItem("authToken", token);
      console.log(token);
    } catch (err: any) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.registration}>
      <View style={styles.registrationTitle}>
        <Text style={styles.titleText}>Authorize first</Text>
      </View>
      <View style={styles.registrationBox}>
        <View style={styles.inputsContainer}>
          <View style={styles.textInput}>
            <TextInput
              autoCapitalize="none"
              value={email}
              placeholderTextColor="#9D9D9D"
              placeholder="Email"
              onChangeText={(emailAddress) => setEmail(emailAddress)}
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
        </View>
        <TouchableOpacity
          disabled={loading}
          onPress={() => onSignInPress()}
          style={styles.loginButton}
        >
          {!loading ? (
            <Text style={[styles.loginText]}>Log in</Text>
          ) : (
            <ActivityIndicator color="#2E84E8" size={30} />
          )}
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
    color: "#FFF",
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
  loginText: { fontSize: 20, fontWeight: "600", color: "#2E84E8" },
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
