import Expenses from "./Expenses";
import React from "react";

function App() {
const property=[
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

  return (
   <>
   <Expenses property={property}/>
   </>
  );
}

export default App;
