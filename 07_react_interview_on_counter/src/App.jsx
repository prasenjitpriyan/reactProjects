import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 15
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React with Vite</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
