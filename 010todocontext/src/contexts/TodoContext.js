import { createContext , useContext} from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo mess",
            completed:false,

        }
    ],
    addTodo:(todo) => {},
    removeTodo:(id) => {},
    toggleTodo:(id) => {},
    updateTdo:(id,todo) => {},
   // clearCompleted:() => {},
});//This create the context object that holds the data(toddo, in this case)

export const useTodo = ({}) => {
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider;