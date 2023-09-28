import React from "react";
import { View, Button } from "react-native";

const SignOutButton = () => (
  <View>
    <Button title="Sign Out" onPress={() => console.log("Loged Out")} />
  </View>
);
export default SignOutButton;
