import React from "react";
import { useReducer } from "react";

const deleteReducer = (state, action) => {
  console.log("st", {state, action});
  
  if (action.type == "addDeletedItem") {
    return [...state, action.data];
  }
  if(action.type == "restore"){
    return state?.filter((item)=> item.id !== action.data)
  }
  return state
};

const initialState = [];
export const useDeletedTodo = () => {
  const [addDeleteTodos, dispatch] = useReducer(deleteReducer, initialState);

  const AdddeletedItems = (title) => {
    dispatch({ type: "addDeletedItem", data: title });
  };
  const RestoreTodos = (id)=>{
    dispatch({type: "restore" , data: id})
  }
  return [addDeleteTodos, AdddeletedItems, RestoreTodos];
};
