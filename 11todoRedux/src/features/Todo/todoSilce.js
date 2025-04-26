import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos:[{id:1,Text:"Hello world"}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducres:{
        addTodo:(state, action)=>{
            const newTodo={
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(newTodo)
        },
      removeTodo:(state, action)=>{
            const id=action.payload.id
            state.todos=state.todos.filter((todo)=>todo.id!==id)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export  default todoSlice.reducer