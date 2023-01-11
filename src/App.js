import Expenses from "./Expenses";
import React, {useState} from "react";
import NewExpense from "./NewExpense";

function App() {
const dummyData=[
  {
    id: 1,
    title: 'Horizon Epic',
    amount:499,
    date: new Date(),

  },
  {
    id: 2,
    title: 'Big Bang',
    amount:834,
    date: new Date(),

  },
  {
    id: 3,
    title: 'Polymorphism',
    amount:789,
    date: new Date(),

  },{
    id: 4,
    title: 'Encapsolation',
    amount:459,
    date: new Date(),

  }
]
const [expenses, setExpenses] =useState(dummyData)
const addExpenseHandler=(expense) =>{
setExpenses(()=>{
  return [expense, ...expenses]
}

);
}
  return (
   <>
   <NewExpense addExpenseHandler ={addExpenseHandler}/>
   <Expenses items={expenses}/>
   </>
  );
}

export default App;
