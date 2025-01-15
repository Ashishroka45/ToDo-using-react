import { createContext, useContext } from "react";

export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Hello",
      completed: false,
    },
  ],
  addToDo: (todo) => {},
  updateToDo: (id, todo) => {},
  deleteToDo: (id) => {},
  toogleComplete:(id) => {}
});

export const useToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;
