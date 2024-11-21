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

const initialState = [];
export const useAddTodo = () => {
  const [addTodo, dispatch] = useReducer(addReducer, initialState);

  const addTodoList = (title) => {
    dispatch({ type: "AddTodo", data: title });
  };
  const deleteTodo = (item) => {
    dispatch({ type: "deleteTodo", data: item });
  };
  return [addTodo, addTodoList, deleteTodo];
};
