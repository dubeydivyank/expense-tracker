import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");
  const filterByYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onFilter={filterByYearHandler} />
      {props.items
        .filter((expense) => expense.date.getFullYear().toString() === year)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
