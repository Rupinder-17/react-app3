import React from "react";
import { useReducer } from "react";

const addReducer = (state, action) => {
  if (action.type == "AddTodo") {
    return [
      ...state,
      { id: crypto.randomUUID(), title: action.data, isChecked: false },
    ];
  }
  if (action.type == "deleteTodo") {
    return state?.filter((item) => item.id !== action.data.id);
  }
  return state;
};

export const useAddTodo = () => {
  let localStorageTodo = localStorage.getItem("todos");
  // console.log("todos", localStorageTodo);
  
  const initialState =
    localStorageTodo !== null ? JSON.parse(localStorageTodo) : [];
    // console.log("state", initialState);
    
  const [addTodo, dispatch] = useReducer(addReducer, initialState);
  localStorage.setItem("todos", JSON.stringify(addTodo));
  const addTodoList = (title) => {
    dispatch({ type: "AddTodo", data: title });
  };
  const deleteTodo = (item) => {
    dispatch({ type: "deleteTodo", data: item });
  };
  return [addTodo, addTodoList, deleteTodo];
};
