import { View } from "react-native";
import React, { useContext } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import Colors from "../shared/assets/styles/colors";
import { ThemeContext } from "../shared/lib/providers/ThemeProvider";

const ScreenTwo = () => {
  const { themeProgress, theme, changeTheme } = useContext(ThemeContext);

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
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: "violet",
          borderRadius: 100,
        }}
      />
    </Animated.View>
  );
};

export default ScreenTwo;
