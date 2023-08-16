import React from 'react'

function CountButton({increment,decrement,reset}) {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default CountButton;