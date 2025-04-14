import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("red")

  return (
    <>
    <h1 className='text-4xl text-red-500 bg-red-200 text-center font-bold mt-10'>
    
    Click the button below to see the magic</h1>
    
  <div className='w-full h-screen '
  style={{backgroundColor: color}}>

    <div className='mt-0   flex flex-wrap justify-center bottom-6 insert-x-0 px-2'>
      <div className='mt-80  flex flex-warp justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-xl'>
        <button
        onClick={() => setcolor("red")}   
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:"red"}}>red</button>

        <button
        onClick={() => setcolor("green")}
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:"green"}}>Green</button>

        <button
        onClick={() => setcolor("blue")}
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:"blue"}}>blue</button>

        <button
        onClick={() => setcolor("yellow")}
        className='outline-none px-4 py-1 rounded-full'
        style={{backgroundColor:"yellow"}}>yellow</button>

        <button 
        onClick={() => setcolor("black")}
        className='outline-none px-4 py-1 rounded-full text-white'
        style={{backgroundColor:"black"}}>black</button>
      </div>
    </div>
  </div>
  </>   
  )
}

export default App
