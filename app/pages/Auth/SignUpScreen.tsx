import * as React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../shared/lib/navigation/StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigation = useNavigation<RootStackParamList>();
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [securePassword, setSecurePassword] = React.useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] =
    React.useState(true);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    if (password !== confirmPassword) {
      return;
    }
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={[styles.registration]}>
      <View style={[styles.registrationTitle]}>
        <Text style={styles.titleText}>Register</Text>
      </View>
      {!pendingVerification && (
        <>
          <View style={styles.registrationBox}>
            <View style={styles.inputsContainer}>
              <View style={styles.textInput}>
                <TextInput
                  autoCapitalize="none"
                  value={emailAddress}
                  placeholder="Email"
                  onChangeText={(email) => setEmailAddress(email)}
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
                    <MaterialCommunityIcons
                      name="eye"
                      size={25}
                      color="#D9D9D9"
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="eye-off"
                      size={25}
                      color="#D9D9D9"
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
                    <MaterialCommunityIcons
                      name="eye"
                      size={25}
                      color="#D9D9D9"
                    />
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
            <TouchableOpacity
              onPress={onSignUpPress}
              style={styles.loginButton}
            >
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
        </>
      )}
      {pendingVerification && (
        <View>
          <View>
            <TextInput
              value={code}
              placeholder="Code"
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <TouchableOpacity onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
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
    color: "#000",
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
