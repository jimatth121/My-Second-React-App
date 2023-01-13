import React from "react";
import ExpenseItem from "./ExpenseItem";
// import Expenses from './Expenses';

const ExpensesList = (props) => {
  let expenseContent = <p>There is no data to display</p>;
  if(props.onFilteredExpenses.length === 0){
    return  expenseContent
  }

  return (
    <div>
      {props.onFilteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} data={expense} />
      ))}
    </div>
  );
};

export default ExpensesList;
