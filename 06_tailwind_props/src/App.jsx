import { useState } from 'react'
import './App.css'
import Card from "./components/Card";


function App() {
  const [count, setCount] = useState(0)

  let myObject = {
    username: "Dhriti",
    age: 5
  }

  let newArray = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-md relative w-[300px] mb-3'>Tailwind CSS</h1>
      <Card username='Pradipta' btnText="Click me" someObject={myObject} someArray={newArray} />
      <Card username='Dhriti' btnText="Visit me" />
    </>
  )
}

export default App
