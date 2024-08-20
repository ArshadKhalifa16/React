import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) // let [name, function] = useState(0)

  const addValue = () => {
    console.log("Adding", counter);
    if (counter === 20) {
      alert('Limit is over :(')
    } else {
      setCounter(counter = counter + 1);
    }
  }

  const removeValue = () => {
    if (counter === 0) {
      alert('Limit is Over :(')
    } else {

      setCounter(counter = counter - 1);
      console.log("Removing", counter);
    }
  }
  return (
    <>
      <h1>Hello Arshad</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Add Count</button><br /><br />
      <button onClick={removeValue}>Remove Count</button>
    </>
  )
}

export default App
