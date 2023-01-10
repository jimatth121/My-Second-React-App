import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.data.title);

  const clickHandler = () => {
    setTitle("Update");

    setTimeout(() => {
      console.log(title);
    }, 3000);
  };

  return (
    <div className="flex justify-between bg-gray-800 mb-4 py-2 items-center rounded-md px-4 w-full">
      <div className="flex gap-x-4 items-center">
        <ExpenseDate date={props.data.date} />
        <div className="text-2xl text-white">{title}</div>
      </div>
      
        <div className="py-2 bg-blue-900 rounded-md border-[1px] border-[#eee] px-10 text-white">
          ${props.data.amount}{" "}
        </div>
       
      
    </div>
  );
};

export default ExpenseItem;
