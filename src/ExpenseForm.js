import React, { useState } from "react";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const titleHandler = (e) => {
    setEnterTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setEnterAmount(e.target.value);
  };
  const dateHandler = (e) => {
    setEnterDate(e.target.value);
  };
  const submitHandler  = (e)=>{
    e.preventDefault()
  const data = {title:enterTitle,
  amount:enterAmount,
date:new Date(enterDate)}
console.log(data);
setEnterTitle("")
setEnterDate("")
setEnterAmount("")

  }
  return (
    <div>
      <form className=" relative" onSubmit={submitHandler}>
        <div className="md:flex gap-x-4 my-2">
          <div className=" w-[100%]">
            <label className="text-bold-xl">Enter Title</label>
            <input
              onChange={titleHandler}
             value={enterTitle} type="text"
              className="py-2 px-1 block border-[1px] border-[#eee]  rounded-md w-[100%]"
            />
          </div>
          <div className=" w-[100%]">
            <label className="text-bold-xl">Enter Amount</label>
            <input
             onChange={amountHandler} type="number"
             value={enterAmount} className="py-2 px-1 block border-[1px] border-[#eee] w-[100%] rounded-md "
            />
          </div>
        </div>
        <div className=" w-[100%] my-2">
          <label className="text-bold-xl">Enter Date</label>
          <input
           onChange={dateHandler} type="date"
           value={enterDate} className="py-2 px-1 block border-[1px] border-[#eee] w-[50%] rounded-md "
          />
        </div>
        <div className="absolute right-8">
          <button className="p-4 border-[1px] bg-red-600  " type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
