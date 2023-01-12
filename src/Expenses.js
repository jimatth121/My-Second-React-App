import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  console.log(filteredYear);

  const filteredExpense = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expenseContent = <p>There is no data to display</p>;
  if(filteredExpense.length >0 ){
    expenseContent = filteredExpense.map((expense) => {
      return <ExpenseItem key={expense.id} data={expense} />;
     })
  }
  return (
    <div className=" my-0 mx-auto rounded-md py-8  max-w-[60%] w-[60%] bg-slate-400 px-4">
      <ExpenseFilter
        valued={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </div>
  );
};

export default Expenses;
