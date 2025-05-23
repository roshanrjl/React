import React from 'react'

function Cart({name, setName, children}) {
  return (
    <div>
        <input type=""
        onChange={(e) => setName(e.target.value)}
        />
        <p>this is name from child component: {name}</p>

        {children}
    
    </div>
  )
}

export default Cart