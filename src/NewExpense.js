import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
const [isEditing, setIsEditing] = useState(false)
  const saveExpenseData=(enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
  props.addExpenseHandler(expenseData) 
  setIsEditing(false)
  }


  return (
    <div className='  mx-auto rounded-md pt-8 pb-16 px-4  max-w-[60%] w-[60%] bg-purple-500 my-4 '>
    {!isEditing && <div className='flex items-center justify-center'> <button onClick={()=>setIsEditing(true)} className='bg-purple-900 px-6 py-4 rounded-md text-white text-xl'>Add new Expense</button></div>}
     {isEditing && <ExpenseForm onCancel={setIsEditing} onSaveExpenseData={saveExpenseData} />}
     
    </div>
  )
}

export default NewExpense
