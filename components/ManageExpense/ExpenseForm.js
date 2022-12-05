import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    description: "",
    date: "",
  });

  function submitHandler() {
    if (isEditing) {
      console.log("edit expense");
      expenseCtx.updateExpense(editedExpenseId, {
        description: "EDITED TEST",
        title: "EDITED TEST",
        amount: 200,
        date: new Date("2022-05-20"),
      });
    } else {
      expenseCtx.addExpense({
        description: "ADD TEST",
        title: "ADD TEST",
        amount: 200,
        date: new Date("2022-05-19"),
      });
    }
    navigation.goBack();
  }

  function inputChangeHandler(inputId, inputValue) {
    setInputValues((prevState) => {
      return {
        ...prevState,
        [inputId]: inputValue,
      };
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            placeholder: "0.00",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          placeholder: "Description",
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "sentences",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    marginBottom: 30,
    fontWeight: "bold",
    color: "white",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});

export default ExpenseForm;
