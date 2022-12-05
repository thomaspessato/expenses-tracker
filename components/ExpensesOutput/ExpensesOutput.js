import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.fallbackText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = (
      <ExpensesList expenses={expenses} fallbackText="No expenses found" />
    );
  }
  return (
    <View>
      <ExpensesSummary
        periodName={expensesPeriod}
        amount="0"
        expenses={expenses}
      />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  fallbackText: {
    textAlign: "center",
    fontSize: 18,
    color: "#ccc",
  },
});

export default ExpensesOutput;
