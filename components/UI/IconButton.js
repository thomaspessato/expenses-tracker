import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ iconName, onPress, size, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View>
        <Ionicons
          name={iconName}
          size={size}
          color={color}
          style={{ marginRight: 10 }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
