import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSilce";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
