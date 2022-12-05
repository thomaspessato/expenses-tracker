import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, style, textInputConfig }) {
  const inputStyles = [styles.input];
  if (textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderBottomColor: "#ccc",
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 5,
    color: GlobalStyles.colors.primary700,
    borderBottomWidth: 1,
    fontSize: 16,
    padding: 10,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default Input;
