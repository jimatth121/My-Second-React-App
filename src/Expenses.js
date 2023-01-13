import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";


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

  
  return (
    <div className=" my-0 mx-auto rounded-md py-8  max-w-[60%] w-[60%] bg-slate-400 px-4">
      <ExpenseFilter
        valued={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList onFilteredExpenses={filteredExpense} />
    </div>
  );
};

export default Expenses;
