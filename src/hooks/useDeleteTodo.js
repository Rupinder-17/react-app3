import React from "react";
import { useReducer } from "react";

const deleteReducer = (state, action) => {
  if (action.type == "addDeleteedItem") {
    return [...state, action.data];
  }
  if(action.type == "restore"){
    return state?.filter((item)=> item.id !== action.data)
  }
};

const initialState = [];
export const useDeleteTodo = () => {
  const [addDeleteTodos, dispatch] = useReducer(deleteReducer, initialState);

  const AdddeletedItems = (title) => {
    dispatch({ type: "addDeleteedItem", data: title });
  };
  const RestoreTodos = (id)=>{
    dispatch({type: "restore" , data: id})
  }
  return [addDeleteTodos, AdddeletedItems, RestoreTodos];
};
