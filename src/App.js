import Expenses from "./Expenses";
import React, { useState } from "react";
import NewExpense from "./NewExpense";
// import NewExpense2 from "./NewExpense2";

const dummyData = [
  {
    id: 1,
    title: "Horizon Epic",
    amount: 499,
    date: new Date(),
  },
  {
    id: 2,
    title: "Big Bang",
    amount: 834,
    date: new Date(),
  },
  {
    id: 3,
    title: "Polymorphism",
    amount: 789,
    date: new Date(),
  },
  {
    id: 4,
    title: "Encapsolation",
    amount: 459,
    date: new Date(),
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
    <div className="bg-[#4D4C4D]">
     
<NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
