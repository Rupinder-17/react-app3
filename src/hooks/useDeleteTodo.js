import React from "react";
import { useReducer } from "react";

const deleteReducer = (state, action) => {
  if (action.type == "addDeletedItem") {
    return [...state, action.data];
  }
  if (action.type == "restore") {
    return state?.filter((item) => item.id !== action.data.id);
  }
  if(action.type == "permenentDelete"){
    return state.filter((item)=> item.id !== action.data.id)
  }
  return state;
};

export const useDeletedTodo = () => {
  // let deletedLocalStorage = localStorage.getItem("DeletedTodos");
  const initialState = JSON.parse(localStorage.getItem("DeletedTodos")) || [];
    // deletedLocalStorage !== null ? JSON.parse(deletedLocalStorage) : [];

  const [addDeleteTodos, dispatch] = useReducer(deleteReducer, initialState);
  localStorage.setItem("DeletedTodos", JSON.stringify(addDeleteTodos));

  const adddeletedItems = (item) => {
    dispatch({ type: "addDeletedItem", data: item });
  };
  const restoreTodos = (item) => {
    dispatch({ type: "restore", data: item });
  };
  const permanentDelete = (item)=>{
    dispatch({type: "permenentDelete", data: item})
  }
  return [addDeleteTodos, adddeletedItems, restoreTodos, permanentDelete];
};
