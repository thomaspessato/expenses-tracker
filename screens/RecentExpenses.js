import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from 'react';
import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const today = new Date();
    const difference = today.getTime() - expenseDate.getTime();
    const differenceInDays = difference / (1000 * 3600 * 24);
    return differenceInDays <= 7;
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={"Last 7 Days"} fallbackText="No recent expenses found" />;
}

export default RecentExpenses;
