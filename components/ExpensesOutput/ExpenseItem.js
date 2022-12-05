import { View, Text, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ id, title, amount, date, description }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    console.log("Expense pressed");
    navigation.navigate("ManageExpense", {
      expenseId: id,
      title: title,
      amount: amount,
      description: description,
    });
  }

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={expensePressHandler}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressed: {
    opacity: 0.5,
  },
  container: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 14,
    color: GlobalStyles.colors.primary400,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
});

export default ExpenseItem;
