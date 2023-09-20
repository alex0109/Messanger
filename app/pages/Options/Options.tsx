import Colors from "@shared/assets/styles/colors";
import { ThemeContext } from "@shared/lib/providers/ThemeProvider";
import React, { useContext } from "react";
import { Text } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

const Options = () => {
  const { themeProgress } = useContext(ThemeContext);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      themeProgress.value,
      [0, 1],
      [Colors.commonColors.white, Colors.commonColors.black]
    );
    return { backgroundColor };
  });

  return (
    <Animated.View
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        rStyle,
      ]}
    >
      <Text style={{ fontSize: 28, fontWeight: "600" }}>Options</Text>
    </Animated.View>
  );
};

export default Options;
