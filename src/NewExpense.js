import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const saveExpenseData=(enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
  props.addExpenseHandler(expenseData) 
  }


  return (
    <div className=' mx-auto rounded-md pt-8 pb-16 px-4  max-w-[60%] w-[60%] bg-purple-500 my-4 '>
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  )
}

export default NewExpense
