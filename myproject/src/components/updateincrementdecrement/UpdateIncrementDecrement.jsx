import React from 'react'

function UpdateIncrementDecrement({incrementvalue,decrementvalue,handleIncrementChange,handleDecrementChange}) {
  return (
    <div>
        <label htmlFor="">Increment</label>
      <input type="number" value={incrementvalue} onChange={handleIncrementChange}/>

      <label htmlFor="">Decrement</label>
      <input type="number" value={decrementvalue} onChange={handleDecrementChange}/>
    </div>
  )
}

export default UpdateIncrementDecrement
