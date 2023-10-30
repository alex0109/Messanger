import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import type { FC, ReactNode } from "react";

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  const colors = useTheme().colors;

  return (
    <View>
      <Text
        style={{
          color: colors.themeColorText,
          fontSize: 20,
          fontWeight: "800",
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default Title;
