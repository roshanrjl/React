import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1  className='bg-green-400 text-black p-4 rounded-xl'>hello world</h1>
      <Card Title='beautiful girl' disc="beautiful girl is wearing yellow dress" />
      <br />
      <Card Title='Another beautiful girl'  />
    </>
  )
}

export default App
