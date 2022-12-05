import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 11, 12),
    description: "Car insurance for the year",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    description: "New TV for the living room",
  },
  {
    id: "e3",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 10, 12),
    description: "New desk for the office",
  },
  {
    id: "e4",
    title: "New Desk (Glass)",
    amount: 450,
    date: new Date(2022, 10, 15),
    description: "New desk for the office",
  },
  {
    id: "e5",
    title: "New Desk (Metal)",
    amount: 450,
    date: new Date(2022, 11, 12),
    description: "New desk for the office",
  },
  {
    id: "e6",
    title: "Book",
    amount: 250,
    date: new Date(2022, 10, 22),
    description: "Book for the office",
  },
];

function expensesReducer(state, action) {
  switch (action.type) {
    case "DELETE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    case "ADD_EXPENSE":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE_EXPENSE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatebleExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatebleExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseData,
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: "UPDATE_EXPENSE",
      payload: {
        id,
        data: expenseData,
      },
    });
  }

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
