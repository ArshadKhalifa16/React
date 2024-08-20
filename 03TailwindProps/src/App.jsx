import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/card.jsx'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-3 mb-2 rounded-xl w-[300px]'>Hello</h1>
      <Card username={'hello Arshad'} btnText={'Click me'}/>
      <Card username={'hello Shama'} />
    </>
  )
}

export default App
