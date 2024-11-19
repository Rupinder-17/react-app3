import React from "react";
import { useReducer } from "react";

const AddReducer = (state, action) => {
  if (action.type == "AddTodo") {
    return [
      ...state,
      { id: crypto.randomUUID(), title: action.data, isChecked: false },
    ];
  }
  if(action.type == "deleteTodo"){
    return state?.filter((item)=> item.id !== action.data) 
  }
  return state;
};

const initialState = [];
export const useAddTodo = () => {
  const [addTodo, dispatch] = useReducer(AddReducer, initialState);

  const AddTodoList = (title) => {
    dispatch({ type: "AddTodo", data: title });
  };
  const DeleteTodo = (id) => {
    dispatch({ type: "deleteTodo", data: id });
  };
  return [addTodo, AddTodoList, DeleteTodo];
};
