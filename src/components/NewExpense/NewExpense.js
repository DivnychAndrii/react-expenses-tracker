import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const showPopUpHandler = () => {
    setShowPopUp(true);
  };

  const hidePopUpHandler = () => {
    setShowPopUp(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    hidePopUpHandler();
  };

  let form = <button onClick={showPopUpHandler}>Add new expense</button>;
  if (showPopUp) {
    form = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onHidePopUp={hidePopUpHandler}
      />
    );
  }

  return <div className="new-expense">{form}</div>;
};

export default NewExpense;
