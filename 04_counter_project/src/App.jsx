import { useState } from "react";
import './App.css'

function App() {

  //let counter = 15
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    //console.log("value added", Math.random());
    //counter = counter + 1
    if (counter <= 19 && counter >= 0) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter <= 20 && counter >= 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
