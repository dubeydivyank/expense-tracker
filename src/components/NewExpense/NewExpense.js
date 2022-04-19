import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const addExpenseHandler = (expenseDetail) => {
    // const addedExpense = expenseDetail;
    const expense = {
      ...expenseDetail,
      id: Math.random().toString(),
    };
    console.log(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAddingExpense={addExpenseHandler} />
    </div>
  );
}

export default NewExpense;
