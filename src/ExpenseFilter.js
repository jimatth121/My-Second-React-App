import React, {useState} from 'react'


const ExpenseFilter = (props) => {
   
    const onFilterHandler = (event) =>{
        
        props.onChangeFilter(event.target.value);
        
    }

  return (
    <div>
      <div className='flex justify-between px-4 mb-4 items-center'>
        <label className=' text-white text-3xl'>Filter by Year</label>
    <select value={props.valued}  onChange={onFilterHandler} className='p-3 rounded-md px-6'>
            <option  selected>Select Year</option>
            <option value="2020">2020</option>
            <option  value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter
