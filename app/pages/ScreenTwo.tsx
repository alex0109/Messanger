import { Text, View } from "react-native";
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
    <Animated.View style={[{ flex: 1 }, rStyle]}>
      <View
        style={{ height: "5%", width: "100%", backgroundColor: "#ccc" }}
      ></View>
      <View
        style={{
          height: "90%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: "violet",
            borderRadius: 100,
          }}
        />
      </View>
      <View
        style={{ height: "5%", width: "100%", backgroundColor: "#ccc" }}
      ></View>
    </Animated.View>
  );
};

export default ScreenTwo;
