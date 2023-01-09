import React from 'react'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
  return (
    <div className=' my-0 mx-auto rounded-md py-8  max-w-[80%] w-[80%] bg-slate-400 px-4'>
    <ExpenseItem data ={props.property[0]} />
   <ExpenseItem data ={props.property[1]} />
   <ExpenseItem data ={props.property[2]} />
   <ExpenseItem data ={props.property[3]} />
    </div>
  )
}

export default Expenses
