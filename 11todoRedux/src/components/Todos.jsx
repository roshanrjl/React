import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/Todo/todoSilce";

function Todos() {
  const todos = useSelector((state) => state.todos.todos); // Make sure to access todos array
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <li
          className="flex items-center justify-between bg-white/20 border border-black/10 rounded-lg px-3 py-2 mb-2"
          key={todo.id}
        >
          <div className="text-white">{todo.text}</div>
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeTodo({ id: todo.id }))} // Correct payload format
          >
            ❌
          </button>
        </li>
      ))}
    </div>
  );
}

export default Todos;
