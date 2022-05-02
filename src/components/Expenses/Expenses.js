import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
