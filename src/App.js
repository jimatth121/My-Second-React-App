import Expenses from "./Expenses";
import React, { useState } from "react";
import NewExpense from "./NewExpense";
// import NewExpense2 from "./NewExpense2";

const dummyData = [
  {
    id: 1,
    title: "New Car",
    amount: 40000,
    date: new Date("2022-11-25"),
  },
  {
    id: 2,
    title: "Bride Price",
    amount: 20000,
    date: new Date("2022-10-25"),
  },
  {
    id: 3,
    title: "New House",
    amount: 2400,
    date: new Date("2021-01-25"),
  },
  {
    id: 4,
    title: "Month Upkeep",
    amount: 834,
    date: new Date("2022-03-25"),
  },
  {
    id: 5,
    title: "Birthday Party",
    amount: 800,
    date: new Date("2021-07-25"),
  },
  {
    id: 6,
    title: "New Phone",
    amount: 900,
    date: new Date("2021-04-25"),
  },
  {
    id: 7,
    title: "New Wardrope",
    amount: 789,
    date: new Date(),
  },
  {
    id: 8,
    title: "Food Stuff",
    amount: 459,
    date: new Date("2020-04-25"),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);
  // const [isHidden, setHidden] = useState(true);
  const addExpenseHandler = (expense) => {
    setExpenses(() => {
      return [expense, ...expenses];
    });

    // setHidden(true);
  };
  return (
    <div className="bg-[#4D4C4D] min-h-screen  pt-10">
     
<NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
