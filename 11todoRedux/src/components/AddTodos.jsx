import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSilce"; // fixed spelling

function AddTodos() {
    const [input, setInput] = React.useState("");
    const dispatch = useDispatch();
    
    const addTodohandler = (e) => {
        e.preventDefault(); 
        dispatch(addTodo(input));
        setInput("");
    };
   
    return (
        <form className="flex" onSubmit={addTodohandler}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add Todo
            </button>
        </form>
    );
}

export default AddTodos;
