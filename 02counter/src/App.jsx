//implementation of hookes in react

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)
  //let counter= 8;

  const incerasevalue = () =>{
    if(counter>=20){

    }else{

      counter=counter+1;
      setCounter(counter);
    }

  }
  const decreasevalue = () =>{
    if(counter<=0){
      console.log("cannot decrease the counter  ")
    }else{

      counter=counter-1;
      setCounter(counter);
    }
  }
 
  return (
    <>
    <h1>coffee and code in night
    </h1>
    <h1>counter app</h1>
    <h2>count is:{counter}</h2>
    <br />
    <button onClick={incerasevalue}>increase count</button>
    <br />
    <br />
    <button onClick={decreasevalue}>decrease count</button>

        
    </>
  )
}

export default App
