import React from "react";

const AddExpenseButton = (props) => {
  const removeHandler = (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.add("hidden");
  };

  return (
    <div className="rounded-md bg-purple-300 flex items-center justify-center py-4">
      <button
        onClick={props.onClick}
        className="rounded-md px-2 py-4 bg-purple-600"
      >
        Add New Expense
      </button>
    </div>
  );
};

export default AddExpenseButton;
