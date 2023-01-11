import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  console.log(filteredYear);
  console.log(
    props.items.filter(
      (expense) => expense.date.getFullYear().toString() !== filteredYear
    )
  );
  console.log(props.items.map((expense) => expense.date.getFullYear()));
  return (
    <div className=" my-0 mx-auto rounded-md py-8  max-w-[60%] w-[60%] bg-slate-400 px-4">
      <ExpenseFilter
        valued={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items
        .filter((expense) => expense.date.getFullYear().toString() === filteredYear)
        .map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))}
    </div>
  );
};

export default Expenses;
