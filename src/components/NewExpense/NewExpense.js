import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openFromHandler = () => {
    setIsFormOpen(true);
  };

  const closeFormHandler = () => {
    setIsFormOpen(false);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormOpen(false);
  };
  return (
    <div className="new-expense">
      {!isFormOpen && (
        <button onClick={openFromHandler}> Add New Expense</button>
      )}
      {isFormOpen && (
        <ExpenseForm
          onCancel={closeFormHandler}
          onSaveExpenseDate={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
