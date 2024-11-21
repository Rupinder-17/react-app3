import React from "react";
import { useReducer } from "react";

const deleteReducer = (state, action) => {

  if (action.type == "addDeletedItem") {
    return [...state, action.data];
  }
  if (action.type == "restore") {

    return state?.filter((item) => item.id !== action.data.id);
  }
  return state;
};

const initialState = [];
export const useDeletedTodo = () => {
  const [addDeleteTodos, dispatch] = useReducer(deleteReducer, initialState);

  const adddeletedItems = (item) => {
    dispatch({ type: "addDeletedItem", data: item });
  };
  const restoreTodos = (item) => {
    dispatch({ type: "restore", data: item });
  };
  return [addDeleteTodos, adddeletedItems, restoreTodos];
};
