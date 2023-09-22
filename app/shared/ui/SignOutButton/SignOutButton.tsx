import React from "react";
import { View, Button } from "react-native";
import { useAuth } from "@clerk/clerk-expo";

const SignOutButton = () => {
    const { isLoaded,signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }
    return (
      <View>
        <Button
          title="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    );
  };
export default SignOutButton;