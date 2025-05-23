import { useState } from 'react'
import './App.css'
import Cart from './components/Cart.jsx'
import Cart1 from './components/cart1.jsx'


function App() {
  const [name, setName] = useState('')

  return (
    <>
    <Cart  name={name} setName={setName}>
      <p>the name is displaying from parent components: {name}</p>
    </Cart>
    <Cart1 name={name} />
    </>
  )
}

export default App
