import { Text, View, StyleSheet, TextInput } from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    console.log("delete expense");
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm onCancel={cancelHandler} onSubmit={() => {}} submitButtonLabel={isEditing ? "Save" : "Add"} />
      {isEditing && (
        <View style={styles.deleteButtonContainer}>
          <IconButton
            iconName="trash"
            onPress={deleteExpenseHandler}
            size={30}
            color={GlobalStyles.colors.error500}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  deleteButtonContainer: {
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderBottomColor: GlobalStyles.colors.primary500,
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
});

export default ManageExpense;
