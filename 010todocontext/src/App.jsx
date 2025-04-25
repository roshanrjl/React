import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [Todos, setTodo] = useState([])

  addTodo = (todo) => {
    setTodo((prevTodos) => [...prevTodos, {id: Date.now(), ...todo}])

  }

  updateTodo = (id, updatedTodo) => {
    setTodo((prevTodos) => prevTodos.map((todo) => todo.id === id ? updatedTodo : todo))
  }

  removeTodo = (id) => {
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  toggleTodo = (id) => {
    setTodo((prevTodos) => prevTodos.map((todo) => todo.id === id ? {...todo,completed:!todo.completed}:todo))
  }
  

  return (
    <TodoProvider value={{Todos, addTodo, removeTodo, toggleTodo, updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
