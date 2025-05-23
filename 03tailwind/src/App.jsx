
import './App.css'
import Card from './componets/card'

function App() {
  const title="beautiful girl using varibale";
  const disc= "this is the discription of beautiful girl from variable"

  return (
    <>
      <h1  className='bg-green-400 text-black p-4 rounded-xl'>hello world</h1>
      <Card Title={title} disc={disc} />
      <br />
      <Card Title='Another beautiful girl'  />
    </>
  )
}

export default App
