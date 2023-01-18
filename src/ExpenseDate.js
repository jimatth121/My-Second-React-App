import React from 'react'

const ExpenseDate = (props) => {
      <div></div>
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date.getFullYear()
    console.log("Year",year);
    console.log("Day",day);
    console.log("Month",month);

  return (
    <div className='p-2 px-6 bg-black flex flex-col text-center rounded-md border-[#eee] text-white border-[1px] drop-shadow-lg'>
      <div className='text-xl'>{month}</div>
      <div>{year}</div>
      <div className='text-2xl'>{day}</div>
    </div>
  )
}

export default ExpenseDate
